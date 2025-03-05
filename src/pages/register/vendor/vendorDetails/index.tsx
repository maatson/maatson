import React from "react";
import { Outlet } from "react-router-dom";

const VendorDetails: React.FC = () => {
  return (
    <div>
      VendorDetails <Outlet />
    </div>
  );
};

export default VendorDetails;
