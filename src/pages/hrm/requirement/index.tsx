import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

const Requirement: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {" "}
      <PageHeader
        breadCrums={[
          "Home",
          "HRM",
          location.pathname === "/hrm/requirement/details"
            ? ["Requirement", "Job Detail"]
            : "Requirement",
        ].flat()}
        heading={
          location.pathname !== "/hrm/requirement"
            ? "Job Details"
            : "Job Requirement"
        }
      />
      <Outlet />
    </>
  );
};

export default Requirement;
