import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import {
  AddIcon,
  CategoryIcon,
  ContainerIcon,
  ContainerSettingsIcon,
  DepartmentIcon,
  EmailIcon,
  EmployeeGroupIcon,
  FreightIcon,
  LocationIcon,
  MenuIcon,
  PhoneIcon,
  ProductIcon,
  RangeCalenderIcon,
  RoutingIcon,
  ScalePencilIcon,
  ShipIcon,
  UserIcon,
  WeightIcon,
} from "../../../components/icons/Icons";
import BlackButton from "../../../components/buttons/BlackButton";

const AddEnquiry: React.FC = () => {
  return (
    <>
      <div className="bg-grey-aw-50 px-8 py-4 rounded flex flex-col gap-8">
        <p className="text-lg font-semibold"> Add Enquiry</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Sales Person"}
              type={"select"}
              placeholder={"Enter Sales Person"}
              name={"assignedPerson"}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<EmployeeGroupIcon color="#2c398f" />}
              parentStyle="w-2/5"
            />
          </div>
          <div className="flex flex-col gap-6">
            <HeadTitle label={"User Information"} icon={<UserIcon />} />
            <div className="flex gap-6 items-center">
              <GroupField
                label={"Company Name*"}
                type={"text"}
                placeholder={"Enter Company Name"}
                name={"companyName"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<EmployeeGroupIcon color="#2c398f" />}
                parentStyle="w-2/5"
              />
              <GroupField
                label={"Lead Source*"}
                type={"creatable"}
                placeholder={"Choose Lead Source"}
                name={"leadSource"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="w-2/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle
              label={"Person In-charge User Information (PIC)"}
              icon={<UserIcon />}
            />
            <div className="flex gap-6 items-center flex-wrap">
              <GroupField
                label={"PIC Name*"}
                type={"text"}
                placeholder={"Enter PIC Name"}
                name={"picName"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<UserIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />
              <GroupField
                label={"PIC Department *"}
                type={"text"}
                placeholder={"Enter PIC Department"}
                name={"picDepartment"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-2/5"
                leftIcon={<DepartmentIcon color="#2c398f" />}
              />
              <GroupField
                label={"PIC Email*"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"picEmail"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<EmailIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />

              <GroupField
                label={"PIC Mobile Number*"}
                type={"tel"}
                placeholder={"Enter Mobile Number"}
                name={"picMobileNumber"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle label={"Routing"} icon={<RoutingIcon />} />
            <div className="flex gap-6 items-center flex-wrap">
              <GroupField
                label={"Shipment Mode	*"}
                type={"select"}
                placeholder={"Choose Shipment Type"}
                name={"modeOfShipment"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<FreightIcon color="#2c398f" />}
                options={[
                  { label: "Import", value: "import" },
                  { label: "Export", value: "export" },
                  { label: "Cross Trade", value: "cross trade" },
                ]}
                parentStyle="basis-2/5 max-w-[80%]"
              />
              <GroupField
                label={"Transportation Mode*"}
                type={"select"}
                placeholder={""}
                name={"modeOfTransportation"}
                value={"sea freight"}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-2/5 max-w-[80%]"
                leftIcon={<ShipIcon color="#2c398f" />}
                options={[
                  { label: "Sea Freight", value: "sea freight" },
                  { label: "Air Freight", value: "air freight" },
                  { label: "Land Freight", value: "land freight" },
                ]}
              />
              <GroupField
                label={"Port Of Loading(Port, Country)*"}
                type={"email"}
                placeholder={"Enter port of Loading"}
                name={"portOfLoading"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<LocationIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />

              <GroupField
                label={"Port Of Discharge(Port, Country)*"}
                type={"tel"}
                placeholder={"Enter port of discharge"}
                name={"portOfDischarge"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<LocationIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle label={"Product Details"} icon={<ProductIcon />} />
            <GroupField
              label={"Product Offered*"}
              type={"select"}
              placeholder={"Enter Your Product"}
              name={"offeredProducts"}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<MenuIcon color="#2c398f" />}
            />
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle
              label={"Container Details"}
              icon={<ContainerSettingsIcon />}
            />
            <GroupField
              label={"Cargo Type*"}
              type={"select"}
              placeholder={"Select Cargo Type"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              options={[
                { label: "Bulk", value: "bulk" },
                { label: "Hazardous", value: "hazardous " },
                { label: "LCL", value: "lcl" },
                { label: "FCL", value: "fcl" },
                { label: "Over dimentional", value: "over dimentional" },
              ]}
              leftIcon={<FreightIcon color="#2c398f" />}
              parentStyle="w-1/3"
            />
            {/* bulk */}
            <div className="flex items-end flex-wrap gap-6">
              <GroupField
                label={"Ship Type*"}
                type={"select"}
                placeholder={"select type"}
                name={"shipType"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ShipIcon color="#2c398f" />}
                parentStyle="basis-1/3 max-w-[80%]"
              />

              <div className="basis-2/5 max-w-[40%] flex flex-col gap-2">
                <p>Gross Weight *</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"number"}
                    placeholder={"Enter Volume"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/2"
                    leftIcon={<WeightIcon color="#2c398f" />}
                    inputStyle="placeholder:text-xs"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"select"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "kgs", label: "Kgs" },
                      { value: "lbs", label: "Lbs" },
                      { value: "mt", label: "Mt" },
                      { value: "grams", label: "Grams" },
                    ]}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex flex-col gap-2">
                <p>Loading Rate</p>
                <div className="flex ">
                  <GroupField
                    label={""}
                    type={"number"}
                    placeholder={"Enter Rate"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-2/3"
                    inputStyle="placeholder:text-xs"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={""}
                    name={""}
                    isDisabled
                    value={"mt/day"}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex flex-col gap-2">
                <p>Discharging Rate</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"number"}
                    placeholder={"Enter Rate"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-2/3"
                    // leftIcon={<WeightIcon color="#2c398f" />}
                  />{" "}
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={""}
                    name={""}
                    isDisabled
                    value={"mt/day"}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <BlackButton
                label={"Add More"}
                size={"m"}
                variant={""}
                leftIcon={<AddIcon color="#fdfdfd" />}
              />
            </div>
            {/* Hazardous */}
            {/* <div className="flex items-end flex-wrap gap-6">
              <GroupField
                label={"Container Size*"}
                type={"select"}
                placeholder={"Choose Container Size"}
                name={"date"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ContainerIcon color="#2c398f" />}
                parentStyle="basis-1/3 max-w-[80%]"
              />
              <GroupField
                label={"UN Number*"}
                type={"text"}
                placeholder={"Enter UN Number"}
                name={"unNumber"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ContainerIcon color="#2c398f" />}
                parentStyle="basis-1/3"
              />
              <GroupField
                label={"IMCO Class*"}
                type={"text"}
                placeholder={"Enter IMCO CLASS"}
                name={"imcoClass"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ContainerIcon color="#2c398f" />}
                parentStyle="basis-1/3"
              />

              <div className="basis-2/5 max-w-[40%] flex flex-col gap-2">
                <p>Gross Weight *</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={"Enter Volume"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/2"
                    leftIcon={<WeightIcon color="#2c398f" />}
                    inputStyle="placeholder:text-xs"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"select"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "kgs", label: "Kgs" },
                      { value: "lbs", label: "Lbs" },
                      { value: "mt", label: "Mt" },
                      { value: "grams", label: "Grams" },
                    ]}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <GroupField
                label={"Container Count*"}
                type={"number"}
                placeholder={"eg:1"}
                name={""}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/3"
              />
              <BlackButton
                label={"Add More"}
                size={"m"}
                variant={""}
                leftIcon={<AddIcon color="#fdfdfd" />}
              />
            </div> */}
            {/* Lcl */}
            {/* <div className="flex items-end flex-wrap gap-6">
              <GroupField
                label={"Quantity*"}
                type={"number"}
                placeholder={"Enter No of Packages"}
                name={"quantity"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ProductIcon color="#2c398f" />}
                parentStyle="basis-1/3"
              />
              <GroupField
                label={"Package Type*"}
                type={"select"}
                placeholder={"Choose Package Type"}
                name={"imcoClass"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<FreightIcon color="#2c398f" />}
                parentStyle="basis-1/3 max-w-[80%]"
              />

              <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                <p>Gross Weight *</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={"Enter Volume"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-2/3"
                    leftIcon={<WeightIcon color="#2c398f" />}
                    inputStyle="placeholder:text-xs"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"select"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "kgs", label: "Kgs" },
                      { value: "lbs", label: "Lbs" },
                      { value: "mt", label: "Mt" },
                      { value: "grams", label: "Grams" },
                    ]}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex flex-col gap-2">
                <p>Volume*</p>
                <div className="flex ">
                  <GroupField
                    label={""}
                    type={"number"}
                    placeholder={"Enter Volume"}
                    name={"volume"}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    leftIcon={<WeightIcon color="#2c398f" />}
                    parentStyle="w-2/3"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={""}
                    name={""}
                    isDisabled
                    value={"m3"}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <BlackButton
                label={"Add More"}
                size={"m"}
                variant={""}
                leftIcon={<AddIcon color="#fdfdfd" />}
              />
            </div> */}
            {/* Fcl */}
            {/* <div className="flex items-end flex-wrap gap-6">
              <GroupField
                label={"Container Size*"}
                type={"select"}
                placeholder={"Choose Container Size"}
                name={"containerSize"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ContainerIcon color="#2c398f" />}
                parentStyle="basis-1/3 max-w-[80%]"
              />

              <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                <p>Gross Weight *</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={"Enter Volume"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-2/3"
                    leftIcon={<WeightIcon color="#2c398f" />}
                    inputStyle="placeholder:text-xs"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"select"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "kgs", label: "Kgs" },
                      { value: "lbs", label: "Lbs" },
                      { value: "mt", label: "Mt" },
                      { value: "grams", label: "Grams" },
                    ]}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <GroupField
                label={"Container Count*"}
                type={"number"}
                placeholder={"eg:1"}
                name={""}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/5"
              />
              <BlackButton
                label={"Add More"}
                size={"m"}
                variant={""}
                leftIcon={<AddIcon color="#fdfdfd" />}
              />
            </div> */}
            {/* Over dimentional */}
            {/* <div className="flex items-end flex-wrap gap-6 ">
              <GroupField
                label={"Container Size*"}
                type={"select"}
                placeholder={"Choose Container Size"}
                name={"containerSize"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<ContainerIcon color="#2c398f" />}
                parentStyle="basis-1/3 max-w-[80%]"
              />
              <div className="basis-4/5 w-[80%] flex  gap-6 items-center">
                <GroupField
                  label={"Length"}
                  type={"number"}
                  placeholder={"Enter Length"}
                  name={"length"}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-1/4"
                />
                <GroupField
                  label={"Width"}
                  type={"number"}
                  placeholder={"Enter Width"}
                  name={"width"}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-1/4"
                />
                <GroupField
                  label={"Height "}
                  type={"number"}
                  placeholder={"Enter Height"}
                  name={"height"}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-1/4"
                />
                <GroupField
                  label={"Measurement"}
                  type={"select"}
                  placeholder={"Choose"}
                  name={"measurement"}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle=" max-w-[25%] basis-1/4 min-w-[25%] "
                />
              </div>

              <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2 ">
                <p>Gross Weight *</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={"Enter Volume"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-2/3"
                    leftIcon={<WeightIcon color="#2c398f" />}
                    inputStyle="placeholder:text-xs"
                  />{" "}
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"select"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "kgs", label: "Kgs" },
                      { value: "lbs", label: "Lbs" },
                      { value: "mt", label: "Mt" },
                      { value: "grams", label: "Grams" },
                    ]}
                    parentStyle="w-1/3"
                  />
                </div>
              </div>
              <GroupField
                label={"Container Count*"}
                type={"number"}
                placeholder={"eg:1"}
                name={""}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/5"
              />
              <BlackButton
                label={"Add More"}
                size={"m"}
                variant={""}
                leftIcon={<AddIcon color="#fdfdfd" />}
              />
            </div> */}
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle
              label={"Goods Ready Date"}
              icon={<RangeCalenderIcon />}
            />
            <div className="flex items-center flex-wrap gap-6">
              <GroupField
                label={"Date*"}
                type={"date"}
                placeholder={"Enter Your Date"}
                name={"date"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/4"
              />
              <GroupField
                label={"Alternative Date*"}
                type={"date"}
                placeholder={"Enter Your Alternative Date"}
                name={"alternativeDate"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/4"
              />
              <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                <p>Indicated Rate</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={""}
                    name={""}
                    value={"USD"}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "USD", label: "USD" },
                      { value: "DOLLAR", label: "DOLLAR" },
                      { value: "INR", label: "INR" },
                    ]}
                    parentStyle="w-1/3"
                  />
                  <GroupField
                    label={""}
                    type={"text"}
                    placeholder={"Enter Volume"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/2"
                    inputStyle="placeholder:text-xs"
                  />{" "}
                </div>
              </div>
              <GroupField
                label={"Description"}
                type={"textarea"}
                placeholder={"write"}
                name={"description"}
                value={""}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                parentStyle="basis-4/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <HeadTitle label={"addional service"} icon={<ScalePencilIcon />} />
            <GroupField
              label={"Additional Services Categories"}
              type={"select"}
              placeholder={"select categories"}
              name={"additionalServices"}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<CategoryIcon color="#2c398f" />}
            />
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
          <PrimaryButton label={"Save Enquiry"} size={"xl"} variant={""} />
        </div>
      </div>
    </>
  );
};

export default AddEnquiry;

const HeadTitle: React.FC<{ label: string; icon: React.ReactNode }> = ({
  label,
  icon,
}) => {
  return (
    <>
      <div className="flex gap-4 border-b pb-2 border-grey-ab-100">
        <span>{icon}</span> <p className="font-semibold capitalize">{label}</p>
      </div>
    </>
  );
};
