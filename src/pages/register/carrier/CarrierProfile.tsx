import React from "react";
import CompanyLogo from "/images/sample/MSCLogo.png";
import BlackButton from "../../../components/buttons/BlackButton";
import ErrorButton from "../../../components/buttons/ErrorButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  CrossIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
  LocationIcon,
  PriceTagIcon,
  SettingsIcon,
} from "../../../components/icons/Icons";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import BlackChip from "../../../components/chips/BlackChip";
import BlueChip from "../../../components/chips/BlueChip";

const CarrierProfile: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* top  */}
        <div className="flex gap-4">
          {/* left */}
          <div className="rounded-xs p-4 flex flex-col gap-4 bg-grey-aw-50 max-w-[275px]">
            {/* <div className="rounded-xs p-4 flex flex-col gap-4 bg-grey-aw-50 max-w-sm basis-[26%]"> */}
            <div className="flex flex-col gap-4">
              <div className="rounded-sm py-7 px-14 bg-grey-100 flex items-center justify-center">
                <img src={CompanyLogo} alt="companylogo" className="" />
              </div>
              <div className="text-center font-semibold text-lg text-grey-ab-800">
                Mediterranean Shipping Company S.A.
              </div>
              <div className="flex gap-3">
                <div className="w-full">
                  <BlackButton
                    label={"Mail to"}
                    size={"s"}
                    variant={"primary"}
                    style="w-full justify-center"
                  />
                </div>
                <div className="w-full">
                  <ErrorButton
                    label={"Delete Carrier"}
                    size={"s"}
                    variant={"primary"}
                    style="w-full justify-center"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <PrimaryButton
                label={"Edit Profile"}
                size={"l"}
                variant={"primary"}
                leftIcon={<EditIcon color="#FDFDFD" />}
                style="w-full"
              />
            </div>

            <div className="border border-grey-200"></div>

            <div className="flex flex-col gap-2 text-grey-ab-600">
              <p className="text-grey-ab-300">Carrier Code</p>
              <p>MSC-001</p>
            </div>

            <div className="flex flex-col gap-2 text-grey-ab-600">
              <p className="text-grey-ab-300">Company Email</p>
              <p>info@msc.com</p>
            </div>

            <div className="flex flex-col gap-2 text-grey-ab-600">
              <p className="text-grey-ab-300">Company Phone Number</p>
              <p>+41 22 703 8888</p>
            </div>

            <div className="flex flex-col gap-2 text-grey-ab-600">
              <p className="text-grey-ab-300">Company Address</p>
              <p>Chemin Rieu 12, 1208 Geneva, Switzerland</p>
            </div>

            <div className="flex flex-col gap-2 text-grey-ab-600">
              <p className="text-grey-ab-300">Website</p>
              <p>www.msc.com</p>
            </div>

            <div className="flex flex-col gap-2 text-grey-ab-600">
              <p className="text-grey-ab-300">Operational Since</p>
              <p>2000</p>
            </div>

            <div className="rounded-sm p-3 flex flex-col gap-3 bg-grey-200">
              <p className="text-sm text-grey-ab-400">Mode of Transport*</p>
              <div className="border bordergrey-ab-100"></div>
              <div className="flex gap-3 flex-wrap">
                <SecondaryChip
                  label={"Sea Freight"}
                  size={"xl"}
                  variant={"primary"}
                />
                <SecondaryChip
                  label={"Air Freight"}
                  size={"xl"}
                  variant={"primary"}
                />
                <SecondaryChip
                  label={"Land Freight"}
                  size={"xl"}
                  variant={"primary"}
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-4 w-full">
            {/* service */}
            <div className="bg-grey-aw-50 rounded-xs shadow-lg ">
              <div className="rounded-t-xs border-b border-b-grey-ab-100 py-3 px-4">
                <div className="flex gap-4 items-center">
                  <SettingsIcon color="#121212" />
                  <p className="text-lg font-semibold text-grey-ab-800">
                    Services Categories
                  </p>
                </div>
              </div>

              <div className="rounded-b-xs py-3 px-4 flex gap-4 flex-wrap">
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <PrimaryChip label={"Shipper"} size={"xl"} variant={"mix"} />
              </div>
            </div>

            {/* region */}
            <div className="bg-grey-aw-50 rounded-xs shadow-lg ">
              <div className="rounded-t-xs border-b border-b-grey-ab-100 py-3 px-4">
                <div className="flex gap-4 items-center">
                  <LocationIcon color="#121212" />
                  <p className="text-lg font-semibold text-grey-ab-800">
                    Regions Served
                  </p>
                </div>
              </div>

              <div className="rounded-b-xs py-3 px-4 flex gap-4 flex-wrap">
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
                <BlackChip label={"Shipper"} size={"xl"} variant={"mix"} />
              </div>
            </div>

            {/* certificate and payment */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-grey-aw-50 rounded-xs shadow-lg ">
                <div className="rounded-t-xs border-b border-b-grey-ab-100 py-3 px-4">
                  <div className="flex gap-4 items-center">
                    <DocumentIcon color="#121212" />
                    <p className="text-lg font-semibold text-grey-ab-800">
                      Certifications & Compliance
                    </p>
                  </div>
                </div>

                <div className="rounded-b-xs py-3 px-4 flex flex-col gap-3">
                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">Business License Number </p>
                    <p className="text-grey-ab-600">MSC-001</p>
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">Regulatory Approvals </p>
                    <div className="flex gap-2 flex-wrap">
                      <BlueChip label={"IATA"} size={"m"} variant={"fill"} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">ISO Certifications </p>
                    <div className="flex gap-2 flex-wrap">
                      <BlueChip label={"IATA"} size={"m"} variant={"mix"} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">
                      Business Registration Certificate
                    </p>
                    <div className="rounded-xs border p-2 flex gap-3 items-center w-[250px] bg-primary-50 border-grey-ab-100">
                      <DocumentIcon color="#2C398F" />
                      <div className="text-grey-ab-800 truncate w-[140px] ">
                        Carrier agreement.pdf
                      </div>
                      <div className="flex gap-1">
                        <div className="rounded-xs p-1 bg-grey-ab">
                          <DownloadIcon size={16} color="#FDFDFD" />
                        </div>
                        <div className="p-1">
                          <CrossIcon size={16} color="#121212" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-grey-aw-50 rounded-xs shadow-lg h-fit ">
                <div className="rounded-t-xs border-b border-b-grey-ab-100 py-3 px-4">
                  <div className="flex gap-4 items-center">
                    <PriceTagIcon color="#121212" />
                    <p className="text-lg font-semibold text-grey-ab-800">
                      Payment & Legal Information
                    </p>
                  </div>
                </div>

                <div className="rounded-b-xs py-3 px-4 flex flex-col gap-3">
                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">Tax Identification Number (TIN) </p>
                    <p className="text-grey-ab-600">12345678901</p>
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">Payment Terms	 </p>
                    <div className="flex gap-2 flex-wrap">
                      <BlueChip label={"IATA"} size={"m"} variant={"fill"} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <p className="text-grey-ab-300">
                    Tax Compliance Certificate
                    </p>
                    <div className="rounded-xs border p-2 flex gap-3 items-center w-[250px] bg-primary-50 border-grey-ab-100">
                      <DocumentIcon color="#2C398F" />
                      <div className="text-grey-ab-800 truncate w-[140px] ">
                        Business agreement.pdf
                      </div>
                      <div className="flex gap-1">
                        <div className="rounded-xs p-1 bg-grey-ab">
                          <DownloadIcon size={16} color="#FDFDFD" />
                        </div>
                        <div className="p-1">
                          <CrossIcon size={16} color="#121212" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* conversation */}
        <div className=" bg-grey-aw-50 rounded-xs shadow-lg flex justify-center items-center h-[500px] w-full">Chat Conversation will execute after backend work</div>
      </div>
    </>
  );
};

export default CarrierProfile;
