import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import SuccessButton from "../../../components/buttons/SuccessButton";
import {
  HambergerMenuIcon,
  CubeIcon,
  AddIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import EmployeeTable from "../../../components/hrm/employees/EmployeeTable";
import EmployeeCard from "../../../components/hrm/employees/EmployeeCard";

const EmployeeList: React.FC = () => {
  const [data, setData] = useState({
    search: "",
    department: "",
    branchLocation: "",
    designation: "",
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
      <div
        className={`w-full rounded-xs ${hambergerMenuIcon ? "shadow-lg" : ""} `}
      >
        {/* Table heading 1 */}
        <div className="w-full bg-grey-aw-50 flex justify-between rounded-tl-xs rounded-tr-xs p-3 items-center">
          <p className="text-lg font-semibold">Employee List</p>
          <NavLink to={"/hrm/employees/employee-form"}>
            <PrimaryButton
              label={"Add Employee"}
              size={"l"}
              variant={"primary"}
              leftIcon={<AddIcon color="#FCFCFC" />}
            />
          </NavLink>
        </div>

        {/* Table heading 2 */}
        <div className="w-full border-y flex justify-between p-3 border-y-grey-ab-200 bg-grey-aw-50 shadow-lg items-start">
          <div className="flex gap-4 items-center w-full flex-wrap">
            <GroupField
              type={"type"}
              name={"search"}
              value={data.search}
              label={""}
              placeholder="Search"
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="max-w-[280px] w-full"
              rightIcon={<SearchIcon color="#6A6A6A" />}
            />
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex gap-2 rounded-sm border p-2 border-grey-200">
              <div
                className={`w-6 h-6 rounded-xs p-1 cursor-pointer ${
                  hambergerMenuIcon ? "bg-secondary" : "bg-grey-600"
                }`}
                onClick={handleHambergerMenuIcon}
              >
                <HambergerMenuIcon size="16px" />
              </div>
              <div
                className={`w-6 h-6 rounded-xs p-1 cursor-pointer ${
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
        <div className="w-full  flex justify-start gap-4 p-3 border-y-grey-ab-200 bg-grey-aw-50 shadow-lg items-start">
          <GroupField
            type={"select"}
            name={"department"}
            value={data.department}
            label={""}
            placeholder="Department"
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="max-w-[280px] w-full"
            // size="s"
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
            // size="s"
            parentStyle="max-w-[280px] w-full"
          />
          <GroupField
            type={"select"}
            name={"designation"}
            value={data.designation}
            label={""}
            placeholder="Designation"
            onChange={handleChange}
            error={false}
            errorMessage={""}
            // size="s"
            parentStyle="max-w-[280px] w-full"
          />
        </div>

        {hambergerMenuIcon && <EmployeeTable />}
        {/* {hambergerMenuIcon && <CustomTable columns={[]} rows={[]} isCheckbox={true} />} */}
        {cubeIcon && <EmployeeCard />}
      </div>
    </>
  );
};

export default EmployeeList;
