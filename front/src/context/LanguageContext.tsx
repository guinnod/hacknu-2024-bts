"use client";
import { mySessionStorage } from "@/lib/browserStorage";
import { Language } from "@/types/shared";
import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
} from "react";
import en from "../lib/languages/en";
import kz from "../lib/languages/kz";
import ru from "../lib/languages/ru";

const languagesMap = {
    ru,
    kz,
    en,
};

export type LanguageKey = "kz" | "en" | "ru";

type LanguageContextType = {
    language: Language;
    languageKey: LanguageKey;
    getHref: (href: string) => string;
};

export const languageOptions: { value: LanguageKey; label: string }[] = [
    {
        value: "kz",
        label: "Қазақша",
    },
    {
        value: "ru",
        label: "Русский",
    },
    {
        value: "en",
        label: "English",
    },
];

export const LanguageContext = createContext<LanguageContextType>({
    language: en,
    languageKey: "en",
    getHref: () => "/en",
});

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps extends PropsWithChildren {
    languageKey: LanguageKey;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({
    children,
    languageKey,
}) => {
    const language = languagesMap[languageKey];

    const getHref = (href: string): string => {
        let tempHref = `${href}`;

        if (tempHref.startsWith("/")) {
            tempHref = tempHref.substring(1);
        }

        return `/${languageKey}/${tempHref}`;
    };

    useEffect(() => {
        mySessionStorage?.set("language", languageKey);
    }, []);

    const provider: LanguageContextType = {
        language,
        languageKey,
        getHref,
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};
