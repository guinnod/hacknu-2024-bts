import { GoBackButton } from "@/components/shared/GoBackButton";

export default function NotFoundPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <GoBackButton />
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col w-full gap-5 items-center">
                    <h2 className="text-[250px]">404</h2>
                    <h2 className="text-[32px]">Страница не найдена</h2>
                </div>
            </div>
        </div>
    );
}
