import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const ContainerReleaseOrder: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Operations", path: "/container-release-order" },
  ];

  let heading = "Container Release Order";

  if (pathname.startsWith("/container-release-order/create")) {
    breadCrums.push(
      { label: "Container Release Order", path: "/container-release-order" },
      { label: "CRO Create" }
    );
    heading = "CRO Create";
  } else if (pathname.startsWith("/container-release-order/view")) {
    breadCrums.push(
      { label: "Container Release Order", path: "/container-release-order" },
      { label: "CRO Details" }
    );
    heading = "CRO Details";
  } else {
    breadCrums.push({
      label: "Container Release Order",
      path: "/container-release-order",
    });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default ContainerReleaseOrder;
