import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { Outlet, useLocation } from "react-router-dom";

const VendorRegister: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {" "}
      <PageHeader
        breadCrums={[
          "Home",
          "Registration",
          location.pathname === "/registration-vendor/add"
            ? ["Vendor Registration", "Add Vendor"]
            : location.pathname.startsWith("/registration-vendor/details")
            ? ["Vendor Registration", "Vendor Details"]
            : "Vendor Registration",
        ].flat()}
        heading={
          location.pathname === "/registration-vendor/add"
            ? "Vendor Register"
            : location.pathname.startsWith("/registration-vendor/details")
            ? "Vendor Details"
            : "Vendor Registration"
        }
      />
      <Outlet />
    </>
  );
};

export default VendorRegister;
