import React, { useEffect } from "react";
import { Table, Typography } from "antd";
import { useQuery } from "react-query";
import axios from "axios";
import { ColumnsType } from "antd/es/table";
import { setTitle } from "../../commom/function";

const { Title } = Typography;

export default function BankAll() {
  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "namw",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (value) => <img src={value} />
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
  ];

  const getListBank = async () => {
    const { data } = await axios.get(`https://63b97e133329392049f4e003.mockapi.io/users`);
    return data;
  };

  const { data, isLoading } = useQuery(["userProfile"], getListBank);

  useEffect(() => {
    setTitle("Bank all");
  }, []);

  return (
    <>
      <Title level={3}>Bank Load All</Title>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          locale: { items_per_page: "" },
          pageSizeOptions: [10, 20, 50, 100],
        }}
        loading={isLoading}
      />
    </>
  );
}
