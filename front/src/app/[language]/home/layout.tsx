import { Header } from "@/components/ui/Header";
import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children?: ReactNode }) {
    return (
        <AuthProvider>
            <div className="relative z-40">
                <Header isMain={false} />
            </div>
            {children}
        </AuthProvider>
    );
}
