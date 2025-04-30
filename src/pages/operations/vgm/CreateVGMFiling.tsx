import React, { useState } from "react";
import Logo from "/images/logo.svg";
import HeadersLayout from "../containerReleaseOrder/layouts/HeadersLayouts";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import BlackButton from "../../../components/buttons/BlackButton";
import { AddIcon, DeleteIcon } from "../../../components/icons/Icons";

const CreateVGMFiling: React.FC = () => {
  const [isMandatory, setIsMandatory] = useState<boolean>(true);
  const [isOptional, setIsOptional] = useState<boolean>(false);
  const [data, setData] = useState({
    shipperName: "",
    shipperAddress: "",
    shipperLicenseNumber: "",
    customerContact: "",
    customerContactNumber: "",
    vesselName: "",
    voyageNumber: "",
    vgmCutOffDate: "",
    mandatoryDetails: [
      {
        containerNumber: "",
        containerType: "",
        cargoType: "",
        tare: "",
        maxGross: "",
        verifiedWeight: "",
        verifiedWeightUnit: "KG",
        verificationSignature: "",
        shipperCompany: "",
        status: "",
      },
    ],
    optionalDetails: [
      {
        // containerNumber: "",
        determinationDate: "",
        solasMethod: "Weighing",
        solarCertification: "",
        country: "",
        providerSignature: "",
      },
    ],
  });

  const handleAddMore = () => {
    const addMandatoryData = {
      containerNumber: "",
      containerType: "",
      cargoType: "",
      tare: "",
      maxGross: "",
      verifiedWeight: "",
      verifiedWeightUnit: "KG",
      verificationSignature: "",
      shipperCompany: "",
      status: "",
    };
    const addOptionalData = {
      // containerNumber: "",
      determinationDate: "",
      solasMethod: "Weighing",
      solarCertification: "",
      country: "",
      providerSignature: "",
    };
    setData((prev) => ({
      ...prev,
      mandatoryDetails: [...prev.mandatoryDetails, addMandatoryData],
      optionalDetails: [...prev.optionalDetails, addOptionalData],
    }));
  };

  const handleDelete = (index: number) => {
    if (data.mandatoryDetails.length > 1) {
      setData((prev) => ({
        ...prev,
        mandatoryDetails: prev.mandatoryDetails.filter((_, i) => i !== index),
        optionalDetails: prev.optionalDetails.filter((_, i) => i !== index),
      }));
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMandatoryDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newcargo = [...prev.mandatoryDetails];
      newcargo[index] = { ...newcargo[index], [name]: value };
      return { ...prev, mandatoryDetails: newcargo };
    });
  };

  const handleOptionalDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newcargo = [...prev.optionalDetails];
      newcargo[index] = { ...newcargo[index], [name]: value };
      return { ...prev, optionalDetails: newcargo };
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mx-auto items-center">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <p className="font-semibold text-lg text-grey-ab">VGM FILING</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 max-w-[38%]">
              <HeadersLayout
                label={"Branch Name:"}
                value={"Maatson Maritime Intl Opc Pvt Ltd"}
              />
              <HeadersLayout
                label={"Address:"}
                value={
                  "No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV oil Mill, Kodungaiyur, Chennai- 600 118."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <HeadersLayout label={"Email:"} value={"arunkumar12@gmail.com"} />
              <HeadersLayout
                label={"Phone Number:"}
                value={"+91 98454 56564"}
              />
            </div>
          </div>
          <div className="border border-grey-ab-50 "></div>
        </div>

        <HeadersLayout label={"Booking Number:"} value={"123dd4545"} />

        <div className="px-4 py-2 flex justify-between border border-grey-ab-100 rounded-sm">
          <HeadersLayout
            label={"Port of Loading"}
            value={"Los Angeles, USA"}
            parentStyle="flex-col"
            labelStyle="text-xs"
          />
          <HeadersLayout
            label={"Port of Discharge "}
            value={"Rotterdam, Netherlands"}
            parentStyle="flex-col"
            labelStyle="text-xs"
          />
          <HeadersLayout
            label={"Expected Vessel Departure"}
            value={"4/21/12"}
            parentStyle="flex-col"
            labelStyle="text-xs"
          />
          <div className="py-1 flex flex-col gap-2">
            <p className="font-bold text-xs text-grey-ab-800">VGM Status</p>
            <SecondaryChip label={"Pending"} size={"m"} variant={"fill"} />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-[40%]">
            <p className="text-grey-ab font-semibold">Shipper</p>
            <GroupField
              label={"Shipper Name*"}
              type={""}
              placeholder={"Enter Sipper Name"}
              name={"shipperName"}
              value={data.shipperName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Shipper Address*"}
              type={"textarea"}
              placeholder={"Enter Sipper Address"}
              name={"shipperAddress"}
              value={data.shipperAddress}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Shipper Registration/License No*"}
              type={""}
              placeholder={"Enter Registration/License No."}
              name={"shipperLicenseNumber"}
              value={data.shipperLicenseNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Customer Contact*"}
              type={""}
              placeholder={"Enter Contact Name"}
              name={"customerContact"}
              value={data.customerContact}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Contact Number*"}
              type={""}
              placeholder={"Enter Contact Number"}
              name={"customerContactNumber"}
              value={data.customerContactNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-4 w-[40%]">
            <GroupField
              label={"Vessel Name*"}
              type={""}
              placeholder={"Enter Vessel Name"}
              name={"vesselName"}
              value={data.vesselName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Voyage Number*"}
              type={""}
              placeholder={"Enter Voyage Number"}
              name={"voyageNumber"}
              value={data.voyageNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"VGM Cut-off Date*"}
              type={"date"}
              placeholder={"Enter VGM Cut-off Date"}
              name={"vgmCutOffDate"}
              value={data.vgmCutOffDate}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 p-2 ">
            <div
              className={`px-4 py-1 rounded-xs cursor-pointer ${
                isMandatory ? "bg-primary-900 shadow-sm" : ""
              } transition-all duration-700`}
              onClick={() => {
                setIsMandatory(true);
                setIsOptional(false);
              }}
            >
              <p
                className={`text-sm font-bold ${
                  isMandatory ? "text-grey-aw-50" : "text-primary-900"
                } transition-all duration-700`}
              >
                Mandatory Details
              </p>
            </div>
            <div
              className={`px-4 py-1 rounded-xs cursor-pointer ${
                isOptional ? "bg-primary-900 shadow-sm" : ""
              } transition-all duration-700`}
              onClick={() => {
                setIsMandatory(false);
                setIsOptional(true);
              }}
            >
              <p
                className={`text-sm font-bold ${
                  isOptional ? "text-grey-aw-50" : "text-primary-900"
                } transition-all duration-700 `}
              >
                Optional Details
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 shadow-lg rounded-xs overflow-auto custom-scrollbar">
            {isMandatory && (
              <table cellPadding={10} className="">
                <thead className="bg-grey-100 rounded-t-xs border-b border-b-grey-ab-50 font-semibold text-grey-ab-600">
                  <tr>
                    <td className="py-2 min-w-[100px]" align="center">
                      SLNO
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Container Number
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Container Type
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Cargo Type
                    </td>
                    <td align="center" className="min-w-[140px]">
                      Tare
                    </td>
                    <td align="center" className="min-w-[140px]">
                      Max Gross
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Verified Weight (Including Tare)
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Verification Signature (Responsible Person)
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Shipper Company (Responsible Company)
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Status
                    </td>
                    <td align="center" className="min-w-[100px]">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {data.mandatoryDetails.map((item, index) => (
                    <tr key={index} className="border-b border-b-grey-ab-50">
                      <td align="center">
                        {(index + 1).toString().padStart(2, "0")}
                      </td>
                      <td className="py-3">
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`containerNumber`}
                          value={item.containerNumber}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`containerType`}
                          value={item.containerType}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`cargoType`}
                          value={item.cargoType}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`tare`}
                          value={item.tare}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`maxGross`}
                          value={item.maxGross}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <div className="flex">
                          <GroupField
                            label={""}
                            type={""}
                            placeholder={""}
                            name={`verifiedWeight`}
                            value={item.verifiedWeight}
                            onChange={(e) =>
                              handleMandatoryDetailsChange(e, index)
                            }
                            error={false}
                            errorMessage={""}
                          />
                          <GroupField
                            label={""}
                            type={"select"}
                            placeholder={""}
                            name={`verifiedWeightUnit`}
                            value={item.verifiedWeightUnit}
                            onChange={(e) =>
                              handleMandatoryDetailsChange(e, index)
                            }
                            options={[
                              { value: "KG", label: "KG" },
                              { value: "LB", label: "LB" },
                            ]}
                            error={false}
                            errorMessage={""}
                            parentStyle="w-[160px]"
                          />
                        </div>
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`verificationSignature`}
                          value={item.verificationSignature}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`shipperCompany`}
                          value={item.shipperCompany}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={"select"}
                          placeholder={"Choose Status"}
                          name={`status`}
                          value={item.status}
                          options={[
                            { value: "Completed", label: "Completed" },
                            { value: "Pending", label: "Pending" },
                          ]}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <button
                            className="p-1 rounded-xs bg-error-50 cursor-pointer  disabled:cursor-not-allowed"
                            disabled={data.mandatoryDetails.length === 1}
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteIcon size={16} color="#810001" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isOptional && (
              <table cellPadding={10} className="">
                <thead className="bg-grey-100 rounded-t-xs border-b border-b-grey-ab-50 font-semibold text-grey-ab-600">
                  <tr>
                    <td className="py-2 min-w-[100px]" align="center">
                      SLNO
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Container Number
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Determ. Date
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Solas Method
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Solas Cert.
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Country
                    </td>
                    <td align="center" className="min-w-[200px]">
                      Provider Signature
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {data.optionalDetails.map((item, index) => (
                    <tr key={index} className="border-b border-b-grey-ab-50">
                      <td align="center">
                        {(index + 1).toString().padStart(2, "0")}
                      </td>
                      <td className="py-3">
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`containerNumber`}
                          value={data.mandatoryDetails[index].containerNumber}
                          onChange={(e) =>
                            handleMandatoryDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={"date"}
                          placeholder={""}
                          name={`determinationDate`}
                          value={item.determinationDate}
                          onChange={(e) =>
                            handleOptionalDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={"select"}
                          placeholder={""}
                          name={`solasMethod`}
                          value={item.solasMethod}
                          options={[
                            { value: "Weighing", label: "Weighing" },
                            { value: "Calculation", label: "Calculation" },
                          ]}
                          onChange={(e) =>
                            handleOptionalDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`solarCertification`}
                          value={item.solarCertification}
                          onChange={(e) =>
                            handleOptionalDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`country`}
                          value={item.country}
                          onChange={(e) =>
                            handleOptionalDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td>
                        <GroupField
                          label={""}
                          type={""}
                          placeholder={""}
                          name={`providerSignature`}
                          value={item.providerSignature}
                          onChange={(e) =>
                            handleOptionalDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isMandatory && (
              <div className="px-4 pb-3" onClick={handleAddMore}>
                <BlackButton
                  label={"Add More"}
                  size={"s"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} color="#ffffff" />}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-6 justify-end">
          <Link to={"/vgm-filing"}>
            <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
          </Link>
          <div>
            <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
          </div>
        </div>
        {/* end div */}
      </div>
    </>
  );
};

export default CreateVGMFiling;
