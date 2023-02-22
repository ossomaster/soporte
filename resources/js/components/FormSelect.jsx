import { Input, Select } from "antd";
import React from "react";
import { useController } from "react-hook-form";

const FormSelect = ({ name, control, ...rest }) => {
    const { field } = useController({
        name,
        control,
    });

    return (
        <Select
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            ref={field.ref}
            style={{
                display: "block",
            }}
            {...rest}
        />
    );
};

export default FormSelect;
