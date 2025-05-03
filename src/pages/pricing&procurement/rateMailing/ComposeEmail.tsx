import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AttachFileIcon,
  BackwardIcon,
  BulletListsIcon,
  CloseIcon,
  ColorFillIcon,
  CrossIcon,
  DocumentIcon,
  DropDownIcon,
  EmojiIcon,
  FontSizeIcon,
  ForwardIcon,
  ImageOutlineIcon,
  ItalicIcon,
  LinkIcon,
  NumberListsIcon,
  SendIcon,
  TextColorIcon,
  UnderLineIcon,
} from "../../../components/icons/Icons";

interface ComposeEmailProps {
  onClose: () => void;
}
interface IconSetsProps {
  icon: React.ReactNode;
}

const ComposeEmail: React.FC<ComposeEmailProps> = ({ onClose }) => {
  const handleCancel = () => {
    onClose();
  };
  return (
    <>
      <div className=" max-w-[640px] w-full max-h-[600px] rounded-sm flex bg-grey-aw-50 flex-col shadow-lg gap-3 ">
        <div className="flex justify-between items-center px-2 py-3">
          <p className="font-semibold text-grey-ab">New Message</p>
          <div
            className="p-1 rounded-xs bg-grey-ab-50 cursor-pointer"
            onClick={handleCancel}
          >
            <CrossIcon size={16} color="#212121" />
          </div>
        </div>
        <div>
          <div className="px-4 py-2 flex items-center justify-between border-b border-grey-ab-50">
            <div className="flex gap-2 items-center">
              <p className="text-grey-ab-300">To</p>
              <div className="flex gap-[10px]  px-2 py-1 items-center rounded-full bg-grey-200">
                <div className="h-4 w-4 rounded-full bg-blue"></div>
                <p className="text-xs text-grey-ab-300">
                  nvt.isst.nute@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="rounded-xs px-2 py-1 bg-grey-200 text-2xs font-bold text-grey-ab-500 cursor-pointer">
                CC
              </div>
              <div className="rounded-xs px-2 py-1 bg-grey-200 text-2xs font-bold text-grey-ab-500 cursor-pointer">
                BCC
              </div>
            </div>
          </div>
          <div className="flex px-4 py-2 gap-3 border-b border-grey-ab-50">
            <p className="text-grey-ab-300">Subject:</p>
            <p className="text-grey-ab-800">Subject...</p>
          </div>
          <div className="max-h-60 min-h-60 px-4 py-2 text-grey-ab-300 overflow-auto custom-scrollbar">
            Write
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="rounded-xs border p-2 flex gap-3 items-center w-fit bg-primary-50 border-grey-ab-100">
            <DocumentIcon color="#2C398F" />
            <div className="text-grey-ab-900 truncate cursor-pointer">
              KYC Document.pdf
            </div>
            <div className="p-1 cursor-pointer">
              <CloseIcon size={16} color="#121212" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4 py-3 border-t border-t-grey-ab-50">
          <div className="flex gap-1 justify-end ">
            <IconSets icon={<BackwardIcon size={20} />} />
            <IconSets icon={<ForwardIcon size={20} />} />
            <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs px-2 py-1 cursor-pointer flex gap-2 items-center">
              <p className="font-bold text-xs text-grey-ab-800">San serif</p>
              <DropDownIcon size={12} />
            </div>
            <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs p-1 cursor-pointer flex gap-2 items-center">
              <FontSizeIcon size={20} />
              <DropDownIcon size={12} />
            </div>
            <IconSets icon={<ItalicIcon size={20} />} />
            <IconSets icon={<UnderLineIcon size={20} />} />
            <IconSets icon={<TextColorIcon size={20} />} />
            <IconSets icon={<ColorFillIcon size={20} />} />
            <IconSets icon={<AlignLeftIcon size={20} />} />
            <IconSets icon={<AlignCenterIcon size={20} />} />
            <IconSets icon={<AlignRightIcon size={20} />} />
            <IconSets icon={<BulletListsIcon size={20} />} />
            <IconSets icon={<NumberListsIcon size={20} />} />
          </div>
          <div className="w-full border-t border-t-grey-ab-50"></div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="p-[6px] rounded-xs bg-grey-ab-50 cursor-pointer">
                <AttachFileIcon size={20} color="#212121" />
              </div>
              <div className="p-[6px] rounded-xs bg-grey-ab-50 cursor-pointer">
                <EmojiIcon size={20} color="#212121" />
              </div>
              <div className="p-[6px] rounded-xs bg-grey-ab-50 cursor-pointer">
                <ImageOutlineIcon size={20} color="#212121" />
              </div>
              <div className="p-[6px] rounded-xs bg-grey-ab-50 cursor-pointer">
                <LinkIcon size={20} color="#212121" />
              </div>
            </div>
            <div className="flex gap-3">
              <div onClick={handleCancel}>
                <PrimaryButton
                  label={"Cancel"}
                  size={"m"}
                  variant={"outline"}
                />
              </div>
              <div>
                <PrimaryButton
                  label={"Send Email"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<SendIcon size={16} color="#ffffff" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComposeEmail;

const IconSets: React.FC<IconSetsProps> = ({ icon }) => {
  return (
    <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs p-1 cursor-pointer">
      {icon}
    </div>
  );
};
