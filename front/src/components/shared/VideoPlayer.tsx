import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState } from "react";
interface VideoPlayerProps {
    src: string;
    className?: string;
}
export const MyVideoPlayer: FC<VideoPlayerProps> = ({ src, className }) => {
    const [isPaused, setIsPaused] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            setIsPaused(!video.paused);
            video.paused ? video.play() : video.pause();
        }
    };

    return (
        <div className={`relative rounded-[5px]`} style={{ borderRadius: 5 }}>
            <video
                onClick={togglePlayPause}
                ref={videoRef}
                style={{ objectFit: "cover" }}
                className={clsx("w-full rounded-[5px]", className)}
                loop
            >
                <source src={src}></source>
            </video>
            {isPaused && (
                <div
                    onClick={togglePlayPause}
                    className={clsx(
                        "absolute cursor-pointer rounded-[5px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        "flex justify-center items-center h-full w-full",
                        { "backdrop-blur-sm": isPaused }
                    )}
                >
                    <Image
                        src="/images/play-button.png"
                        alt="play"
                        width={60}
                        height={60}
                        style={{
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                    />
                </div>
            )}
        </div>
    );
};
