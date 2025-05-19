import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const BillOfLadingAirFreight: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const isViewBillOfLading = pathname.startsWith(
    "/bill-of-lading/air-freight/view/"
  );
  const isCreateBillOfLading = pathname.startsWith(
    "/bill-of-lading/air-freight/createBl"
  );
  const isEditBillOfLading = pathname.startsWith(
    "/bill-of-lading/air-freight/editBl"
  );
  const isViewBillOfLadingDraft = pathname.startsWith(
    "/bill-of-lading/air-freight/viewBl"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Documentation", path: "/bill-of-lading/air-freight" },
  ];
  let heading = "Bill of Lading (Air Freight)";

  // Adjust breadcrumbs and heading based on flags
  if (isViewBillOfLading) {
    breadCrums.push(
      {
        label: "Bill of Lading (Air Freight)",
        path: "/bill-of-lading/air-freight",
      },
      { label: "Bill of Lading Details" }
    );
    heading = "Bill of Lading Details";
  } else if (isCreateBillOfLading) {
    breadCrums.push(
      {
        label: "Bill of Lading (Air Freight)",
        path: "/bill-of-lading/air-freight",
      },
      { label: "Create BL Draft" }
    );
    heading = "Create BL Draft";
  } else if (isEditBillOfLading) {
    breadCrums.push(
      {
        label: "Bill of Lading (Air Freight)",
        path: "/bill-of-lading/air-freight",
      },
      { label: "Edit BL Draft" }
    );
    heading = "Edit BL Draft";
  } else if (isViewBillOfLadingDraft) {
    breadCrums.push(
      {
        label: "Bill of Lading (Air Freight)",
        path: "/sea-air-schedule/air-freight",
      },
      { label: "BL Draft Details" }
    );
    heading = "BL Draft Details";
  } else {
    breadCrums.push({ label: "Bill of Lading (Air Freight)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default BillOfLadingAirFreight;
