import React from "react";
import { Avatar, Dropdown, MenuProps, Space, Typography } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  SafetyOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Color } from "../../component/variable";
import { ConfirmAlert } from "../../component/alert/ComfirmAlert";
import { useAppDispatch, useAppSelector } from "../../store/reduxHook";
import { getAuthorStore, logout } from "../../store/author/author";
import { Key } from "../../enum/commom";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    label: (
      <Space>
        <InfoCircleOutlined />
        <Text>Infomation Account</Text>
      </Space>
    ),
    key: Key.ONE
  },
  {
    label: (
      <Space>
        <SafetyOutlined />
        <Text>Change password</Text>
      </Space>
    ),
    key: Key.TWO
  },
  {
    type: "divider"
  },
  {
    label: (
      <Space>
        <LogoutOutlined style={{ color: Color.red }} />
        <Text type="danger">Logout</Text>
      </Space>
    ),
    key: Key.THREE
  }
];

export default function SettingMenu() {
  const { username } = useAppSelector(getAuthorStore);
  const dispatch = useAppDispatch();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    key === Key.THREE &&
      ConfirmAlert({
        content: "Are you sure?",
        handleOk: () => {
          dispatch(logout());
        }
      });
  };

  return (
    <Space>
      <Text className="text-user">{username || ""}</Text>
      <Dropdown menu={{ items, onClick }} trigger={["click"]} arrow>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} className="user-avatar" />
        </a>
      </Dropdown>
    </Space>
  );
};
