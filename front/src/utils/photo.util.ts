import { compressPhoto, optimizePhoto, uploadPhoto } from "@/api/photo";
import { UploadPhotoDTO } from "@/types/api";
import { UploadFile, UploadProps } from "antd";
import { AxiosProgressEvent } from "axios";

export const getAxiosUploadedFileId = (file: UploadFile<any>): string => {
    return file?.response?.data?.id || file.uid;
};

export const createCustomRequest = (
    doesCompress: boolean,
    doesOptimizePhoto: boolean
) => {
    const customRequest: UploadProps["customRequest"] = async (options) => {
        const { onSuccess, file, onProgress, onError } = options;
        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: (event: AxiosProgressEvent) => {
                if (onProgress) {
                    onProgress({
                        percent: (event.loaded / (event?.total || 1)) * 100,
                    });
                }
            },
        };

        const photos: UploadPhotoDTO = { pcImage: file as File };

        if (doesCompress) {
            const compressedPhoto = await compressPhoto(photos.pcImage);
            photos.pcImage = compressedPhoto;
        }

        if (doesOptimizePhoto) {
            await optimizePhoto(photos);
        }

        try {
            const res = await uploadPhoto(photos, config);
            if (onSuccess) {
                onSuccess(res);
            }
        } catch (error) {
            console.error(error);
            if (onError) {
                // @ts-ignore
                onError();
            }
        }
    };
    return customRequest;
};
