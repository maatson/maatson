import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Bank: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const isBankDetails = pathname.startsWith("/accounts/bank/details");

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/bank" },
    { label: "Bank", path: "/accounts/bank" },
  ];
  let heading = "Bank";

  if (isBankDetails) {
    breadCrums.push({
      label: "Bank Details",
    });
    heading = "Bank Details";
  } 

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Bank;
