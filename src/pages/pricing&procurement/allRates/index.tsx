import React, { useState } from "react";
import PageHeader from "../../../components/header/PageHeader";

const AllRates: React.FC = () => {
  const [isSeaFreight, setSeaFreight] = useState<boolean>(true);

  return (
    <>
      <PageHeader
        breadCrums={["Home", "Pricing & Procurement", "All Rates"].flat()}
        heading={"All Rates"}
      />
      <div className="flex items-center text-sm">
        <div className="flex items-center gap-2 bg-grey-50 px-2 py-2 rounded-sm font-semibold ">
          <button
            className={`${
              isSeaFreight ? "bg-primary-900 text-grey-aw-50" : ""
            } px-4 py-2 rounded transition-all duration-500`}
            onClick={() => setSeaFreight(true)}
          >
            Sea Freight
          </button>
          <button
            className={`${
              !isSeaFreight ? "bg-primary-900 text-grey-aw-50" : ""
            } px-4 py-2 rounded transition-all duration-500`}
            onClick={() => setSeaFreight(false)}
          >
            Air Freight
          </button>
        </div>
      </div>
    </>
  );
};

export default AllRates;
