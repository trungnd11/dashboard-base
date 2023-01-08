import React, { CSSProperties } from "react";
import { Modal, Space } from "antd";
import { CloseOutlined, CheckOutlined, CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { Color } from "../variable";
import { TypeConfirm } from "../../enum/commom";

const okButtonStyle: CSSProperties = {
  borderColor: Color.green,
  color: Color.green
};

export const ConfirmAlert = (props: {
  title?: string
  content?: string
  handleOk: Function
  typeConfirm?: "warning" | "success"
}) => {
  const {
    title,
    content,
    handleOk,
    typeConfirm
  } = props;
  return (
    <>
      {
        Modal.confirm({
          title: title ?? "Xác nhận",
          content,
          icon: typeConfirm === TypeConfirm.SUCCESS ? <CheckCircleOutlined /> : <WarningOutlined />,
          okText: (
            <Space>
              <CheckOutlined />
              <span>Đồng ý</span>
            </Space>
          ),
          cancelText: (
            <Space>
              <CloseOutlined />
              <span>Đóng</span>
            </Space>
          ),
          centered: true,
          onOk: () => handleOk(),
          cancelButtonProps: { danger: true },
          okButtonProps: {
            type: "default",
            style: okButtonStyle
          },
          className: "modal-comfirm-custom"
        })
      }
    </>
  );
};
