import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import Logo from "/images/logo.svg";
import { AddIcon, DeleteIcon } from "../../../../components/icons/Icons";
import ViewCard from "../../../customerService/sea-air-schedule/components/layouts/viewCard";
import GroupField from "../../../../components/groupField/GroupField";
import BlackButton from "../../../../components/buttons/BlackButton";

interface CargoDetailsProp {
  description: string;
  delivaryStatus: string;
  packagesCount: number;
  packageType: string;
  grossWeight: number;
  grossWeightUnit: string;
}

interface CargoManifestProp {
  companyName: string;
  address: string;
  email: string;
  phone: string;
  bookingNumber: string;
  carrierName: string;
  dateOfDeparture: string;
  aircraftType: string;
  hawbNumber: string;
  mawbNumber: string;
  portOfLoading: string;
  portOfDischarge: string;
  shipperName: string;
  shipperAddress: string;
  consigneeName: string;
  consigneeAddress: string;
  notifyPartyName: string;
  notifyPartyAddress: string;
  cargoDetails: CargoDetailsProp[];
  cargoType?: string;
}

const CargoManifestCreate: React.FC = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [data, setData] = useState<CargoManifestProp>({
    companyName: "",
    address: "",
    email: "",
    phone: "",
    bookingNumber: "",
    carrierName: "",
    dateOfDeparture: "",
    aircraftType: "",
    mawbNumber: "",
    hawbNumber: "",
    portOfLoading: "",
    portOfDischarge: "",
    shipperName: "",
    shipperAddress: "",
    consigneeName: "",
    consigneeAddress: "",
    notifyPartyName: "",
    notifyPartyAddress: "",
    cargoType: "",
    cargoDetails: [
      {
        description: "",
        delivaryStatus: "CFS/CFS",
        packagesCount: 0,
        packageType: "",
        grossWeight: 0,
        grossWeightUnit: "kgs",
      },
    ],
  });

  const [bookingDetail, setBookingDetail] = useState({
    bookingId: bookingId,
    bookingNumber: "",
    cargoType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCargoChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    cargoIndex: number
  ) => {
    const { name, value } = e.target;

    setData((prev) => {
      const updatedCargo = [...prev.cargoDetails];
      updatedCargo[cargoIndex] = { ...updatedCargo[cargoIndex], [name]: value };

      return { ...prev, cargoDetails: updatedCargo };
    });
  };
  // add container details function
  const handleAddCargoDetails = () => {
    setData((prev) => ({
      ...prev,
      cargoDetails: [
        ...prev.cargoDetails,
        {
          description: "",
          delivaryStatus: "CFS/CFS",
          packagesCount: 0,
          packageType: "",
          grossWeight: 0,
          grossWeightUnit: "kgs",
        },
      ],
    }));
  };
  const handleDeleteCargoDetails = (index: number) => {
    if (data.cargoDetails.length <= 1) {
      return;
    }
    setData((prev) => {
      const updatedCargoDetail = prev.cargoDetails.filter(
        (_, vindex) => index !== vindex
      );

      return {
        ...prev,
        cargoDetails: updatedCargoDetail,
      };
    });
  };

  //fetch booking details also cargotype for handling table
  useEffect(() => {
    console.log(bookingId, "bookingId");
    setBookingDetail((prev) => ({
      ...prev,
      bookingNumber: "123dd4545",
      cargoType: "",
    }));
    setData((prev) => ({
      ...prev,
      bookingNumber: "123dd4545",
      cargoType: "",
    }));
  }, []);

  // fetch the manifest details
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      companyName: "Maatson Maritime Intl Opc Pvt Ltd",
      address:
        "No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV oil Mill, Kodungaiyur, Chennai- 600 118.",
      email: "arunkumar12@gmail.com",
      phone: "+91 98454 56564",
    }));
  }, []);
  return (
    <div className="flex flex-col gap-6 px-8 py-6 rounded-xs bg-grey-aw-50">
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col gap-2 items-center">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-grey-ab text-lg font-bold">CARGO MANIFEST</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3 basis-2/5 ">
            <ViewCard
              label={"Company Name:"}
              value={data.companyName}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Address:"}
              value={data.address}
              labelStyle="font-semibold"
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <ViewCard
              label={"Email:"}
              value={data.email}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Phone Number:"}
              value={data.phone}
              labelStyle="font-semibold"
            />
          </div>
        </div>
        <div className="border border-grey-ab-50 "></div>
      </div>

      {/* bookingId */}
      <div className="py-1">
        <ViewCard
          label={"Booking Number:"}
          value={data.bookingNumber}
          labelStyle="font-semibold"
        />
      </div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4 basis-1/3">
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
            label={"Date of Departure"}
            type={"date"}
            placeholder={"Enter Date of Departure"}
            name={"dateOfDeparture"}
            value={data.dateOfDeparture}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />

          <GroupField
            label={"Aircraft Type"}
            type={"select"}
            placeholder={"Choose Aircraft Type"}
            name={"aircraftType"}
            value={data.aircraftType}
            onChange={handleChange}
            options={[
              { label: "COA", value: "COA" },
              { label: "PAX", value: "PAX" },
            ]}
            error={false}
            errorMessage={""}
          />
        </div>
        <div className="flex flex-col gap-4 basis-1/3">
          <GroupField
            label={"MAWB Number"}
            type={"text"}
            placeholder={"Enter MAWB Number"}
            name={"mawbNumber"}
            value={data.mawbNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"HAWB Number"}
            type={"text"}
            placeholder={"Enter HAWB Number"}
            name={"hawbNumber"}
            value={data.hawbNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Port of Loading"}
            type={"text"}
            placeholder={"Enter Port Of Loading"}
            name={"portOfLoading"}
            value={data.portOfLoading}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Port of Discharge"}
            type={"text"}
            placeholder={"Enter Port of Discharge"}
            name={"portOfDischarge"}
            value={data.portOfDischarge}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
        </div>
      </div>

      <div className="border border-grey-ab-50 "></div>
      {/* shipping */}
      <div className="flex gap-6 items-center flex-wrap justify-between">
        <GroupField
          label={"Shipper Name*"}
          type={"text"}
          placeholder={"Enter Shipper Name"}
          name={"shipperName"}
          value={data.shipperName}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="basis-[30%]"
        />
        <GroupField
          label={"Consignee Name*"}
          type={"text"}
          placeholder={"Enter Consignee Name"}
          name={"consigneeName"}
          value={data.consigneeName}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="basis-[30%]"
        />
        <GroupField
          label={"Notify Party Name*"}
          type={"text"}
          placeholder={"Enter Notify Party Name"}
          name={"notifyPartyName"}
          value={data.notifyPartyName}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="basis-[30%]"
        />
        <GroupField
          label={"Shipper Address*"}
          type={"textarea"}
          placeholder={"Enter Shipper Address"}
          name={"shipperAddress"}
          value={data.shipperAddress}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="basis-[30%]"
        />
        <GroupField
          label={"Consignee Address*"}
          type={"textarea"}
          placeholder={"Enter Consignee Address"}
          name={"consigneeAddress"}
          value={data.consigneeAddress}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="basis-[30%]"
        />
        <GroupField
          label={"Notify Party Address*"}
          type={"textarea"}
          placeholder={"Enter Notify Party Address"}
          name={"notifyPartyAddress"}
          value={data.notifyPartyAddress}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="basis-[30%]"
        />
      </div>
      <div className="overflow-auto custom-scrollbar">
        <table className="w-full">
          <thead className="bg-neutral-100 text-sm font-semibold">
            <tr>
              <th className="min-w-[220px] px-3 py-4 text-left">
                Description of Goods
              </th>
              <th className="min-w-[120px] px-3 py-4 text-left">
                Delivery Status
              </th>
              <th className="min-w-[220px] px-3 py-4 text-left">
                Number of Kind of Packages
              </th>
              <th className="min-w-[220px] px-3 py-4 text-left">
                Gross Weight & Measurement
              </th>
              <th className="min-w-[100px] px-3 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {" "}
            {data.cargoDetails.length > 0 &&
              data.cargoDetails.map((cargo, index) => (
                <tr key={index}>
                  <td className="px-3 py-1">
                    {
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={"description"}
                        value={cargo.description}
                        onChange={(e) => handleCargoChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    }
                  </td>
                  <td className="px-3 py-1">
                    {
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={""}
                        name={"delivaryStatus"}
                        value={cargo.delivaryStatus}
                        onChange={(e) => handleCargoChange(e, index)}
                        error={false}
                        options={[{ label: "CFS/CFS", value: "CFS/CFS" }]}
                        errorMessage={""}
                        parentStyle=" min-w-[150px] w-[200px]"
                      />
                    }
                  </td>
                  <td className="px-3 py-1 ">
                    <div className="items-center gap-1 flex">
                      {" "}
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={""}
                        name={"packagesCount"}
                        value={cargo.packagesCount}
                        onChange={(e) => handleCargoChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle=" min-w-[80px]"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"creatable"}
                        placeholder={""}
                        name={"packageType"}
                        value={cargo.packageType}
                        options={[
                          { label: "drums", value: "drums" },
                          { label: "bags", value: "bags" },
                        ]}
                        onChange={(e) => handleCargoChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle=" min-w-[150px] w-[200px]"
                      />
                    </div>
                  </td>
                  <td className="px-3 py-1 inline-flex items-center gap-1">
                    <div className="items-center gap-1 flex">
                      {" "}
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={""}
                        name={"grossWeight"}
                        value={cargo.grossWeight}
                        onChange={(e) => handleCargoChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle=" min-w-[80px]"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={""}
                        name={"grossWeightUnit"}
                        value={cargo.grossWeightUnit}
                        onChange={(e) => handleCargoChange(e, index)}
                        options={[{ label: "kgs", value: "kgs" }]}
                        error={false}
                        errorMessage={""}
                        parentStyle=" min-w-[150px] w-[200px]"
                      />
                    </div>
                  </td>
                  <td className="px-3 py-1 text-center">
                    <div
                      className={`p-2 bg-red-50 rounded  inline-block ${
                        data.cargoDetails.length <= 1
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() => handleDeleteCargoDetails(index)}
                    >
                      <DeleteIcon size={20} color="#d8001a" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="border border-grey-ab-50 "></div>
      {/* add */}
      <div className="w-fit" onClick={handleAddCargoDetails}>
        <BlackButton
          label={"Add More"}
          size={"s"}
          variant={""}
          leftIcon={<AddIcon color="#ffffff" />}
        />
      </div>

      <div className="flex gap-6 justify-end">
        <div onClick={() => navigate(-1)}>
          <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
        </div>
        <div>
          <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default CargoManifestCreate;
