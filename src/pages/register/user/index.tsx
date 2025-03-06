import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const UserRegister: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {" "}
      <PageHeader
        breadCrums={[
          "Home",
          "Registration",
          location.pathname === "/registration-user/add"
            ? ["User Registration", "Register Form"]
            : location.pathname === "/registration-user/details"
            ? ["User Registration", "User Details"]
            : "User Registration",
        ].flat()}
        heading={
          location.pathname === "/registration-user/add"
            ? "Register"
            : location.pathname === "/registration-user/details"
            ? "User Details"
            : "User Registration"
        }
      />
      <Outlet />
    </>
  );
};

export default UserRegister;
