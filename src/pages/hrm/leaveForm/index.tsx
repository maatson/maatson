import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const LeaveForm: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "HRM", path: "/hrm/employees" },
  ];
  let heading = "Leave Form";

  if (pathname === "/hrm/leave-form") {
    breadCrums.push({ label: "Leave Form" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <div className="bg-white min-h-screen rounded">
        <Outlet />
      </div>
    </>
  );
};

export default LeaveForm;
