import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const VendorRegister: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Registration", path: "/registration-vendor" },
  ];
  let heading = "Vendor Registration";

  const isAddVendor = pathname === "/registration-vendor/add";
  const isVendorDetails = pathname.startsWith("/registration-vendor/details");

  if (isAddVendor) {
    breadCrums.push(
      { label: "Vendor Registration", path: "/registration-vendor" },
      { label: "Add Vendor" }
    );
    heading = "Vendor Register";
  } else if (isVendorDetails) {
    breadCrums.push(
      { label: "Vendor Registration", path: "/registration-vendor" },
      { label: "Vendor Details" }
    );
    heading = "Vendor Details";
  } else {
    breadCrums.push({ label: "Vendor Registration" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default VendorRegister;
