import React, { useCallback, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import BlackButton from "../../../components/buttons/BlackButton";
import {
  ExcelIcon,
  LocationIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import RateTariffCard from "./RateTariffCard";
type CargoDimensionType = {
  size: string;
  rate: number;
  currency: string;
};
interface RateTariffData {
  pricingId: string;
  modeOfTransportation: string;
  portOfLoading: string;
  portOfDischarge: string;
  products: string[];
  cargoType: string;
  cargoDimensions: CargoDimensionType[];
  carrierName: string;
  validityDate: string;
}

const RateTariffList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [rows, setRows] = useState<RateTariffData[]>([
    {
      pricingId: "1",
      modeOfTransportation: "sea freight",
      portOfDischarge: "chittakong",
      portOfLoading: "chennai",
      products: [""],
      carrierName: "happg",
      cargoType: "fcl",
      validityDate: "2/3/24",
      cargoDimensions: [
        { size: "40ft reefers", rate: 1000, currency: "USD" },
        { size: "20ft reefers", rate: 1000, currency: "USD" },
      ],
    },
    {
      pricingId: "2",
      modeOfTransportation: "air freight",
      portOfDischarge: "dubai",
      portOfLoading: "malayasia",
      products: [""],
      carrierName: "happg",
      cargoType: "lcl",
      validityDate: "2/3/24",
      cargoDimensions: [{ size: "1 metric ton", rate: 1000, currency: "USD" }],
    },
    {
      pricingId: "3",
      modeOfTransportation: "air freight",
      portOfDischarge: "spain",
      portOfLoading: "veince",
      products: [""],
      carrierName: "happg",
      cargoType: "bulk",
      validityDate: "2/3/24",
      cargoDimensions: [],
    },
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
    <div className="flex flex-col gap-4">
      <div className="bg-grey-aw-50 rounded  h-full">
        <div className="p-3 flex items-center justify-between border-b border-grey-ab-100">
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Rate Tariff List</p>
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
          <div className="flex gap-4 items-center">
            <SuccessButton
              label={"Export"}
              size={"l"}
              variant={""}
              rightIcon={<ExcelIcon color="#ffffff" />}
            />
          </div>
        </div>

        <div className="flex items-end gap-4 px-4 py-2">
          <GroupField
            label={"Port of Loading"}
            type={"text"}
            placeholder={"Enter POL"}
            name={"pol"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            leftIcon={<LocationIcon color="#2c398f" />}
          />{" "}
          <GroupField
            label={"Port of Discharge"}
            type={"text"}
            placeholder={"Enter POD"}
            name={"pod"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            leftIcon={<LocationIcon color="#2c398f" />}
          />{" "}
          <GroupField
            label={"Transportation Type"}
            type={"select"}
            placeholder={"Select Type"}
            name={"modeOfTransportation"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            options={[
              { label: "sea freight", value: "sea freight" },
              { label: "air freight", value: "air freight" },
            ]}
            parentStyle="basis-1/4"
          />
          <GroupField
            label={"Price Validity"}
            type={"date"}
            placeholder={"Enter Date	"}
            name={"priceValidity"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/4"
          />
          <BlackButton label={"Search"} size={"l"} variant={""} />
        </div>
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-4">
        {rows.length > 0 ? (
          rows.map((pricingItem, index) => (
            <RateTariffCard
              pricingId={pricingItem.pricingId}
              modeOfTransportation={pricingItem.modeOfTransportation}
              portOfLoading={pricingItem.portOfLoading}
              portOfDischarge={pricingItem.portOfDischarge}
              products={pricingItem.products}
              cargoType={pricingItem.cargoType}
              cargoDimensions={pricingItem.cargoDimensions}
              carrierName={pricingItem.carrierName}
              validityDate={pricingItem.validityDate}
              key={index}
            />
          ))
        ) : (
          <div>no data</div>
        )}
      </div>
      {/* pagination */}
      <div className="px-3 py-4 flex justify-between items-center  bg-white rounded">
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
    </div>
  );
};

export default RateTariffList;
