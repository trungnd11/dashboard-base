import { Button, Form, Input, Typography } from "antd";
import React, { useEffect } from "react";
import { getAuthorStore, login } from "../../store/author/author";
import { useAppDispatch, useAppSelector } from "../../store/reduxHook";
import { LoginContainer } from "./loginStyle";
import bg from "../../static/images/login/login.jpg";
import { setTitle } from "../../commom/function";

const { Title } = Typography;

export default function Login() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getAuthorStore);

  const onFinish = (values: any) => {
    dispatch(login(values));
  };

  useEffect(() => {
    setTitle("Đăng nhập");
  }, []);

  return (
    <LoginContainer>
      <div className="form-container">
        <div className="bg-image">
          <img src={bg} alt="login-backgroud" />
        </div>
        <div className="form">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            labelAlign="left"
            colon={false}
          >
            <Title className="title" level={3}>Đăng nhập</Title>
            <Form.Item
              label=""
              name="username"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <div className="button">
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Đăng nhập
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </LoginContainer>
  );
}
