import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Employees: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "HRM", path: "/hrm/employees" },
  ];
  let heading = "Employees";

  if (pathname === "/hrm/employees") {
    breadCrums.push({ label: "Employees", path: "/hrm/employees" });
    heading = "Employees";
  } else if (pathname === "/hrm/employees/employee-profile") {
    breadCrums.push(
      { label: "Employees", path: "/hrm/employees" },
      { label: "Profile" }
    );
    heading = "Profile";
  } else if (pathname === "/hrm/employees/employee-form") {
    breadCrums.push(
      { label: "Employees", path: "/hrm/employees" },
      { label: "Add Employee" }
    );
    heading = "Add Employee";
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Employees;
