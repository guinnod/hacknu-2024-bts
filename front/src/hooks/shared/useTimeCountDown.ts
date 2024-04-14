import { useEffect, useState } from "react";

const getLeftTime = (distance: number) => {
    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
    );
    const minutes = Math.max(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        0
    );
    const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

    const daysStr = days < 10 ? `0${days}` : `${days}`;
    const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return {
        days: daysStr,
        hours: hoursStr,
        minutes: minutesStr,
        seconds: secondsStr,
    };
};

export const useTimeCountDown = (date: Date) => {
    const [time, setTime] = useState(
        getLeftTime(date.getTime() - new Date().getTime())
    );
    const [isOver, setIsOver] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = date.getTime() - now;
            if (distance < 0) {
                setIsOver(true);
                clearInterval(interval);
            }
            const leftTime = getLeftTime(distance);
            setTime(leftTime);
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);
    return { time, isOver };
};
