import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const BillOfLadingSeaFreight: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const isViewBillOfLading = pathname.startsWith(
    "/bill-of-lading/sea-freight/view"
  );
  const isCreateBillOfLading = pathname.startsWith(
    "/bill-of-lading/sea-freight/createBl"
  );
  const isEditBillOfLading = pathname.startsWith(
    "/bill-of-lading/sea-freight/editBl"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Documentation", path: "/bill-of-lading/sea-freight" },
  ];
  let heading = "Bill of Lading (Sea Freight)";

  // Adjust breadcrumbs and heading based on flags
  if (isViewBillOfLading) {
    breadCrums.push(
      {
        label: "Bill of Lading (Sea Freight)",
        path: "/sea-air-schedule/sea-freight",
      },
      { label: "Bill of Lading Details" }
    );
    heading = "Bill of Lading Details";
  } else if (isCreateBillOfLading) {
    breadCrums.push(
      {
        label: "Bill of Lading (Sea Freight)",
        path: "/sea-air-schedule/sea-freight",
      },
      { label: "Create BL Draft" }
    );
    heading = "Create BL Draft";
  } else if (isEditBillOfLading) {
    breadCrums.push(
      {
        label: "Bill of Lading (Sea Freight)",
        path: "/sea-air-schedule/sea-freight",
      },
      { label: "Edit BL Draft" }
    );
    heading = "Edit BL Draft";
  } else {
    breadCrums.push({ label: "Bill of Lading (Sea Freight)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default BillOfLadingSeaFreight;
