import React, { ReactNode, useMemo } from "react";
import { Form } from "antd";
import { Controller } from "react-hook-form";
import DynamicComponent from "../../dynamicComponent/DynamicComponent";

interface Props {
  name: string
  label?: string | ReactNode
  formState?: any
  control?: any
  typeInput?: "input" | "select" | "date-picker" | "checkbox" | "radio"
  schema: any
  children?: ReactNode
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

export default function FormInput({ name, label, formState: { errors }, control, typeInput, schema, children }: Props) {
  const ItemCompponent = useMemo(() => DynamicComponent(typeInput ?? "input"), [typeInput]);

  return (
    <>
      <Form.Item
        { ...formItemLayout }
        label={label}
        labelAlign="left"
        colon={false}
        validateStatus={errors[name] ? "error" : "success"}
        help={errors[name] ? errors[name].message : null}
        required={!!schema?.fields[name]?.exclusiveTests?.required}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <ItemCompponent {...field} status={errors[name] ? "error" : ""} />
            );
          }}
        />
      </Form.Item>
    </>
  );
}
