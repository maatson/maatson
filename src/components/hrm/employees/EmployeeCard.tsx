import React from "react";
import BlackChip from "../../chips/BlackChip";
import EmployeeImage from "/images/sample/employee.png";
import GradientChip from "../../chips/GradientChip";
import PrimaryChip from "../../chips/PrimaryChip";
import { EmailIcon, PhoneIcon } from "../../icons/Icons";

const EmployeeCard: React.FC = () => {
  return (
    <>
      <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-3 shadow-lg p-3 max-w-[245px] mx-auto">
        <div className="flex justify-between items-center">
          <input type="checkbox" name="" id=""/>
          <div className="flex flex-col gap-1">
            <span className="xs-3">Experience</span>
            <div className="flex justify-end">
              <BlackChip label={"3+"} size={"s"} variant={"mix"} />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-16 h-16 ">
              <img
                src={EmployeeImage}
                alt="EmployeeImage"
                className="w-full h-full"
              />
            </div>
            <div className="text-center text-grey-ab-800 font-semibold">
              Cooper, Kristin
            </div>
          </div>
          <div className="flex gap-1">
            <GradientChip label={"CEO"} size={"s"} variant={"fill"} />
            <PrimaryChip label={"Department"} size={"s"} variant={"primary"} />
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-xs p-2 bg-grey-100">
          <div className="min-w-[205px] flex justify-between items-center">
            <p className="xs-2 text-grey-ab-400">Office Location</p>
            <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
          </div>
          <div className="flex gap-3">
            <EmailIcon size="16px" color="#2C398F" />
            <p className="text-xs text-grey-ab-400">tienlapspktnd@gmail.com</p>
          </div>
          <div className="flex gap-3">
            <PhoneIcon size="16px" color="#2C398F" />
            <p className="text-xs text-grey-ab-400">+61 2 6178 5284</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
