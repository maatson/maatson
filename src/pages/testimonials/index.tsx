import React from "react";
import PageHeader from "../../components/header/PageHeader";
import { Outlet } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Testimonials: React.FC = () => {
  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Testimonials" },
  ];
  let heading = "Testimonials";

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Testimonials;
