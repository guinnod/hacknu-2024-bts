"use client";

import { EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Table, TableColumnsType } from "antd";
import Link from "next/link";
import { DeleteButton } from "./DeleteButton";
import {
    CardResponse,
    useCardsQuery,
    useDeleteCardMutation,
    useStartScraping,
} from "./queries";

const columns: TableColumnsType<CardResponse> = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "URL",
        dataIndex: "url",
        render: (_, record) => {
            return (
                <a
                    href={record.url}
                    target="_blank"
                    className="whitespace-nowrap truncate overflow-hidden w-96 block"
                >
                    {record.url}
                </a>
            );
        },
    },
    {
        title: "Edit",

        render: (_, record) => {
            return (
                <Link href={`/admin/create-card/${record.id}`}>
                    <Button icon={<EditOutlined />}>Edit</Button>
                </Link>
            );
        },
    },
    {
        title: "Delete",

        render: (_, record) => {
            return <DeleteCard id={record.id} />;
        },
    },
];

function DeleteCard({ id }: { id: number }) {
    const { mutateAsync } = useDeleteCardMutation(id);
    return (
        <DeleteButton
            onConfirm={async () => {
                await mutateAsync();
            }}
        />
    );
}

export default function Page() {
    const { data, isPending } = useCardsQuery();
    const { mutateAsync } = useStartScraping();
    return (
        <div>
            <Link href="/admin/create-card" className="mr-4">
                <Button type="primary" className="mb-4">
                    Добавить карту
                </Button>
            </Link>
            <Popconfirm
                title="Обновить данные"
                description="Вы уверены, что хотите обновить данные?"
                onConfirm={async () => {
                    await mutateAsync();
                }}
            >
                <Button type="default" className="mb-4">
                    Обновить данные
                </Button>
            </Popconfirm>
            <Table
                columns={columns}
                dataSource={data}
                rowKey={"id"}
                loading={isPending}
            />
        </div>
    );
}
