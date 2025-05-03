import React, { ChangeEvent, useState } from "react";
import maatsonLogo from "/images/logo.svg";
import GroupField from "../../../../../components/groupField/GroupField";
import { AddIcon, DeleteIcon } from "../../../../../components/icons/Icons";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";

const EditDepartureConfirmation: React.FC = () => {
  const [data, setData] = useState({
    branchName: "Maatson Maritime Intl Opc Pvt Ltd",
    address:
      "No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV oil Mill, Kodungaiyur, Chennai- 600 118.",
    email: "dubai@123",
    mobile: "097893649",
    mawbNumber: "09jiwhc798",
    hawbNumber: "09jiwhc798",
    cargoType: "Fcl",
    flightType: "COA",
    flightNumber: "MCHN1234",
    carrierName: "Maersk Line",
    bookingNumber: "VOY97Y9BK",
    portOfLoading: "Chennai",
    portOfDischarge: "Colombo",
    transhipments: [{ countryLocation: "" }],
    departureDate: new Date(),
    departureTime: "",
    containerData: [
      {
        shipmentTerms: "FCL/FCL",
        grossWeight: "150000",
        volume: "150000",
        quantity: "-",
      },
      {
        shipmentTerms: "DAP (Delivered at Place)",
        grossWeight: "10000",
        volume: "150000",
        quantity: "-",
      },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeContainer = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedContainer = [...data.containerData];
    updatedContainer[index] = {
      ...updatedContainer[index],
      [name]: value,
    };

    setData({ ...data, containerData: updatedContainer });
  };

  const handleTranshipmentChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedTranshipments = [...data.transhipments];
    updatedTranshipments[index] = {
      ...updatedTranshipments[index],
      [name]: value,
    }; // Update the specific transhipment value
    setData({ ...data, transhipments: updatedTranshipments });
  };

  const handleAdd = () => {
    setData((prevData) => ({
      ...prevData,
      transhipments: [...prevData.transhipments, { countryLocation: "" }],
    }));
  };

  const handleDelete = (index: number) => {
    setData((prevData) => ({
      ...prevData,
      transhipments: prevData.transhipments.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    console.log("data :", data);
  };
  return (
    <div className="flex flex-col gap-6 px-8 py-6">
      <div className="flex flex-col gap-2">
        <div className="mx-auto">
          <img src={maatsonLogo} alt="logo" />
        </div>
        <p className="text-grey-ab font-semibold mx-auto">
          Departure Confirmation ( Air Freight){" "}
        </p>
        <div className="px-3 gap-4 py-3 flex justify-between">
          <div className="flex flex-col gap-3 basis-2/5">
            <ViewCard
              label={"Branch/Agent Name"}
              value={data.branchName}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Address"}
              value={data.address}
              labelStyle="font-semibold"
            />
          </div>
          <div className="flex flex-col gap-3">
            <ViewCard
              label={"Email"}
              value={data.email}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Mobile Number"}
              value={data.mobile}
              labelStyle="font-semibold"
            />
          </div>
        </div>
        {/* <div className="px-4 gap-4 py-3 flex flex-col bg-grey-200 rounded">
          <p className="text-lg font-semibold">Branch/Agent Information</p>
          <div className="flex gap-2 justify-between flex-wrap">
            <GroupField
              label={"Branch/Agent Name"}
              type={"select"}
              placeholder={"Enter Branch/Agent Name"}
              name={"branchName"}
              value={data.branchName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle=" w-1/3"
            />
            <GroupField
              label={"Mobile Number"}
              type={"tel"}
              placeholder={"Enter Mobile Date"}
              name={"mobileNumber"}
              value={data.mobile}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-1/3"
            />
            <GroupField
              label={"Address"}
              type={"textarea"}
              placeholder={"Enter Address"}
              name={"address"}
              value={data.address}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-1/3"
            />
            <GroupField
              label={"Email"}
              type={"email"}
              placeholder={"Enter Email"}
              name={"email"}
              value={data.email}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-1/3"
            />
          </div>
        </div> */}
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-4 w-1/3">
          <GroupField
            label={"MAWB  Number*"}
            type={"text"}
            placeholder={"Enter MAWB"}
            name={"mawbNumber"}
            value={data.mawbNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"HAWB  Number"}
            type={"text"}
            placeholder={"Enter HAWB"}
            name={"hawbNumber"}
            value={data.hawbNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Cargo Type "}
            type={"select"}
            placeholder={"select cargo type"}
            name={"cargoType"}
            value={data.cargoType}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Carrier Name"}
            type={"text"}
            placeholder={"Enter Carrier Name"}
            name={"carrierName"}
            value={data.carrierName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Flight Type*"}
            type={"text"}
            placeholder={"Enter Vessel Name"}
            name={"flightType"}
            value={data.flightType}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Flight Number*"}
            type={"text"}
            placeholder={"Enter Flight Number"}
            name={"flightNumber"}
            value={data.flightNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
        </div>
        <div className="flex flex-col gap-8  basis-1/3">
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Booking Number"}
              type={"text"}
              placeholder={"Enter Booking Number"}
              name={"bookingNumber"}
              value={data.bookingNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"Flight Departure Date*"}
              type={"date"}
              placeholder={"Enter Departure Date"}
              name={"departureDate"}
              value={new Date(data.departureDate).toISOString().split("T")[0]}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"Flight Departure Time"}
              type={"time"}
              placeholder={"Enter Departure Time"}
              name={"departureTime"}
              value={data.departureTime}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Port of Loading"}
              type={"text"}
              placeholder={"Enter Port of Loading"}
              name={"portOfLoading"}
              value={data.portOfLoading}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            {data.transhipments && (
              <>
                {data.transhipments.map((item, index) => (
                  <div className="flex gap-4" key={index}>
                    <GroupField
                      label={"POD(Transshipment)"}
                      type={"text"}
                      placeholder={"Enter POD(Transshipment)"}
                      name={"countryLocation"}
                      value={item.countryLocation}
                      onChange={(e) => handleTranshipmentChange(e, index)}
                      error={false}
                      errorMessage={""}
                    />
                    <div className="flex gap-1 items-end">
                      {data.transhipments.length > 1 && (
                        <div
                          className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-error"
                          onClick={() => handleDelete(index)}
                        >
                          <DeleteIcon color="#FDFDFD" size={16} />
                        </div>
                      )}
                      {index === 0 && data.transhipments.length > 1 ? (
                        ""
                      ) : (
                        <div
                          className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-grey-ab"
                          onClick={handleAdd}
                        >
                          <AddIcon color="#FDFDFD" size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
            <GroupField
              label={"Final Port of Discharge"}
              type={"text"}
              placeholder={"Enter Final Port of Discharge"}
              name={"portOfDischarge"}
              value={data.portOfDischarge}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
          </div>
        </div>
      </div>
      <div className="custom-scrollbar-small overflow-auto">
        {Array.isArray(data.containerData) && data.containerData.length > 0 && (
          <>
            <table className=" w-full rounded ">
              <thead>
                <tr className="bg-grey-100 rounded">
                  <td>Sno.</td>
                  {Object.keys(data.containerData[0]).map((item, index) => (
                    <td key={index} className="min-w-[150px]  px-3 py-1 ">
                      {item.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.containerData.map((items: any, rowIndex) => (
                  <tr className=" rounded" key={rowIndex}>
                    <td>{rowIndex + 1}</td>
                    {Object.keys(data.containerData[0]).map((key, index) => (
                      <td key={index} className="min-w-[150px]  px-3 py-1 ">
                        {/* {items[key]} */}
                        <input
                          type="text"
                          value={items[key]}
                          onChange={(e) => handleChangeContainer(e, rowIndex)}
                          name={key}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Remarks</p>
        <p>
          onboard confirmation occurs when goods have been loaded onto the
          vessel and all customs and documentation requirements are met. The
          shipper receives confirmation from the shipping company, such as a
          Bill of Lading (BOL), stating that the cargo is onboard.
        </p>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
        </div>
        <div onClick={handleSave}>
          <PrimaryButton label={"Save"} size={"l"} variant={""} />
        </div>
      </div>
    </div>
  );
};

export default EditDepartureConfirmation;
