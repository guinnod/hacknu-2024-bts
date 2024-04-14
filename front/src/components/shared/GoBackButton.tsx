"use client";
import { FC } from "react";

interface GoBackButtonProps {}

export const GoBackButton: FC<GoBackButtonProps> = ({}) => {
    return (
        <button
            className="bg-white absolute top-0 left-0 mt-14 ml-9"
            onClick={() => {
                window.history.back();
            }}
        >
            Назад
        </button>
    );
};
