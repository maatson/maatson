import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { AddIcon } from "../../../components/icons/Icons";

const BookingList: React.FC = () => {
  return (
    <>
      <div className="bg-grey-aw-50 shadow-lg rounded-xs">
        <div className="flex p-3 justify-between items-center">
          <p className="text-lg text-grey-ab-900 font-semibold">Booking List</p>
          <Link to={"/booking/add"}>
            <PrimaryButton
              label={"Add Booking"}
              size={"l"}
              variant={"primary"}
              leftIcon={<AddIcon color="#FCFCFC" />}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookingList;
