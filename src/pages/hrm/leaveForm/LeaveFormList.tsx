import React, { useCallback, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import AddLeaveForm from "./AddLeaveForm";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import LeaveCard from "../../../components/leaveCard/LeaveCard";
import RejectLeaveForm from "./RejectLeaveForm";

const LeaveFormList: React.FC = () => {
  const [isAddLeaveForm, setAddLeaveForm] = useState<boolean>();
  const [isRejectLeaveForm, setRejectLeaveForm] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

  // const [row,setRow]=useState([])
  const rows = [1, 2, 3];

  const handleItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setItemsPerPage(Number(event.target.value));
      setCurrentPage(1);
    },
    []
  );

  const handlechangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isAddLeaveForm && <AddLeaveForm cancel={() => setAddLeaveForm(false)} />}
      {isRejectLeaveForm && (
        <RejectLeaveForm cancel={() => setRejectLeaveForm(false)} />
      )}
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold">Leave Form List</p>
        <div onClick={() => setAddLeaveForm(true)}>
          {" "}
          <PrimaryButton
            label={"Add Leave Form"}
            size={""}
            variant={""}
            leftIcon={<AddIcon color="#fdfdfd" />}
          />
        </div>
      </div>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 border-y border-grey-ab-200">
        <div className="flex gap-4 items-center">
          <GroupField
            label={""}
            type={""}
            placeholder={"Search"}
            name={""}
            value={""}
            onChange={() => {}}
            parentStyle="max-w-[320px] w-full min-w-[180px]"
            error={false}
            rightIcon={<SearchIcon />}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"date"}
            placeholder={"date"}
            name={""}
            value={""}
            parentStyle="max-w-[180px] w-full min-w-[180px]"
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
        </div>
        <SuccessButton
          label={"Export"}
          size={"lg"}
          variant={""}
          rightIcon={<ExcelIcon color="#fdfdfd" />}
        />
      </div>
      <div className="flex flex-col gap-3 px-4 py-3">
        {rows.length > 0 &&
          rows.map((item, index) => (
            <div key={index}>
              <LeaveCard
                rejectClick={() => setRejectLeaveForm(true)}
                approveClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          ))}
      </div>
      <div className="px-3 py-4 flex justify-between items-center">
        <div className="text-xs text-grey-ab-200">
          Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
          {currentPage * itemsPerPage} of {rows.length} Entries
        </div>

        <CustomPagination
          totalItems={rows.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlechangePage}
        />

        <div className="flex gap-4 items-center">
          <p className="text-xs text-grey-ab-300">Items Per Page</p>
          <Select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            size="small"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#121212",
              padding: "0px 4px",
              borderRadius: "4px",
            }}
          >
            {[5, 10, 15, 20, 25].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default LeaveFormList;
