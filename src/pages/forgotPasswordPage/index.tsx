import React from "react";
import ForgotPassword from "../../components/forgotPassword/ForgotPassword";
import CredentialsLayout from "../../components/layouts/CredentialsLayout";

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <CredentialsLayout children={<ForgotPassword />} />
    </>
  );
};

export default ForgotPasswordPage;
