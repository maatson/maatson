import React from "react";
import BlackButton from "../../../components/buttons/BlackButton";
import ErrorButton from "../../../components/buttons/ErrorButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { EditIcon } from "../../../components/icons/Icons";

const CarrierProfile: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="rounded-xs p-4 flex flex-col gap-4 bg-grey-aw-50 max-w-[275px]">
            <div className="flex flex-col gap-4">
              <div className="rounded-sm py-7 px-14 bg-grey-100">logo image</div>
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

            <div className="rounded-sm p-3 flex flex-col gap-3"></div>
          </div>
        </div>

        {/* conversation */}
        <div></div>
      </div>
    </>
  );
};

export default CarrierProfile;
