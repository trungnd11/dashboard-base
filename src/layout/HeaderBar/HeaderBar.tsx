import React from "react";
import { Typography } from "antd";
import { HeaderStyle } from "./hearderStyle";
import SettingMenu from "./SettingMenu";

const { Title } = Typography;

export default function HeaderBar() {
  return (
    <HeaderStyle>
      <Title level={3}>Bank Gateway</Title>
      <div className="infomation">
        <SettingMenu />
      </div>
    </HeaderStyle>
  );
};
