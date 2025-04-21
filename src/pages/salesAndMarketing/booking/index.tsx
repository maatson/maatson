import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Booking: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Sales & Marketing", path: "/booking" },
  ];
  let heading = "Booking";

  const isAddBooking = pathname === "/booking/add";
  const isBookingDetails = pathname.startsWith("/booking/details");
  const isConvertToBooking = pathname.startsWith("/booking/convert-to-booking");

  if (isAddBooking) {
    breadCrums.push(
      { label: "Booking", path: "/booking" },
      { label: "Add Booking" }
    );
    heading = "Add Booking";
  } else if (isBookingDetails) {
    breadCrums.push(
      { label: "Booking", path: "/booking" },
      { label: "Booking Details" }
    );
    heading = "Booking Details";
  } else if (isConvertToBooking) {
    breadCrums.push(
      { label: "Booking", path: "/booking" },
      { label: "Convert to Booking" }
    );
    heading = "Convert to Booking";
  } else {
    breadCrums.push({ label: "Booking" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default Booking;
