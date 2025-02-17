import React from "react";
import LoginLayout from "../../components/layouts/CredentialsLayout";
import Login from "../../components/login/Login";

const SignIn: React.FC = () => {
  return (
    <>
      <LoginLayout children={<Login />} />
    </>
  );
};

export default SignIn;
