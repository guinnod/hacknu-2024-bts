import { useTimeCountDown } from "@/hooks/shared/useTimeCountDown";
import clsx from "clsx";
import { FC } from "react";

interface TimeCountDownProps {
    date: Date;
    className?: string;
}

export const TimeCountDown: FC<TimeCountDownProps> = ({ className, date }) => {
    const { time, isOver } = useTimeCountDown(date);
    return (
        <div className={clsx(className)}>
            <span>{time.hours}</span>:<span>{time.minutes}</span>:
            <span>{time.seconds}</span>
        </div>
    );
};
