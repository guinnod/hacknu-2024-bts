import { ChatProvider } from "@/context/ChatContext";
import { LanguageKey, LanguageProvider } from "@/context/LanguageContext";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default function LanguageLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { language: string };
}) {
    const languageKey = params.language;

    if (!["kz", "ru", "en"].includes(languageKey)) {
        notFound();
    }

    return (
        <LanguageProvider languageKey={languageKey as LanguageKey}>
            <ChatProvider>{children}</ChatProvider>
        </LanguageProvider>
    );
}

export async function generateStaticParams() {
    const languageKeys = ["kz", "ru", "en"];
    return languageKeys;
}
