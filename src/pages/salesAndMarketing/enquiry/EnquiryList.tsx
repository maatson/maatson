import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { AddIcon } from "../../../components/icons/Icons";
import { Link } from "react-router-dom";

const EnquiryList: React.FC = () => {
  return (
    <>
      <div className="bg-grey-aw-50 shadow-lg rounded-xs">
        <div className="flex p-3 justify-between items-center">
          <p className="text-lg text-grey-ab-900 font-semibold">Enquiry List</p>
          <Link to={"/enquiry/add"}>
            <PrimaryButton
              label={"Add Enquiry"}
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

export default EnquiryList;
