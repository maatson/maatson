import React from "react";
import { Outlet } from "react-router-dom";

const Booking: React.FC = () => {
  return (
    <div>
      Booking <Outlet />
    </div>
  );
};

export default Booking;
