import React from "react";
import FormLogin from "./FormLogin";

export default function FormInstance() {
  const handleSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <>
      <FormLogin
        onHandleSubmit={(data: any) => handleSubmit(data)}
      />
    </>
  );
}
