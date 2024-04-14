import { ConfigProvider, Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { FC } from "react";
const { TextArea } = Input;
export const CustomTextArea: FC<TextAreaProps> = ({ ...restProps }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextPlaceholder: "rgba(24, 10, 41, 0.5)",
                    fontSize: 16,
                },
            }}
        >
            <TextArea
                bordered={false}
                placeholder="Write message..."
                autoSize={{ minRows: 1, maxRows: 6 }}
                rows={1}
                {...restProps}
            />
        </ConfigProvider>
    );
};
