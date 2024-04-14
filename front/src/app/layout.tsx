import { AntdProvider } from "@/context/AntdContext";
import { QueryProvider } from "@/context/QueryContext";
import { roboto } from "@/styles/fonts";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OptiCash",
    description: "Web app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full bg-gray-100">
            <body className={clsx(roboto.variable, "h-full")}>
                <QueryProvider>
                    <AntdProvider>{children}</AntdProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
