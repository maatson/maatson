import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const Booking: React.FC = () => {
  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Sales & Marketing",
          location.pathname === "/booking/add"
            ? ["Booking", "Add Booking"]
            : location.pathname === "/booking/details"
            ? ["Booking", "Booking Details"]
            : location.pathname === "/booking/convert-to-booking"
            ? ["...", "Enquiry", "Convert to Booking"]
            : "Booking",
        ].flat()}
        heading={
          location.pathname === "/booking/convert-to-booking"
            ? "Convert to Booking"
            : "Booking"
        }
      />{" "}
      <Outlet />
    </>
  );
};

export default Booking;
