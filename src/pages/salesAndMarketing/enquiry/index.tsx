import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Enquiry: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Sales & Marketing", path: "/enquiry" },
  ];
  let heading = "Leads and CRM";

  const isAddEnquiry = pathname === "/enquiry/add";
  const isEnquiryDetails = pathname.startsWith("/enquiry/details");

  if (isAddEnquiry) {
    breadCrums.push(
      { label: "Leads and CRM", path: "/enquiry" },
      { label: "Add Enquiry" }
    );
    heading = "Add Enquiry";
  } else if (isEnquiryDetails) {
    breadCrums.push(
      { label: "Leads and CRM", path: "/enquiry" },
      { label: "Enquiry Details" }
    );
    heading = "Enquiry Details";
  } else {
    breadCrums.push({ label: "Leads and CRM" });
    heading = "Leads and CRM";
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Enquiry;
