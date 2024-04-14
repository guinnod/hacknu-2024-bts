"use client";
import {
    FontColorsOutlined,
    GlobalOutlined,
    TransactionOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useBankCards, useCreateCardMutation } from "../queries";

export default function Page() {
    const { mutateAsync, isPending } = useCreateCardMutation();
    const { data: banks, isPending: isBankPending } = useBankCards();
    return (
        <div className="flex justify-center">
            <Form
                className="max-w-sm w-full"
                onFinish={async (values) => {
                    mutateAsync(values);
                }}
                layout="vertical"
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        prefix={<FontColorsOutlined />}
                        placeholder={"Называние"}
                    />
                </Form.Item>
                <Form.Item
                    name="url"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input prefix={<GlobalOutlined />} placeholder={"Ссылка"} />
                </Form.Item>
                <Form.Item
                    name="bank"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        suffixIcon={<TransactionOutlined />}
                        placeholder="Выберите банк"
                        loading={isBankPending}
                        options={banks?.map((bank) => ({
                            value: bank.id,
                            label: bank.name,
                        }))}
                    />
                </Form.Item>

                <Form.Item style={{ marginBottom: "0px" }}>
                    <Button
                        className="w-full"
                        type="primary"
                        htmlType="submit"
                        loading={isPending}
                    >
                        {"Создать"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
