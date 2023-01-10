import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

import React from "react";

export default function FormInstance() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (data: { email: string }) => console.log(data);

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        label="Email"
        validateStatus={errors?.email ? "error" : "success"}
        help={errors?.email ? <span>{errors?.email?.message }</span> : null}
      >
        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{ required: "Email is required", maxLength: { value: 5, message: "Email is long" } }}
          render={({ field }) => (
            <Input { ...field } />
          )} />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
