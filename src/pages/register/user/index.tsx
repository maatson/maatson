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
            : "User Registration",
        ].flat()}
        heading={
          location.pathname === "/registration-user/add"
            ? "Register"
            : "User Registration"
        }
      />
      <Outlet />
    </>
  );
};

export default UserRegister;
