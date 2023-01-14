/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useMemo, useState } from "react";
import { Menu, MenuProps } from "antd";
import routers from "../../routers/routers";
import { RoutersModel } from "../../model/routersModel/RoutersModel";
import { NavLink, useLocation } from "react-router-dom";
import DynamicIcon from "../../component/icon/DynamicIcon";
import { SiderBarContainer } from "./siderBarStyle";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const rootSubmenuKeys = routers.map((item) => item.id.toString());

export default function SiderBar() {
  const [openKeys, setOpenKeys] = useState<string[]>([
    routers[0].id.toString(),
  ]);
  const [selected, setSelected] = useState<string[]>();
  const { pathname } = useLocation();

  const breadscums = (routes: RoutersModel[], preName?: string[]) => {
    for (let i = 0; i < routes?.length; i++) {
      const item = routes[i];
      if (item.path === pathname) {
        if (preName) {
          setSelected(() => [...preName, item.id.toString()]);
          return;
        } else {
          setSelected(() => [item.id.toString()]);
          return;
        }
      } else if (item.children) {
        preName
          ? breadscums(item.children, [...preName, item.id.toString()])
          : breadscums(item.children, [item.id.toString()]);
      }
      continue;
    }
  };

  const items2: any = (routes: RoutersModel[]) =>
    routes?.map((item) => {
      const ItemIcon = DynamicIcon(item.icon);
      return !item.children
        ? getItem(
          <NavLink to={item.path} title={item.name}>
            {item.name}
          </NavLink>,
          `${item.id}`,
          item?.icon && typeof item?.icon === "string" && <ItemIcon />
        )
        : item.children &&
        getItem(
          `${item.name}`,
          `${item.id}`,
          item?.icon && typeof item?.icon === "string" && <ItemIcon />,
          items2(item.children)
        );
    });

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    if (!rootSubmenuKeys.includes(latestOpenKey!)) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelectItem: MenuProps["onSelect"] = (data) => {
    setOpenKeys((pre) => data.keyPath);
  };

  const item = useMemo(
    () => items2(routers),
    []
  );

  useEffect(() => {
    breadscums(routers);
  }, [pathname]);

  useEffect(() => {
    selected && setOpenKeys(() => selected);
  }, [selected]);

  return (
    <SiderBarContainer>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={item}
        onSelect={onSelectItem}
        selectedKeys={selected}
      />
    </SiderBarContainer>
  );
}
