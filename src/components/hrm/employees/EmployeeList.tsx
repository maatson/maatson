import React, { useState } from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import GroupField from "../../groupField/GroupField";
import SuccessButton from "../../buttons/SuccessButton";
import {
  HambergerMenuIcon,
  CubeIcon,
  AddIcon,
  ExcelIcon,
  SearchIcon,
} from "../../icons/Icons";
import EmployeeTable from "./EmployeeTable";
import EmployeeCard from "./EmployeeCard";

const EmployeeList: React.FC = () => {
  const [data, setData] = useState({
    search: "",
    department: "",
    branchLocation: "",
  });
  const [hambergerMenuIcon, setHambergerMenuIcon] = useState<Boolean>(true);
  const [cubeIcon, setCubeIcon] = useState<Boolean>(false);
  const handleChange = () => {};

  const handleHambergerMenuIcon = () => {
    setHambergerMenuIcon(true);
    setCubeIcon(false);
  };
  const handleCubeIcon = () => {
    setHambergerMenuIcon(false);
    setCubeIcon(true);
  };
  return (
    <>
      <div className="w-full min-w-[1080px] rounded-xs shadow-lg">
        {/* Table heading 1 */}
        <div className="w-full bg-grey-aw-50 flex justify-between rounded-tl-xs rounded-tr-xs p-3 items-center">
          <p className="text-lg font-semibold">Employee List</p>
          <PrimaryButton
            label={"Add Employee"}
            size={"l"}
            variant={"primary"}
            leftIcon={<AddIcon color="#FCFCFC" />}
          />
        </div>

        {/* Table heading 2 */}
        <div className="w-full border-y flex justify-between p-3 border-y-grey-ab-200 bg-grey-aw-50">
          <div className="flex gap-4 items-center">
            {/* <div className="w-[280px] rounded-xs h-[48px] p-3 border border-grey-ab-50 shadow-xs"></div> */}
            <GroupField
              type={"type"}
              name={"search"}
              value={data.search}
              label={""}
              placeholder="Search"
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[280px]"
              rightIcon={<SearchIcon color="#6A6A6A" />}
            />
            <GroupField
              type={"select"}
              name={"department"}
              value={data.department}
              label={""}
              placeholder="Department"
              onChange={handleChange}
              error={false}
              errorMessage={""}
              inputStyle="text-xs"
            />
            <GroupField
              type={"select"}
              name={"branchLocation"}
              value={data.branchLocation}
              label={""}
              placeholder="Branch Location"
              onChange={handleChange}
              error={false}
              errorMessage={""}
              inputStyle="text-xs py-2" //This is temporary widht . Create dropdown component with size sm and add size props
            />
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 rounded-sm border p-2 border-grey-200">
              <div
                className={`w-6 h-6 rounded-xs p-1 ${
                  hambergerMenuIcon ? "bg-secondary" : "bg-grey-600"
                }`}
                onClick={handleHambergerMenuIcon}
              >
                <HambergerMenuIcon size="16px" />
              </div>
              <div
                className={`w-6 h-6 rounded-xs p-1 ${
                  cubeIcon ? "bg-secondary" : "bg-grey-600"
                }`}
                onClick={handleCubeIcon}
              >
                <CubeIcon size="16px" />
              </div>
            </div>
            <SuccessButton
              label={"Export"}
              size={"l"}
              variant={"primary"}
              rightIcon={<ExcelIcon color="#FCFCFC" />}
            />
          </div>
        </div>

        {/* Employee Attendence */}

        {hambergerMenuIcon && <EmployeeTable />}
        {cubeIcon && (
          <>
            <div className=" py-3 px-4 grid grid-cols-4 gap-3 item-center ">
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
            </div>
            {/* Pagination section */}
            <div className="h-14 border-t border-b border-t-grey-ab-100 border-b-grey-ab-100"></div>
          </>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
