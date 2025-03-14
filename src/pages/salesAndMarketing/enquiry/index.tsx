import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const Enquiry: React.FC = () => {
    const location = useLocation();
  
  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Sales & Marketing",
          location.pathname === "/enquiry/add"
            ? ["Leads and CRM", "Add Enquiry"]
            : location.pathname === "/enquiry/details"
            ? ["Leads and CRM", "Enquiry Details"]
            : "Leads and CRM",
        ].flat()}
        heading={location.pathname === "/enquiry" ? "Leads and CRM" : "Enquiry"}
      />{" "}
      <Outlet />
    </>
  );
};

export default Enquiry;
