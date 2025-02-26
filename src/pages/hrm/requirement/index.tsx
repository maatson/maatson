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
          location.pathname === "/hrm/requirement/detail"
            ? ["Requirement", "Job Detail"]
            : "",
        ]}
        heading={
          location.pathname !== "/hrm/attendance"
            ? "Holidays"
            : "Job Requirement"
        }
      />
      <div className="bg-white  min-h-screen rounded">
        <Outlet />
      </div>
    </>
  );
};

export default Requirement;
