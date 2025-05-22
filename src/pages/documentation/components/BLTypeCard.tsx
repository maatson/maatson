import React from "react";
import {
  AddIcon,
  CloseIcon,
  DocumentIcon,
  DownloadIcon,
  InfoIcon,
  PrintIcon,
  SealIcon,
  SuccessIcon,
} from "../../../components/icons/Icons";
import BlackButton from "../../../components/buttons/BlackButton";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import ErrorButton from "../../../components/buttons/ErrorButton";
import TertiaryButton from "../../../components/buttons/TertiaryButton";
import SuccessButton from "../../../components/buttons/SuccessButton";

interface BLTypeCardProps {
  copyType: string;
  available: number;
  isSealAdded: boolean;
  isRequestedToAdmin: boolean;
  isRequestRejectByAdmin: boolean;
  originalBLCopies: number;
  nonNegotiableBLCopies: number;
  seawayBLCopies: number;
  airwayBLCopies: number;
  onDownload?: () => void;
  onPrint?: () => void;
  onRequestAdmin?: () => void;
  onAddSeal?: () => void;
  onRemoveSeal?: () => void;
  onCancelRequest?: () => void;
  onAcceptRequest?: () => void;
  onAddCopies?: () => void;
  isAdmin: boolean;
}

const BLTypeCard: React.FC<BLTypeCardProps> = ({
  copyType,
  available,
  isSealAdded,
  isRequestedToAdmin,
  isRequestRejectByAdmin,
  originalBLCopies,
  nonNegotiableBLCopies,
  seawayBLCopies,
  airwayBLCopies,
  onDownload,
  onPrint,
  onRequestAdmin,
  onAddSeal,
  onRemoveSeal,
  onAcceptRequest,
  onCancelRequest,
  onAddCopies,
  isAdmin,
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-sm bg-grey-aw-100 border border-grey-ab-50 w-1/2 h-fit">
      <div className="flex justify-between px-3 pt-3 pb-1 border-b border-b-grey-ab-50">
        <div className="flex gap-3 items-center h-fit ">
          <div className="p-[6px] rounded-xs bg-blue-50">
            <DocumentIcon size={20} color="#00508C" />
          </div>
          <p className="text-sm font-bold text-grey-ab">{copyType}</p>
        </div>
        <div className="flex flex-col  gap-1 ">
          <p className="text-xs text-grey-ab-300">Available Copies</p>
          <p className="text-h5 font-bold text-blue">
            <span className={`${available === 0 ? "text-error" : ""}`}>
              {available.toString().padStart(2, "0")}
            </span>
            <span className="text-grey-ab-800 font-normal px-[3px]">/</span>
            {copyType.toLowerCase() === "original bill of lading"
              ? originalBLCopies.toString().padStart(2, "0")
              : copyType.toLowerCase() ===
                "non negotiable copies bill  of lading"
              ? nonNegotiableBLCopies.toString().padStart(2, "0")
              : copyType.toLowerCase() === "seaway bill of lading"
              ? seawayBLCopies.toString().padStart(2, "0")
              : airwayBLCopies.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
      {isAdmin ? (
        <>
          {available !== 0 ? (
            <>
              {isSealAdded ? (
                <div className="flex flex-col gap-3 px-3 pb-3 ">
                  <div onClick={onPrint}>
                    <NeutralBlueButton
                      label={"Print"}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<PrintIcon size={16} color="#ffffff" />}
                    />
                  </div>
                  <div className="flex justify-between gap-2 p-1 rounded-xs bg-grey-200">
                    <div className="flex gap-2 items-center ">
                      <div>
                        <SuccessIcon color="#009F41" />
                      </div>
                      <p className="text-success-700 text-sm ">
                        Seal and signature added to the document. Want to remove
                        them?
                      </p>
                    </div>
                    <div onClick={onRemoveSeal}>
                      <ErrorButton
                        label={"Remove"}
                        size={"m"}
                        variant={"outline"}
                        style="text-nowrap"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between px-3 pb-3 items-center ">
                  <div onClick={onPrint}>
                    <NeutralBlueButton
                      label={"Print"}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<PrintIcon size={16} color="#ffffff" />}
                    />
                  </div>
                  <div onClick={onAddSeal}>
                    <TertiaryButton
                      label={"Add Seal & Signature"}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<SealIcon size={16} color="#ffffff" />}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {isRequestedToAdmin ? (
                <div className="flex justify-between px-3 pb-3 items-center ">
                  <div className="flex gap-2 items-center p-1 rounded-xs bg-warning-50">
                    <div>
                      <InfoIcon color="#E8891C" />
                    </div>
                    <p className="text-warning-600 text-sm ">
                      User has reached the download limit. You can approve or
                      cancel the request.
                    </p>
                    <div onClick={onCancelRequest}>
                      <ErrorButton
                        label={"Cancel"}
                        size={"m"}
                        variant={"link"}
                        style="text-nowrap"
                      />
                    </div>
                    <div onClick={onAcceptRequest}>
                      <SuccessButton
                        label={"Approve"}
                        size={"m"}
                        variant={"primary"}
                        style="text-nowrap"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between px-3 pb-3 items-center ">
                  <div className="flex justify-between w-full gap-2 items-center p-1 rounded-xs bg-blue-50">
                    <div className="flex gap-2">
                      <div>
                        <InfoIcon color="#0084E8" />
                      </div>
                      <p className="text-blue-600 text-sm ">
                        Click the button to add Bill of Lading additional
                        copies.
                      </p>
                    </div>

                    <div onClick={onAddCopies}>
                      <NeutralBlueButton
                        label={"Add Copies"}
                        size={"m"}
                        variant={"primary"}
                        leftIcon={<AddIcon size={16} color="#ffffff" />}
                        style="text-nowrap"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {available !== 0 ? (
            <div className="flex justify-between px-3 pb-3 items-center ">
              <div className="flex gap-3">
                <div onClick={onDownload}>
                  <BlackButton
                    label={"Download"}
                    size={"m"}
                    variant={"primary"}
                    leftIcon={<DownloadIcon size={16} color="#ffffff" />}
                  />
                </div>
                <div onClick={onPrint}>
                  <NeutralBlueButton
                    label={"Print"}
                    size={"m"}
                    variant={"primary"}
                    leftIcon={<PrintIcon size={16} color="#ffffff" />}
                  />
                </div>
              </div>
              <div className="p-1 rounded-xs bg-blue-50 text-blue">
                <div className="flex gap-2 items-center ">
                  <div>
                    <InfoIcon size={16} color="#0091FF" />
                  </div>
                  <p className="text-2xs ">
                    {isSealAdded
                      ? "Seal and signature added"
                      : "Seal and signature not added."}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {isRequestedToAdmin ? (
                <div className="flex justify-between px-3 pb-3 items-center ">
                  <div className="flex gap-2 items-center p-1 rounded-xs bg-warning-50 w-full">
                    <div>
                      <InfoIcon color="#E8891C" />
                    </div>
                    <p className="text-warning-600 text-sm ">
                      Your request is pending admin approval. Please wait for
                      further updates.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {isRequestRejectByAdmin ? (
                    <div className="flex justify-between px-3 pb-3 items-center ">
                      <div className="flex gap-2 items-center p-1 rounded-xs bg-error-50">
                        <div>
                          <CloseIcon color="#EA0001" />
                        </div>
                        <p className="text-error text-sm ">
                          Your request for additional BL copies has been
                          rejected by the admin.
                        </p>
                        <div onClick={onRequestAdmin}>
                          <ErrorButton
                            label={"Request Again"}
                            size={"m"}
                            variant={"primary"}
                            style="text-nowrap"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between px-3 pb-3 items-center ">
                      <div className="flex gap-2 items-center p-1 rounded-xs bg-blue-50">
                        <div>
                          <InfoIcon color="#0091FF" />
                        </div>
                        <p className="text-blue text-sm ">
                          You've already downloaded all permitted BL copies.
                          Request admin approval for extra copies if needed.
                        </p>
                        <div onClick={onRequestAdmin}>
                          <ErrorButton
                            label={"Request to Admin"}
                            size={"m"}
                            variant={"primary"}
                            style="text-nowrap"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}

      {/* for admin portion */}
      {/* <div className="flex justify-between px-3 pb-3 items-center ">
        <div onClick={onPrint}>
          <NeutralBlueButton
            label={"Print"}
            size={"m"}
            variant={"primary"}
            leftIcon={<PrintIcon size={16} color="#ffffff" />}
          />
        </div>
        <div onClick={onAddSeal}>
          <TertiaryButton
            label={"Add Seal & Signature"}
            size={"m"}
            variant={"primary"}
            leftIcon={<SealIcon size={16} color="#ffffff" />}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 px-3 pb-3 ">
        <div onClick={onPrint}>
          <NeutralBlueButton
            label={"Print"}
            size={"m"}
            variant={"primary"}
            leftIcon={<PrintIcon size={16} color="#ffffff" />}
          />
        </div>
        <div className="flex justify-between gap-2 p-1 rounded-xs bg-success-50">
          <div className="flex gap-2 items-center ">
            <div>
              <SuccessIcon color="#009F41" />
            </div>
            <p className="text-success-700 text-sm ">
              Seal and signature added to the document. Want to remove them?
            </p>
          </div>
          <div onClick={onRemoveSeal}>
            <ErrorButton
              label={"Remove"}
              size={"m"}
              variant={"outline"}
              style="text-nowrap"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between px-3 pb-3 items-center ">
        <div className="flex gap-2 items-center p-1 rounded-xs bg-warning-50">
          <div>
            <InfoIcon color="#E8891C" />
          </div>
          <p className="text-warning-600 text-sm ">
            User has reached the download limit. You can approve or cancel the
            request.
          </p>
          <div>
            <ErrorButton
              label={"Cancel"}
              size={"m"}
              variant={"link"}
              style="text-nowrap"
            />
          </div>
          <div>
            <SuccessButton
              label={"Approve"}
              size={"m"}
              variant={"primary"}
              style="text-nowrap"
            />
          </div>
        </div>
      </div> */}
      {/* admin portion ends */}
    </div>
  );
};

export default BLTypeCard;
