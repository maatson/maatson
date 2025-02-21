import React from "react";
import OtpVerification from "../../components/otpVerification/OtpVerification";
import CredentialsLayout from "../../components/layouts/CredentialsLayout";

const OtpVerificationPage: React.FC = () => {
  return (
    <>
      <CredentialsLayout children={<OtpVerification />} />
    </>
  );
};

export default OtpVerificationPage;
