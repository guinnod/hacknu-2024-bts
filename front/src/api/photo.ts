import { axios, axiosShared } from "@/lib/axios";
import { UploadPhotoDTO } from "@/types/api";
import { tryWithErrorLog } from "@/utils/shared.util";
import { AxiosRequestConfig } from "axios";

const fetchCompressPhoto = (maxSize: number, formData: FormData) => {
    return fetch(`${process.env.NEXT_PUBLIC_COMPRESSOR_URL}?max=${maxSize}`, {
        method: "POST",
        body: formData,
    });
};

export async function compressPhoto(
    inputFile: File,
    maxSize: number = 300
): Promise<File> {
    try {
        const formData = new FormData();
        formData.append("image", inputFile);
        const response = await fetchCompressPhoto(maxSize, formData);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes(inputFile.type)) {
            const blob = await response.blob();

            const file = new File([blob], inputFile.name, {
                type: inputFile.type,
            });

            return file;
        } else {
            throw new Error("Response is not of type image/jpeg");
        }
    } catch (error) {
        console.error("Error:", error);
        return inputFile;
    }
}

export const optimizePhoto = async (photos: UploadPhotoDTO): Promise<void> => {
    await tryWithErrorLog(async () => {
        photos.tabletImage = await compressPhoto(photos.pcImage, 100);
    });
    await tryWithErrorLog(async () => {
        photos.mobileImage = await compressPhoto(photos.pcImage, 50);
    });
};

export const deletePhoto = async (photoId: string) => {
    return axios.delete(`api/admin/item-image/${photoId}`);
};

export const uploadPhoto = async (
    photos: UploadPhotoDTO,
    config?: AxiosRequestConfig<FormData>
) => {
    const formData = new FormData();

    formData.append("pc_image", photos.pcImage);
    formData.append("tablet_image", photos.tabletImage || photos.pcImage);
    formData.append("mobile_image", photos.mobileImage || photos.pcImage);

    return axiosShared.post(
        "https://jasaw-development-backend.vercel.app/api/admin/item-image/",
        formData,
        config
    );
};
