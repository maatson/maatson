import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import ViewCard from "../../../sea-air-schedule/components/layouts/ViewCard";
import ship from "../../../../../../public/images/cargoShip.png";

interface CargoProp {
  containerId: string;
  containerNumber: string;
  containerType: string;
}

interface VesselDetailProp {
  vesselName: string;
  vesselNumber: string;
  atd: string;
  eta: string;
  ata: string;
  pol: string;
  pod: string;
  cargoData: CargoProp[];
}

interface TransitProps {
  transitNumber: number;
  pendingCargo: CargoProp[];
  vesselDetails: VesselDetailProp[];
  portOfLoading: string;
  portOfDischarge: string;
}

interface UpdateCargoProp {
  data: TransitProps & { vesselIndex: number };
  oncancel: () => void;
}

const UpdateCargo: React.FC<UpdateCargoProp> = ({ data, oncancel }) => {
  const [vesselCargo, setVesselCargo] = useState<CargoProp[]>([]);
  const [pendingCargo, setPendingCargo] = useState<CargoProp[]>([]);

  useEffect(() => {
    setVesselCargo(data.vesselDetails[data.vesselIndex].cargoData);
    setPendingCargo(data.pendingCargo);
  }, [data]);

  const handleCheckboxChange = (cargo: CargoProp, isChecked: boolean) => {
    if (isChecked) {
      // Move from pending to vessel
      setPendingCargo((prev) =>
        prev.filter((c) => c.containerId !== cargo.containerId)
      );
      setVesselCargo((prev) => [...prev, cargo]);
    } else {
      // Move from vessel to pending
      setVesselCargo((prev) =>
        prev.filter((c) => c.containerId !== cargo.containerId)
      );
      setPendingCargo((prev) => [...prev, cargo]);
    }
  };

  const handleSave = () => {
    // Save logic here (e.g., send back to parent via props or call API)
    console.log("Updated Vessel Cargo", vesselCargo);
    console.log("Updated Pending Cargo", pendingCargo);
    oncancel();
  };

  return (
    <div className="inset-0 flex items-center justify-center fixed bg-black/60 z-10">
      <div className="flex bg-grey-aw-50 mx-auto w-[800px] h-[550px] rounded p-6 gap-8 flex-col items-center">
        <h5 className="text-grey-ab-900 font-semibold h5">
          Transhipment: Assign Containers to Vessel
        </h5>
        <div className="flex flex-col gap-3 overflow-auto w-full">
          <div className="p-4 gap-4 flex flex-col border border-grey-ab-100 rounded-lg">
            <div className="flex gap-6 w-full">
              <div className="w-16 flex items-center">
                <img src={ship} alt="vessel" className="object-fill" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-start ">
                  <ViewCard
                    style="text-lg font-semibold flex-col "
                    label={data.vesselDetails[data.vesselIndex].vesselName}
                    value={
                      <p className=" flex gap-2 text-sm ">
                        <span className="text-grey-ab-300 font-normal">
                          Voyage Number
                        </span>
                        <span>
                          {data.vesselDetails[data.vesselIndex].vesselNumber}
                        </span>
                      </p>
                    }
                  />
                  <ViewCard
                    label={"Port of Loading"}
                    value={data.vesselDetails[data.vesselIndex].pol}
                    style="flex-col "
                    labelStyle="text-grey-ab-300"
                    valueStyle="font-semibold"
                  />

                  <ViewCard
                    label={"Port of Discharge"}
                    value={data.vesselDetails[data.vesselIndex].pod}
                    style="flex-col"
                    labelStyle="text-grey-ab-300"
                    valueStyle="font-semibold"
                  />
                </div>
              </div>
            </div>

            <div className="bg-grey-200 rounded-sm p-4 flex flex-wrap gap-4 justify-evenly">
              {vesselCargo.map((cargo) => (
                <ContainerChip
                  primaryData={cargo.containerNumber}
                  secondaryData={cargo.containerType}
                />
              ))}
            </div>
          </div>

          <div className="bg-grey-200 rounded-sm p-4 flex flex-wrap gap-4 justify-evenly">
            {[...vesselCargo, ...pendingCargo].map((cargo) => (
              <CheckedContainerChip
                key={cargo.containerId}
                primaryData={cargo.containerNumber}
                secondaryData={cargo.containerType}
                id={cargo.containerId}
                checked={vesselCargo.some(
                  (c) => c.containerId === cargo.containerId
                )}
                onChange={(checked) => handleCheckboxChange(cargo, checked)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 w-full">
          <div className="w-full" onClick={oncancel}>
            <PrimaryButton
              label={"Cancel"}
              size={"xl"}
              variant={"outline"}
              style="w-full"
            />
          </div>
          <div className="w-full" onClick={handleSave}>
            <PrimaryButton
              label={"Save"}
              size={"xl"}
              variant={""}
              style="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCargo;

const CheckedContainerChip: React.FC<{
  id: string;
  primaryData: string;
  secondaryData: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}> = ({ primaryData, secondaryData, checked, onChange }) => {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-sm border-2 border-primary bg-grey-aw-50 relative min-w-[180px]">
      <p className="text-lg font-semibold text-primary">{primaryData}</p>
      <p className="text-grey-ab text-sm">{secondaryData}</p>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="absolute top-1 right-1"
      />
    </div>
  );
};

const ContainerChip: React.FC<{
  primaryData: string;
  secondaryData: string;
}> = ({ primaryData, secondaryData }) => {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-sm border-2 border-primary bg-grey-aw-50 min-w-[180px]">
      <p className="text-lg font-semibold text-primary">{primaryData}</p>
      <p className="text-grey-ab text-sm">{secondaryData}</p>
    </div>
  );
};
