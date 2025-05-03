import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const UserRegister: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Registration", path: "/registration-user" },
  ];
  let heading = "User Registration";

  if (pathname === "/registration-user/add") {
    breadCrums.push(
      { label: "User Registration", path: "/registration-user" },
      { label: "Register Form" }
    );
    heading = "Register";
  } else if (pathname === "/registration-user/details") {
    breadCrums.push(
      { label: "User Registration", path: "/registration-user" },
      { label: "User Details" }
    );
    heading = "User Details";
  } else {
    breadCrums.push({ label: "User Registration" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default UserRegister;
