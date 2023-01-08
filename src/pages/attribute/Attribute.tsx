import React, { useEffect } from "react";
import { Typography } from "antd";
import axios from "axios";
import Table, { ColumnsType } from "antd/es/table";
import { useQuery } from "react-query";
import { setTitle } from "../../commom/function";

const { Title } = Typography;

export default function Attribute() {
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
    setTitle("Attribute");
  }, []);

  return (
    <>
      <Title level={3}>Attribute</Title>
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
