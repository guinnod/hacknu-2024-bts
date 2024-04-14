import Link from "next/link";
import { FC } from "react";

interface LogoProps {
    href?: string;
}

export const Logo: FC<LogoProps> = ({ href = "/en/home/" }) => {
    return (
        <Link
            href={href}
            className="text-2xl flex gap-4 text-primary items-center font-medium hover:text-yellow"
        >
            <img
                className="h-16 w-auto"
                src="https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/1.webp"
                alt=""
            />{" "}
            OptiCash
        </Link>
    );
};
