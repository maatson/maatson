import React, { useCallback, useState } from "react";
import GroupField from "../../../../../components/groupField/GroupField";
import {
  AddIcon,
  ExcelIcon,
  LocationIcon,
  SearchIcon,
} from "../../../../../components/icons/Icons";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../../../components/pagination/CustomPagination";
import BlackButton from "../../../../../components/buttons/BlackButton";
import UpdateScheduleCard from "../../components/cards/UpdateScheduleCard";
import { Link } from "react-router-dom";

interface RowData {
  id: string | number;
}

const UpdateSchedule: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [rows, setRows] = useState<RowData[]>([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);

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
      <div className="p-3 flex justify-between items-center text-grey-ab-900">
        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold">Vessel Schedule List</p>
          <GroupField
            label={""}
            type={"text"}
            placeholder={"Search"}
            name={"search"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            rightIcon={<SearchIcon color="#6A6A6A" />}
          />
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/sea-air-schedule/add-sea-schedule">
            <PrimaryButton
              label={"Add Schedule"}
              size={"l"}
              variant={""}
              leftIcon={<AddIcon color="#ffffff" />}
            />
          </Link>
          <SuccessButton
            label={"Export"}
            size={""}
            variant={"l"}
            rightIcon={<ExcelIcon color="#ffffff" />}
          />
        </div>
      </div>
      <div className="p-3 gap-4 flex flex-col">
        {" "}
        <p className="text-lg font-semibold">Schedule</p>
        <div className="flex gap-4 items-end">
          <GroupField
            label={"Port of Loading"}
            type={"text"}
            placeholder={"Enter POL"}
            name={"portOfLoading"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            leftIcon={<LocationIcon color="#2c398f" />}
          />
          <GroupField
            label={"Port of Discharge"}
            type={"text"}
            placeholder={"Enter POD"}
            name={"portOfDischarge"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            leftIcon={<LocationIcon color="#2c398f" />}
          />
          <GroupField
            label={"Updated  Date"}
            type={"date"}
            placeholder={""}
            name={""}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <BlackButton label={"Search"} size={"l"} variant={""} />
        </div>
      </div>
      <div className="px-8 py-6 gap-4 flex flex-col">
        <UpdateScheduleCard
          isSeaFreight={true}
          editpath="/sea-air-schedule/edit-sea-schedule"
          viewPath="/sea-air-schedule/vessel-details"
        />
        <UpdateScheduleCard
          isSeaFreight={true}
          editpath="/sea-air-schedule/edit-sea-schedule"
          viewPath="/sea-air-schedule/vessel-details"
        />
      </div>
      <div className="px-3 py-4 flex justify-between items-center">
        <div className="text-xs text-grey-ab-200">
          Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
          {currentPage *
            (itemsPerPage > rows.length ? rows.length : itemsPerPage)}{" "}
          of {rows.length} Entries
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

export default UpdateSchedule;
