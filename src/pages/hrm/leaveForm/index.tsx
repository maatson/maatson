import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const LeaveForm: React.FC = () => {
  return (
    <>
      {" "}
      <PageHeader
        breadCrums={[
          "Home",
          "HRM",
          location.pathname !== "/hrm/leave-form" ? "" : "Leave Form",
        ]}
        heading={location.pathname !== "/hrm/leave-form" ? "" : "Leave Form"}
      />{" "}
      <div className="bg-white  min-h-screen rounded">
        <Outlet />
      </div>
    </>
  );
};

export default LeaveForm;
