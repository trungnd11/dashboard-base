import { Result } from "antd";
import React, { useEffect } from "react";
import { setTitle } from "../../commom/function";

export default function Home() {
  useEffect(() => {
    setTitle("Trang chủ");
  }, []);

  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
    </div>
  );
}
