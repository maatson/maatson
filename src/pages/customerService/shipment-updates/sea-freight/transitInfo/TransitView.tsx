import React, { ChangeEvent, useState } from "react";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import { ExcelIcon, SendIcon } from "../../../../../components/icons/Icons";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";
import WarningChip from "../../../../../components/chips/WarningChip";

const TransitView: React.FC = () => {
  const [dummyData, setDummyData] = useState({
    bookingNumber: "ihiqhx",
    containerDetails: [
      {
        containerType: "20’ft Dry Container",
        quantity: "5",
        pol: "Chennai, India",
        pod: "Colombo, Sri Lanka",
        containerData: [
          {
            vesselName: "Vessel A",
            voyageNumber: "V001",
            containerNumber: "C12345",
            portOfLoading: "Chennai",
            "atd(pol)": "2025-04-01T10:00:00",
            portOfDischarge: "Colombo",
            "eta(arrival)": "2025-04-05T14:00:00",
            "ata(arrival)": "2025-04-05T16:00:00",
          },
          {
            vesselName: "Vessel B",
            voyageNumber: "V002",
            containerNumber: "C67890",
            portOfLoading: "Chennai",
            "atd(pol)": "2025-04-02T12:00:00",
            portOfDischarge: "Colombo",
            "eta(arrival)": "2025-04-06T18:00:00",
            "ata(arrival)": "2025-04-06T20:00:00",
          },
        ],
      },
      {
        containerType: "40’ft Dry Container",
        quantity: "3",
        pol: "Mumbai, India",
        pod: "Singapore, Singapore",
        containerData: [
          {
            vesselName: "Vessel C",
            voyageNumber: "V003",
            containerNumber: "C11223",
            portOfLoading: "Mumbai",
            "atd(pol)": "2025-04-03T09:00:00",
            portOfDischarge: "Singapore",
            "eta(arrival)": "2025-04-08T11:00:00",
            "ata(arrival)": "2025-04-08T13:00:00",
          },
          {
            vesselName: "Vessel D",
            voyageNumber: "V004",
            containerNumber: "C44556",
            portOfLoading: "Mumbai",
            "atd(pol)": "2025-04-04T15:00:00",
            portOfDischarge: "Singapore",
            "eta(arrival)": "2025-04-09T17:00:00",
            "ata(arrival)": "2025-04-09T19:00:00",
          },
        ],
      },
    ],
  });

  const [activeTransitLeg, setActiveTransitLeg] = useState<number>(0);

  const handleChangeContainer = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedContainer = [
      ...dummyData.containerDetails[activeTransitLeg].containerData,
    ];
    updatedContainer[index] = {
      ...updatedContainer[index],
      [name]: value,
    };

    // Update the whole containerDetails object with the modified containerData
    const updatedDummyData = {
      ...dummyData,
      containerDetails: dummyData.containerDetails.map(
        (container, index) =>
          index === activeTransitLeg
            ? { ...container, containerData: updatedContainer } // Update only the containerData for the current container
            : container // Keep other container data unchanged
      ),
    };
    setDummyData(updatedDummyData);
  };

  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="bg-grey-aw-50 rounded shadow-sm p-3 flex items-center justify-between">
        <p className="text-lg font-semibold">BB2501030001 Details</p>
        <div className="flex items-center justify-center gap-4">
          <BlackButton
            label={"Send Mail"}
            size={"s"}
            variant={""}
            rightIcon={<SendIcon color="#ffffff" size={16} />}
          />
          <SuccessButton
            label={"Export"}
            size={"s"}
            variant={""}
            rightIcon={<ExcelIcon color="#ffffff" size={16} />}
          />
        </div>
      </div>
      <div className="bg-grey-aw-50 rounded shadow-sm p-6 flex gap-3  justify-between ">
        <ViewCard
          label={"Booking ID"}
          value={"BB2501030001"}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Company Name"}
          value={"BB2501030001"}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Port of loading"}
          value={"BB2501030001"}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Port of Discharge"}
          value={"BB2501030001"}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Cargo Type"}
          value={"BB2501030001"}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Booking validity Date"}
          value={"11/10/25"}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm ">Transit info Status</p>
          <WarningChip label={"Processing"} size={"s"} variant={"fill"} />
        </div>
      </div>
      <div className="bg-grey-aw-50 rounded shadow-sm p-4 flex flex-col gap-6">
        {Array.isArray(dummyData.containerDetails) && (
          <>
            <div className="p-2 flex items-center gap-2">
              {dummyData.containerDetails.length > 0 &&
                dummyData.containerDetails.map((_, containerDetailIndex) => (
                  <span
                    className={`${
                      containerDetailIndex === activeTransitLeg
                        ? " bg-black text-grey-ab-50"
                        : "text-black "
                    } px-4 py-1 rounded text-sm font-semibold transition-all duration-500 cursor-pointer`}
                    onClick={() => setActiveTransitLeg(containerDetailIndex)}
                  >
                    Transit leg {containerDetailIndex + 1}
                  </span>
                ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 bg-grey-aw-100 px-4 py-2 rounded">
                {
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {" "}
                    <ViewCard
                      label={"Container Type"}
                      value={
                        dummyData.containerDetails[activeTransitLeg]
                          .containerType
                      }
                      labelStyle="font-normal"
                      valueStyle="font-semibold"
                    />{" "}
                    <ViewCard
                      label={"Quantity"}
                      value={
                        dummyData.containerDetails[activeTransitLeg].quantity
                      }
                      labelStyle="font-normal"
                      valueStyle="font-semibold"
                    />
                    <ViewCard
                      label={"POL"}
                      value={dummyData.containerDetails[activeTransitLeg].pol}
                      labelStyle="font-normal"
                      valueStyle="font-semibold"
                    />{" "}
                    <ViewCard
                      label={"POD"}
                      value={dummyData.containerDetails[activeTransitLeg].pod}
                      labelStyle="font-normal"
                      valueStyle="font-semibold"
                    />
                  </div>
                }
                <div className="rounded-2xl px-2 py-1 flex items-center gap-1 bg-secondary-50 text-secondary-300 font-semibold text-2xs">
                  <p>Pending</p>
                  <span className="w-5 h-5 p-1 rounded-full bg-secondary-300 text-white">
                    00
                  </span>
                </div>
              </div>
              <div className="custom-scrollbar-small overflow-auto">
                {Array.isArray(
                  dummyData.containerDetails[activeTransitLeg]?.containerData
                ) &&
                  dummyData.containerDetails[activeTransitLeg].containerData
                    .length > 0 && (
                    <>
                      <table className=" w-full rounded ">
                        <thead>
                          <tr className="bg-grey-100 rounded">
                            {Object.keys(
                              dummyData.containerDetails[activeTransitLeg]
                                .containerData[0]
                            ).map((item, index) => (
                              <td
                                key={index}
                                className="min-w-[150px]  px-3 py-1 "
                              >
                                {item.replace(/([a-z])([A-Z])/g, "$1 $2")}
                              </td>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {dummyData.containerDetails[
                            activeTransitLeg
                          ].containerData.map((items: any, rowIndex) => (
                            <tr className=" rounded" key={rowIndex}>
                              {Object.keys(
                                dummyData.containerDetails[activeTransitLeg]
                                  .containerData[0]
                              ).map((key, index) => {
                                console.log(key);
                                return (
                                  <td
                                    key={index}
                                    className="min-w-[150px]  px-3 py-1 "
                                  >
                                    {/* {items[key]} */}
                                    <input
                                      type="text"
                                      value={items[key]}
                                      onChange={(e) =>
                                        handleChangeContainer(e, rowIndex)
                                      }
                                      name={key}
                                    />
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
              </div>{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransitView;
