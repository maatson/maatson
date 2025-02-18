import React from "react";
import Login from "../../components/login/Login";
import CredentialsLayout from "../../components/layouts/CredentialsLayout";

const SignIn: React.FC = () => {
  return (
    <>
      <CredentialsLayout children={<Login />} />
    </>
  );
};

export default SignIn;
