import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Vgm: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Operations", path: "/vgm-filing" },
  ];

  let heading = "VGM Filing Update";

  if (pathname.startsWith("/vgm-filing/create")) {
    breadCrums.push(
      { label: "VGM Filing Update", path: "/vgm-filing" },
      { label: "VGM Filing Form" }
    );
    heading = "VGM Filing Form";
  } else if (pathname.startsWith("/vgm-filing/edit")) {
    breadCrums.push(
      { label: "VGM Filing Update", path: "/vgm-filing" },
      { label: "Edit VGM Filing" }
    );
    heading = "Edit VGM Filing";
  } else if (pathname.startsWith("/vgm-filing/view")) {
    breadCrums.push(
      { label: "VGM Filing Update", path: "/vgm-filing" },
      { label: "VGM Filing Details" }
    );
    heading = "VGM Filing Details";
  } else {
    breadCrums.push({
      label: "VGM Filing Update",
      path: "/vgm-filing",
    });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Vgm;
