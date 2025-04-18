import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

const EnquiryRateFiling: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Pricing & Procurement",
          "Rate Filing (Enquiry)",
        ].flat()}
        heading={
          location.pathname.startsWith("/rate-filing-enquiry/rate-details")
            ? "Rate Details(Enquiry)"
            : "Rate Filing (Enquiry)"
        }
      />
      <Outlet />
    </>
  );
};

export default EnquiryRateFiling;
