import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RoutersModel } from "../../model/routersModel/RoutersModel";
import routers from "../../routers/routers";
import { BreadcrumbContainer } from "./breadcrumbStyle";
import DynamicIcon from "../icon/DynamicIcon";

interface TypeBreadscumb {
  name: string
  icon: string
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const [breadscumbNameSider, setBreadscumbNameSider] = useState<TypeBreadscumb[]>();

  const breadscums = (routes: RoutersModel[], preName?: TypeBreadscumb[]) => {
    for (let i = 0; i < routes.length; i++) {
      const breadcumb = routes[i];
      if (breadcumb.path === pathname) {
        if (preName) {
          setBreadscumbNameSider(() => [...preName, { name: breadcumb.name, icon: breadcumb?.icon }]);
          return;
        } else {
          setBreadscumbNameSider(() => [{ name: breadcumb.name, icon: breadcumb?.icon }]);
          return;
        }
      } else if (breadcumb.path === "/home") {
        continue;
      } else if (breadcumb.children) {
        preName
          ? breadscums(breadcumb.children, [...preName, { name: breadcumb.name, icon: breadcumb?.icon }])
          : breadscums(breadcumb.children, [{ name: breadcumb.name, icon: breadcumb?.icon }]);
      }
      continue;
    }
  };

  useEffect(() => {
    breadscums(routers);
  }, [pathname]);

  return (
    <BreadcrumbContainer id="breadsumb-wapper">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigation("/home")}>
          <HomeOutlined />
          <span>Home</span>
        </Breadcrumb.Item>
        {
          breadscumbNameSider?.map((item, index) => {
            const ItemIcon: any = item?.icon ? DynamicIcon(item.icon) : null;
            return (
              item.name !== "Home" && <Breadcrumb.Item key={index}>
                { ItemIcon && <ItemIcon /> }
                <span>{item.name}</span>
              </Breadcrumb.Item>
            );
          })
        }
      </Breadcrumb>
    </BreadcrumbContainer>
  );
}
