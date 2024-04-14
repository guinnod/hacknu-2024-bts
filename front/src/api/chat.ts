import { axiosAuthorized } from "@/lib/axios";
import { MessageType } from "@/types/chat";

export const getChat = () => {
    return axiosAuthorized.get(`api/chat/`);
};
export const defaultMsg = () => {
    return axiosAuthorized.get(`api/chat/default-messages/`);
};
export const sendMessage = (message: MessageType) => {
    return axiosAuthorized.post(`api/chat/`, message);
};
export const compensationSend = (data: any) => {
    return axiosAuthorized.post(`api/compensation/`, data);
};
export const getAnswer = (run_id: string) => {
    return axiosAuthorized.get(`api/chat/answer/${run_id}`);
};
export const getConfirm = () => {
    return axiosAuthorized.get(`api/pre-email-confirmation/`);
};
export const confirmEmail = (uid: string, token: string) => {
    return axiosAuthorized.get(`api/confirm-email/?uid=${uid}&token=${token}`);
};
