import { axiosAuthorized } from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

export interface CardResponse {
    id: number;
    name: string;
    url: string;
}

const getCards = () => {
    return axiosAuthorized.get<CardResponse[]>("/api/bank-card-type/");
};

export const useCardsQuery = () => {
    return useQuery({
        queryKey: ["cards"],
        queryFn: async () => {
            const { data } = await getCards();
            return data;
        },
    });
};

export interface CardResponse {
    id: number;
    bank: number;
    name: string;
    url: string;
}

const getCard = (id: number) => {
    return axiosAuthorized.get<CardResponse>(`/api/bank-card-type/${id}/`);
};

export const useCardQuery = (id: number) => {
    return useQuery({
        queryKey: ["card", id],
        queryFn: async () => {
            const { data } = await getCard(id);
            return data;
        },
    });
};

const deleteCard = (id: number) => {
    return axiosAuthorized.delete(`/api/bank-card-type/${id}/`);
};

export const useDeleteCardMutation = (id: number) => {
    const { message } = App.useApp();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            await deleteCard(id);
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["cards"] });
            message.success("Success!");
        },
        onError() {
            message.error("Error!");
        },
    });
};

export interface CreateCardRequest {
    name: string;
    url: string;
    bank: number;
}

const createCard = (data: CreateCardRequest) => {
    return axiosAuthorized.post(`/api/bank-card-type/`, data);
};

export const useCreateCardMutation = () => {
    const { message } = App.useApp();
    const queryClient = useQueryClient();
    const navigate = useRouter();
    return useMutation<void, void, CreateCardRequest>({
        mutationFn: async (values) => {
            await createCard(values);
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["cards"] });
            message.success("Success!");
            navigate.push("/admin");
        },
        onError() {
            message.error("Error!");
        },
    });
};

export interface UpdateCardRequest {
    id: number;
    name: string;
    url: string;
    bank: number;
}

const updateCard = (data: UpdateCardRequest, id: number) => {
    return axiosAuthorized.put(`/api/bank-card-type/${id}/`, data);
};

export const useUpdateCardMutation = (id: number) => {
    const { message } = App.useApp();
    const queryClient = useQueryClient();
    const navigate = useRouter();
    return useMutation<void, void, UpdateCardRequest>({
        mutationFn: async (values) => {
            await updateCard(values, id);
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["cards"] });
            message.success("Success!");
            navigate.push("/admin");
        },
        onError() {
            message.error("Error!");
        },
    });
};

export const useStartScraping = () => {
    const { message } = App.useApp();
    return useMutation({
        mutationFn: async () => {
            await axios.post(
                `https://cashback-scheduler-of5r5e4d7a-lm.a.run.app/trigger`
            );
        },
        onSuccess() {
            message.success("Successfully started!");
        },
        onError() {
            message.error("Error!");
        },
    });
};

interface BankResponse {
    id: number;
    name: string;
}

const getBanks = () => {
    return axiosAuthorized.get<BankResponse[]>(`/api/bank/`);
};

export const useBankCards = () => {
    return useQuery({
        queryKey: ["banks"],
        queryFn: async () => {
            const { data } = await getBanks();
            return data;
        },
    });
};
