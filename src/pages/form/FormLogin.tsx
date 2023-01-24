import React, { useMemo } from "react";
import { Button, Col, Row, Typography } from "antd";
import FormInput from "../../component/form/formInput/FormInput";
import withHandleForm from "../../component/form/hoc/withHandleForm";
import { Control, FieldValues, FormState } from "react-hook-form/dist/types";
import { AnyObjectSchema } from "yup";
import Lazy from "yup/lib/Lazy";
import { schema } from "./dataValidate";

function FormLogin(props: {
  control?: Control<FieldValues, any>
  formState?: FormState<FieldValues>
  schema?: AnyObjectSchema | Lazy<any, unknown>
}) {
  const { control, formState, schema } = props;

  const formInputProp = useMemo(() => ({
    control,
    formState,
    schema
  }), [formState, control]);

  return (
    <Row justify="center">
      <Col span={6}>
        <Typography.Title level={2}> Form Login </Typography.Title>
        <FormInput
          name="username"
          label="Tên đăng nhập"
          {...formInputProp}
        />
        <FormInput
          name="password"
          label="Mật khẩu"
          {...formInputProp}
        />
        <FormInput
          name="remember"
          label="Nhớ mật khẩu"
          {...formInputProp}
          typeInput="checkbox"
        />
        <Button htmlType="submit" type="primary">Submit</Button>
      </Col>
    </Row>
  );
}

export default withHandleForm(FormLogin, schema);
