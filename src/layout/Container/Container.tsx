import React, { useEffect } from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { ContainerStyle } from "./containerStyle";
import { useAppDispatch, useAppSelector } from "../../store/reduxHook";
import { SiderBarStore, toggleSiderBar } from "../../store/sider/sider";
import HeaderC from "../HeaderBar/HeaderBar";
import SiderBar from "../SiderBar/SiderBar";
import ContentWapper from "../ContentWapper/ContentWapper";

export default function Container() {
  const { collapsed } = useAppSelector(SiderBarStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sider = document.getElementById("sider");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    if (sider && content && footer) {
      new ResizeObserver((entries) => {
        content.style.marginLeft = `${sider.offsetWidth}px`;
        footer.style.marginLeft = `${sider.offsetWidth}px`;
      }).observe(sider);
    }
  }, [collapsed]);

  return (
    <ContainerStyle>
      <Layout hasSider>
        <Header className="header">
          <HeaderC />
        </Header>
        <Sider trigger={null} collapsible collapsed={collapsed} id="sider">
          <SiderBar />
          {React.createElement(collapsed ? RightOutlined : LeftOutlined, {
            className: "trigger",
            onClick: () => dispatch(toggleSiderBar()),
          })}
        </Sider>
        <Layout className="site-layout" style={{ minHeight: "100vh" }}>
          <Content style={{ overflow: "initial" }} id="content">
            <div className="site-layout-background">
              <ContentWapper />
            </div>
          </Content>
          <Footer id="footer">©2022 Created by Trungg</Footer>
        </Layout>
      </Layout>
    </ContainerStyle>
  );
}
