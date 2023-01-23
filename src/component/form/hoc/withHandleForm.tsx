import React, { FC } from "react";
import { Form } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Control, FieldValues, FormState } from "react-hook-form/dist/types";
import { AnyObjectSchema } from "yup";
import Lazy from "yup/lib/Lazy";

interface Props extends FieldValues {
  control?: Control<FieldValues, any>
  formState?: FormState<FieldValues>
  onHandleSubmit?: (data: FieldValues) => void
  schema: AnyObjectSchema | Lazy<any, unknown>
}

export default function withHandleForm(Component: FC<Props>) {
  const HandleComponent: FC<Props> = (props, ref) => {
    const { onHandleSubmit, schema } = props;
    const { control, formState, handleSubmit } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: FieldValues) => {
      onHandleSubmit && onHandleSubmit(data);
    };

    return (
      <Form
        onFinish={handleSubmit(onSubmit)}
      >
        <Component
          control={control}
          formState={formState}
          schema={schema}
        />
      </Form>
    );
  };
  return HandleComponent;
}