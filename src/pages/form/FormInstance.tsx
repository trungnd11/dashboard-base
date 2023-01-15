import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row, Space, Typography } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../component/form/formInput/FormInput";
import { schema } from "./dataValidate";
import { LoginModel } from "../../model/authorModel/LoginModel";

export default function FormInstance() {
  const [valueForm, setValueForm] = useState<LoginModel>();
  const { handleSubmit, control, formState, reset } = useForm<LoginModel>({
    resolver: yupResolver(schema),
  });

  const formInputProp = useMemo(() => ({
    control,
    formState,
    schema
  }), [formState, control]);

  const onSubmit = (data: LoginModel) => {
    setValueForm(data);
    reset();
  };

  return (
    <Row justify="center">
      <Col span={6}>
        <Typography.Title level={2}> Form Login </Typography.Title>
        <Form onFinish={handleSubmit(onSubmit)}>
          <FormInput
            name="username"
            label="Tên đăng nhập"
            { ...formInputProp }
          />
          <FormInput
            name="password"
            label="Mật khẩu"
            {...formInputProp }
          />
          <FormInput
            name="remember"
            label="Nhớ mật khẩu"
            {...formInputProp }
            typeInput="checkbox"
          />
          <Space>
            <Button htmlType="submit" type="primary">Submit</Button>
            <Typography.Text> {JSON.stringify(valueForm)} </Typography.Text>
            {
              valueForm && <Button danger onClick={() => setValueForm(() => undefined)}>Xóa</Button>
            }
          </Space>
        </Form>
      </Col>
    </Row>
  );
}
