import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Requirement: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "HRM", path: "/hrm/employees" },
  ];
  let heading = "Job Requirement";

  if (pathname === "/hrm/requirement/details") {
    breadCrums.push(
      { label: "Requirement", path: "/hrm/requirement" },
      { label: "Job Detail" }
    );
    heading = "Job Details";
  } else {
    breadCrums.push({ label: "Requirement" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Requirement;
