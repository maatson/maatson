import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const EmptyDepot: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Registration", path: "/registration-empty-depot" },
  ];
  let heading = "Empty Depot Registration";

  const isAddEmptyDepot = pathname.startsWith("/registration-empty-depot/add");
  const isEditEmptyDepot = pathname.startsWith(
    "/registration-empty-depot/edit"
  );
  const isEmptyDepotDetails = pathname.startsWith(
    "/registration-empty-depot/details"
  );

  if (isAddEmptyDepot) {
    breadCrums.push(
      { label: "Empty Depot Registration", path: "/registration-empty-depot" },
      { label: "Add Empty Depot" }
    );
    heading = "Add Empty Depot";
  } else if (isEditEmptyDepot) {
    breadCrums.push(
      { label: "Empty Depot Registration", path: "/registration-empty-depot" },
      { label: "Edit Empty Depot" }
    );
    heading = "Edit Empty Depot";
  } else if (isEmptyDepotDetails) {
    breadCrums.push(
      { label: "Empty Depot Registration", path: "/registration-empty-depot" },
      { label: "Empty Depot Details" }
    );
    heading = "Empty Depot Details";
  } else {
    breadCrums.push({ label: "Empty Depot Registration" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default EmptyDepot;
