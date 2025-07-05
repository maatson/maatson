import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AddIcon,
  BusinessIcon,
  CategoryIcon,
  CompanyIcon,
  DeleteIcon,
  DepartmentIcon,
  DocumentIcon,
  EmailIcon,
  FreightIcon,
  LocationIcon,
  PhoneIcon,
  PriceTagIcon,
  UrlIcon,
  UserIcon,
  WarehouseIcon,
} from "../../../components/icons/Icons";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import GroupField from "../../../components/groupField/GroupField";
import FileUpload from "../../../components/fileUpload/FileUpload";
import BlackButton from "../../../components/buttons/BlackButton";

interface DepotStorageDetailsProps {
  containerType: string;
  storageCharges: string | number;
  storageChargesCurrency: string | number;
  liftOnCharges: string | number;
  liftOnChargesCurrency: string | number;
}

const EditEmptyDepot: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    depotCompanyLogo: null as File | null,
    emptyDepotName: "Global Freight Solutions Ltd",
    doorNumber: "123",
    street: "Logistics Avenue,",
    city: "Chennai",
    postalCode: "600032",
    country: "India",
    companyEmail: "info@msc.com",
    companyMobileNumber: "+91 9876543210",
    companyWebsite: "www.globalfreight.com",
    emptyDepotProductOrServices: [
      "Stacking & Lifting",
      "Cleaning & Washing (Interior/Exterior)",
      "Container Repair",
      "Temperature Monitoring",
    ] as string[], //array
    primaryContactName: "Barmaleeva N",
    contactPersonDepartment: "Sales",
    contactPersonEmail: "tranthuy.nute@gmail.com",
    contactPersonMobileNumber: "+447700960035	",
    contactPersonAlternateMobileNumber: "+447700960035	",
    operationalSince: "112839",

    depotStorageDetails: [
      {
        containerType: "20’ft Open Top	",
        storageCharges: "2000",
        storageChargesCurrency: "USD",
        liftOnCharges: "1000",
        liftOnChargesCurrency: "USD",
      },
    ] as DepotStorageDetailsProps[],

    depotCapacity: "100",
    depotWorkingHours: "9:00 pm to 10:00 am",
    freeStorageDays: "10",
    businessRegistrationCertificate: null as File | null,
    depotTrafficCertificate: null as File | null,
  });

  const [isProductActive, setIsProductActive] = useState<boolean>(true);
  const [isServiceActive, setIsServiceActive] = useState<boolean>(false);
  const handleProduct = () => {
    setIsProductActive(true);
    setIsServiceActive(false);
  };
  const handleService = () => {
    setIsProductActive(false);
    setIsServiceActive(true);
  };

  const handleAddMore = () => {
    const addData = {
      containerType: "",
      storageCharges: "",
      storageChargesCurrency: "USD",
      liftOnCharges: "",
      liftOnChargesCurrency: "USD",
    };
    setData((prev) => ({
      ...prev,
      depotStorageDetails: [...prev.depotStorageDetails, addData],
    }));
  };

  const handleDelete = (index: number) => {
    if (data.depotStorageDetails.length > 1) {
      setData((prev) => ({
        ...prev,
        depotStorageDetails: prev.depotStorageDetails.filter(
          (_, i) => i !== index
        ),
      }));
    }
  };

  const handledepotStorageDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newcargo = [...prev.depotStorageDetails];
      newcargo[index] = { ...newcargo[index], [name]: value };
      return { ...prev, depotStorageDetails: newcargo };
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (
    name: "businessRegistrationCertificate" | "depotTrafficCertificate",
    file: File | null
  ) => {
    setData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      depotCompanyLogo: file,
      // image: file,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data :", data);
  };

  return (
    <>
      <div className="rounded-xs  bg-grey-aw-50 py-4 px-3 flex flex-col gap-6 shadow-lg">
        <div className="py-2 px-3 h5 text-grey-ab-900 font-semibold">
          Registration
        </div>

        {/* form */}
        <div className="px-5 flex flex-col gap-8">
          {/* company details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <CompanyIcon />
                <p className="font-semibold text-grey-ab-800">
                  Empty Depot Details
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-grey-ab">Depot Company Logo*</p>
              <ImageUpload
                label={"Upload Your Depot Company Logo*"}
                onImageChange={handleImageChange}
              />
            </div>

            <div className="flex flex-col gap-5">
              <GroupField
                label={"Empty Depot Name*"}
                type={""}
                placeholder={"Enter Empty Depot Name"}
                name={"emptyDepotName"}
                value={data.emptyDepotName}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<FreightIcon color="#2C398F" />}
                parentStyle="max-w-[80%] w-full"
              />
              <div className="flex flex-col gap-4">
                <p className="text-grey-ab">Empty Depot Address</p>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-4 w-[80%]">
                    <GroupField
                      label={"Building/Door Number"}
                      type={"text"}
                      placeholder={"Enter Building/Door Number"}
                      name={"doorNumber"}
                      value={data.doorNumber}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                    <GroupField
                      label={"Street*"}
                      type={"text"}
                      placeholder={"Enter Street"}
                      name={"street"}
                      value={data.street}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                  </div>
                  <div className="flex gap-4 w-[80%]">
                    <GroupField
                      label={"City*"}
                      type={"text"}
                      placeholder={"Enter City"}
                      name={"city"}
                      value={data.city}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                    <GroupField
                      label={"Postal Code*"}
                      type={"text"}
                      placeholder={"Enter Postal Code"}
                      name={"postalCode"}
                      value={data.postalCode}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                    <GroupField
                      label={"Country "}
                      type={"text"}
                      placeholder={"Enter Country"}
                      name={"country"}
                      value={data.country}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                  </div>

                  <div className="flex gap-4 w-[80%]">
                    <GroupField
                      label={"Email*"}
                      type={"text"}
                      placeholder={"Enter Email"}
                      name={"companyEmail"}
                      value={data.companyEmail}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<EmailIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                    <GroupField
                      label={"Mobile Number*"}
                      type={"text"}
                      placeholder={"Enter Mobile Number"}
                      name={"companyMobileNumber"}
                      value={data.companyMobileNumber}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<PhoneIcon color="#2C398F" />}
                      parentStyle="w-full"
                    />
                  </div>
                  <GroupField
                    label={"Company Website"}
                    type={"text"}
                    placeholder={"Enter Website"}
                    name={"companyWebsite"}
                    value={data.companyWebsite}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<UrlIcon color="#2C398F" />}
                    parentStyle="w-[39%]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg text-grey-ab-400">Empty Depot Services</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm">
                    <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
                      <button
                        className={`${
                          isProductActive
                            ? "bg-primary-900 text-grey-aw-50"
                            : ""
                        } px-4 py-2 rounded transition-all duration-500`}
                        onClick={handleProduct}
                      >
                        Product
                      </button>
                      <button
                        className={`${
                          isServiceActive
                            ? "bg-primary-900 text-grey-aw-50"
                            : ""
                        } px-4 py-2 rounded transition-all duration-500`}
                        onClick={handleService}
                      >
                        Service
                      </button>
                    </div>
                  </div>
                  <GroupField
                    label={""}
                    type={"creatable"}
                    placeholder={""}
                    name={"emptyDepotProductOrServices"}
                    value={data.emptyDepotProductOrServices}
                    onChange={handleChange}
                    error={false}
                    isMulti
                    errorMessage={""}
                    leftIcon={<CategoryIcon color="#2C398F" />}
                    options={[
                      { label: "hello", value: "hello" },
                      { label: "bye", value: "bye" },
                    ]}
                    parentStyle="w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* contact information */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <DepartmentIcon />
                <p className="font-semibold text-grey-ab-800">
                  Contact Information
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4 w-[80%]">
                <GroupField
                  label={"Primary Contact Name*"}
                  type={"text"}
                  placeholder={"Enter Name"}
                  name={"primaryContactName"}
                  value={data.primaryContactName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="w-full"
                />
                <GroupField
                  label={"Department*"}
                  type={"select"}
                  placeholder={"Enter Department"}
                  name={"contactPersonDepartment"}
                  value={data.contactPersonDepartment}
                  onChange={handleChange}
                  options={[{ value: "manager", label: "Manager" }]}
                  error={false}
                  errorMessage={""}
                  leftIcon={<DepartmentIcon color="#2C398F" />}
                  parentStyle="w-full"
                />
              </div>
              <div className="flex gap-4 w-[80%]">
                <GroupField
                  label={"Email*"}
                  type={"text"}
                  placeholder={"Enter Email"}
                  name={"contactPersonEmail"}
                  value={data.contactPersonEmail}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<EmailIcon color="#2C398F" />}
                  parentStyle="w-full"
                />
                <GroupField
                  label={"Mobile Number*"}
                  type={"text"}
                  placeholder={"Enter Mobile Number"}
                  name={"contactPersonMobileNumber"}
                  value={data.contactPersonMobileNumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<PhoneIcon color="#2C398F" />}
                  parentStyle="w-full"
                />
              </div>{" "}
              <GroupField
                label={"Alternate Mobile Number*"}
                type={"text"}
                placeholder={"Enter Alternate Mobile Number"}
                name={"contactPersonAlternateMobileNumber"}
                value={data.contactPersonAlternateMobileNumber}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="w-[39%]"
              />
            </div>
          </div>

          {/* busiess operation */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <BusinessIcon />
                <p className="font-semibold text-grey-ab-800">
                  Bussiness Operations
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <GroupField
              label={"Operational Since*"}
              type={"date"}
              placeholder={"Enter Year"}
              name={"operationalSince"}
              value={data.operationalSince}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[39%]"
            />
          </div>

          {/* depot storage charges */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <PriceTagIcon />
                <p className="font-semibold text-grey-ab-800">
                  Depot Storage Charges
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-4 shadow-lg rounded-xs">
              <table cellPadding={12} className="">
                <thead className="bg-grey-100 rounded-t-xs border-b border-b-grey-ab-50 font-semibold text-grey-ab-600">
                  <tr>
                    <td className="py-2" align="center">
                      Container Type
                    </td>
                    <td align="center">Storage Charges</td>
                    <td align="center">Lift On Charges</td>
                    <td align="center">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {data.depotStorageDetails.map((item, index) => (
                    <tr key={index} className="border-b border-b-grey-ab-50">
                      <td className="py-3 w-[28%]">
                        <GroupField
                          label={""}
                          type={"select"}
                          placeholder={"Choose Container Type"}
                          name={`containerType`}
                          value={item.containerType}
                          options={[
                            {
                              value: "20ft Dry Container",
                              label: "20ft Dry Container",
                            },
                            {
                              value: "40ft Dry Container",
                              label: "40ft Dry Container",
                            },
                          ]}
                          onChange={(e) =>
                            handledepotStorageDetailsChange(e, index)
                          }
                          error={false}
                          errorMessage={""}
                        />
                      </td>
                      <td className="w-[28%]">
                        <div className="flex">
                          <GroupField
                            label={""}
                            type={""}
                            placeholder={""}
                            name={`storageCharges`}
                            value={item.storageCharges}
                            onChange={(e) =>
                              handledepotStorageDetailsChange(e, index)
                            }
                            error={false}
                            errorMessage={""}
                          />
                          <GroupField
                            label={""}
                            type={"select"}
                            placeholder={""}
                            name={`storageChargesCurrency`}
                            value={item.storageChargesCurrency}
                            onChange={(e) =>
                              handledepotStorageDetailsChange(e, index)
                            }
                            options={[
                              { value: "USD", label: "USD" },
                              { value: "IN", label: "IN" },
                            ]}
                            parentStyle="w-[140px]"
                            error={false}
                            errorMessage={""}
                          />
                        </div>
                      </td>
                      <td className="w-[28%]">
                        <div className="flex">
                          <GroupField
                            label={""}
                            type={""}
                            placeholder={""}
                            name={`liftOnCharges`}
                            value={item.liftOnCharges}
                            onChange={(e) =>
                              handledepotStorageDetailsChange(e, index)
                            }
                            error={false}
                            errorMessage={""}
                          />
                          <GroupField
                            label={""}
                            type={"select"}
                            placeholder={""}
                            name={`liftOnChargesCurrency`}
                            value={item.liftOnChargesCurrency}
                            onChange={(e) =>
                              handledepotStorageDetailsChange(e, index)
                            }
                            options={[
                              { value: "USD", label: "USD" },
                              { value: "IN", label: "IN" },
                            ]}
                            parentStyle="w-[140px]"
                            error={false}
                            errorMessage={""}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <button
                            className="p-1 rounded-xs bg-error-50 cursor-pointer  disabled:cursor-not-allowed"
                            disabled={data.depotStorageDetails.length === 1}
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
              <div className="px-4 pb-4" onClick={handleAddMore}>
                <BlackButton
                  label={"Add More"}
                  size={"s"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} color="#ffffff" />}
                />
              </div>
            </div>
          </div>

          {/* additional details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <DocumentIcon />
                <p className="font-semibold text-grey-ab-800">
                  Additional Details
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 w-[80%]">
                <GroupField
                  label={"Depot Capacity (TEU)"}
                  type={""}
                  placeholder={"Enter Depot Capacity (TEU)"}
                  name={"depotCapacity"}
                  value={data.depotCapacity}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<WarehouseIcon color="#2C398F" />}
                  parentStyle="w-full"
                />
                <GroupField
                  label={"Depot Working Hours"}
                  type={"text"}
                  placeholder={"Enter Depot Working Hours"}
                  name={"depotWorkingHours"}
                  value={data.depotWorkingHours}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<WarehouseIcon color="#2C398F" />}
                  parentStyle="w-full"
                />
              </div>
              <GroupField
                label={"Free Storage Days"}
                type={"text"}
                placeholder={"Enter Free Storage Days"}
                name={"freeStorageDays"}
                value={data.freeStorageDays}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<WarehouseIcon color="#2C398F" />}
                parentStyle="w-[39%]"
              />

              <div className="flex gap-4">
                <FileUpload
                  label={"Business Registration Certificate"}
                  parentStyle="w-full"
                  onFileChange={(file) =>
                    handleFileChange("businessRegistrationCertificate", file)
                  }
                  fileName={data.businessRegistrationCertificate?.name}
                />
                <FileUpload
                  label={"Depot Tariff"}
                  parentStyle="w-full"
                  onFileChange={(file) =>
                    handleFileChange("depotTrafficCertificate", file)
                  }
                  fileName={data.depotTrafficCertificate?.name}
                />
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-8 px-5">
          <div onClick={() => navigate(-1)}>
            <PrimaryButton label={"Cancel"} size={"xl"} variant={"link"} />
          </div>
          <div onClick={handleRegister}>
            <PrimaryButton label={"Register"} size={"xl"} variant={"primary"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmptyDepot;
