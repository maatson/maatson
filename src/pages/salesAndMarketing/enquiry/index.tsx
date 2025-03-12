import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const Enquiry: React.FC = () => {
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
