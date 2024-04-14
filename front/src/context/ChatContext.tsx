"use client";
import { MessageType } from "@/types/chat";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface ChatState {
    // isChatListOpen: boolean;
    // chats: ChatPreviewType[];
    // activeChatId: string;
    // activeChatName: string;
    messages: MessageType[];
    isUpdated: boolean;
}

interface ChatActions {
    // setChats: (chats: ChatPreviewType[]) => void;
    addMessage: (message: MessageType) => void;
    setMessages: (messages: MessageType[]) => void;
    setIsUpdated: (isUpdated: boolean) => void;
}

type ChatContextType = ChatState & ChatActions;

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    // const [isChatListOpen, setIsChatListOpen] = useState(false);
    // const [chats, setChats] = useState<ChatPreviewType[]>([]);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [isUpdated, setIsUpdated] = useState<boolean>(false);
    // const [activeChatId, setActiveChatId] = useState<string>("");
    // const [activeChatName, setActiveChatName] = useState<string>("");

    // const openChatList = () => setIsChatListOpen(true);
    // const closeChatList = () => setIsChatListOpen(false);
    const addMessage = (message: MessageType) =>
        setMessages((prev) => [...prev, message]);
    const setMessagesState = (newMessages: MessageType[]) =>
        setMessages(newMessages);

    return (
        <ChatContext.Provider
            value={{
                // chats,
                // setChats,
                isUpdated,
                setIsUpdated,
                messages,
                addMessage,
                setMessages: setMessagesState,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChatContext must be used within a ChatProvider");
    }
    return context;
};
