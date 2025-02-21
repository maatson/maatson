import React from "react";
import ResetPassword from "../../components/resetPassword/ResetPassword";
import CredentialsLayout from "../../components/layouts/CredentialsLayout";

const ResetPasswordPage: React.FC = () => {
  return (
    <>
      <CredentialsLayout children={<ResetPassword />} />
    </>
  );
};

export default ResetPasswordPage;
