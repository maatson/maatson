import React from "react";
import PageHeader from "../../components/header/PageHeader";
import { Outlet } from "react-router-dom";

const Testimonials: React.FC = () => {

  return (
    <>
      <PageHeader
        breadCrums={["Home", "Testimonials"]}
        heading={"Testimonials"}
      />
      <Outlet />
    </>
  );
};

export default Testimonials;
