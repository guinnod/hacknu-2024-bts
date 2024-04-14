"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LanguageSelector = () => {
    const { language } = useLanguage();
    const pathname = usePathname();
    const removeLanguageFromHref = (href: string): string => {
        return href.substring(4);
    };
    const languageOptions = [
        { value: "kz", label: "Қазақша" },
        { value: "ru", label: "Русский" },
        { value: "en", label: "English" },
    ];
    const items: MenuProps["items"] = languageOptions.map((language) => ({
        key: language.value,
        label: (
            <Link
                href={`${language.value}/${removeLanguageFromHref(pathname)}`}
            >
                {language.label}
            </Link>
        ),
    }));

    return (
        <Dropdown menu={{ items }}>
            <Button>{language.name}</Button>
        </Dropdown>
    );
};
