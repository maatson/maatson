import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const EnquiryRateFiling: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Pricing & Procurement", path: "/rate-filing" },
  ];

  let heading = "Rate Filing";

  if (pathname.startsWith("/rate-filing/available-rates")) {
    breadCrums.push(
      { label: "Rate Filing", path: "/rate-filing" },
      { label: "Available Rates" }
    );
    heading = "Available Rates";
  } else if (pathname.startsWith("/rate-filing/create")) {
    breadCrums.push(
      { label: "Rate Filing", path: "/rate-filing" },
      { label: "Create Rate Filing" }
    );
    heading = "Create Rate Filing";
  } else {
    breadCrums.push({ label: "Rate Filing", path: "/rate-filing" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default EnquiryRateFiling;
