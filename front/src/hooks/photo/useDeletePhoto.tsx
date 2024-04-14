import { deletePhoto } from "@/api/photo";
import { getAxiosUploadedFileId } from "@/utils/photo.util";
import { App, UploadFile } from "antd";

export const useDeletePhoto = () => {
    const onOk = async (file: UploadFile<any>) => {
        await deletePhoto(getAxiosUploadedFileId(file));
    };
    const { modal } = App.useApp();

    const handleDeletePhoto = async (file: UploadFile<any>) => {
        return await modal.confirm({
            title: "Confirm",
            content: "Are you sure for deleting this photo?",
            onOk: async (close) => {
                try {
                    await onOk(file);
                } catch (error) {
                    close();
                }
            },
        });
    };
    return { handleDeletePhoto };
};
