import React from "react";
import Login from "../../components/login/Login";
import CredentialsLayout from "../../components/layouts/CredentialsLayout";

const ForgetPassword: React.FC = () => {
  return (
    <>
      <CredentialsLayout children={<Login />} />
    </>
  );
};

export default ForgetPassword;
