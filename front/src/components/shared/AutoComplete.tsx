import { AutoComplete as AntdAutoComplete, AutoCompleteProps } from "antd";
import { FC, useState } from "react";

export const AutoComplete: FC<AutoCompleteProps> = ({
    className,
    options = [],
    ...props
}) => {
    const [dynamicOptions, setDynamicOptions] = useState(options);
    const onSearch = (searchText: string) => {
        setDynamicOptions(
            options.filter((option) =>
                `${option?.label}`
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            )
        );
    };
    return (
        <AntdAutoComplete
            {...props}
            options={dynamicOptions}
            onSearch={onSearch}
        />
    );
};
