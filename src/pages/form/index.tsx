import React from "react";
import { schema } from "./dataValidate";
import FormLogin from "./FormLogin";

export default function index() {
  const handleSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <>
      <FormLogin
        onHandleSubmit={(data: any) => handleSubmit(data)}
        schema={schema}
      />
    </>
  );
}
