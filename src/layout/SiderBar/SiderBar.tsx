import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export default function SiderBar() {
  return (
    <><div className="logo" /><Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={[
        {
          key: "1",
          icon: <UserOutlined />,
          label: "nav 1",
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: "nav 2",
        },
        {
          key: "3",
          icon: <UploadOutlined />,
          label: "nav 3",
        },
      ]} /></>
  );
}
