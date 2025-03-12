import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const Enquiry: React.FC = () => {
  return (
    <>
      <PageHeader breadCrums={[]} heading={""} />
      <Outlet />
    </>
  );
};

export default Enquiry;
