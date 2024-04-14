import { Overwrite } from "@/types/shared";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
type IconProps = Overwrite<
    ImageProps,
    {
        alt?: string;
        src: string;
    }
>;
export const Icon: FC<IconProps> = ({
    width = 24,
    height = 24,
    src,
    className,
    alt,
    ...props
}) => {
    return (
        <Image
            className={clsx(
                className,
                "object-contain cursor-pointer",
                `w-[${width}px] h-[${height}px]`
            )}
            src={`/icons/${src}.svg`}
            alt={alt || src}
            width={width}
            height={height}
            {...props}
        />
    );
};
