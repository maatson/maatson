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
          location.pathname === "/hrm/employees"
            ? "Employee"
            : location.pathname === "/hrm/employees/employee-profile"
            ? ["Employees", "Profile"]
            : ["Employees", "Add Employee"]
        ].flat()}
        // breadCrums={[
        //   { label: "Home", path: "/" },
        //   { label: "HRM", path: "/hrm/employees" },
        //   location.pathname === "/hrm/employees"
        //     ? { label: "Employees", path: "/hrm/employees" }
        //     : location.pathname === "/hrm/employees/employee-profile"
        //     ? [
        //         { label: "Employees", path: "/hrm/employees" },
        //         { label: "Profile", path: "/hrm/employees/employee-profile" },
        //       ]
        //     : [
        //         { label: "Employees", path: "/hrm/employees" },
        //         { label: "Add Employee", path: "/hrm/employees/employee-form" },
        //       ],
        // ].flat()}
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
