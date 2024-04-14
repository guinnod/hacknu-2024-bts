export interface ChatBot {
    name: string;
    banner: string;
    logo: string;
    description: React.ReactNode;
    link: string;
}
export interface ChatHeaderProps {
    children: React.ReactNode;
}

export interface MessageType {
    // isRead?: boolean;
    content: string;
    // time: number;
    role?: string;
}
export interface MessageRequestType {
    run_id: string;
}
export interface AnswerType {
    content: any;
    status: string;
    answer: {
        role: string;
        content: string;
    };
}

export interface ChatPreviewType {
    name: string;
    last_message?: MessageType;
    id: string;
}

export interface ChatType {
    title: string;
    // id: string;
    messages: MessageType[];
}
