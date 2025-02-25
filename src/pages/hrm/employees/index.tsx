import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

const Employees: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "HRM",
          "Employee",
          location.pathname !== "/hrm/employees" &&
          location.pathname === "/hrm/employees/employee-profile"
            ? "Profile"
            : "Add Employee",
        ]}
        // breadCrums={[
        //   "Home",
        //   "HRM",
        //   "Employee",
        //   location.pathname === "/hrm/employees"
        //     ? null
        //     : location.pathname === "/hrm/employees/employee-form"
        //     ? "Add Employee"
        //     : "Profile",
        // ].filter(Boolean)}
        heading={
          location.pathname === "/hrm/employees/employee-profile"
            ? "Profile"
            : location.pathname === "/hrm/employees/employee-form"
            ? "Add Employee"
            : "Employees"
        }
      />
      <Outlet />
    </>
  );
};

export default Employees;
