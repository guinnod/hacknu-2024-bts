import { useEffect } from "react";

export const useFreezeDocumentScroll = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
};
