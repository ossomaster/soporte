import { Input } from "antd";
import React from "react";
import { useController } from "react-hook-form";

const FormInput = ({ name, control }) => {
    const { field } = useController({
        name,
        control,
    });

    return (
        <Input
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            ref={field.ref}
        />
    );
};

export default FormInput;
