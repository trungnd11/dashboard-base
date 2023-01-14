import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Form, Input, Row } from "antd";

export default function FormInstance() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (data: { email: string }) => console.log(data);

  return (
    <Row>
      <Col span={6}>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            label="Email"
            validateStatus={errors?.email ? "error" : "success"}
            help={errors?.email ? <span>{errors?.email?.message}</span> : null}
          >
            <Controller
              name="email"
              defaultValue=""
              control={control}
              rules={{ required: "Email is required", maxLength: { value: 5, message: "Email is long" } }}
              render={({ field }) => (
                <Input {...field} />
              )} />
          </Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  );
}
