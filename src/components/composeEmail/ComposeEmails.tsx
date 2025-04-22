import React, { useRef, useState } from "react";
import "./index.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import {useDropZone } from "react-dropzone";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AttachFileIcon,
  BackwardIcon,
  BulletListsIcon,
  ColorFillIcon,
  CrossIcon,
  DropDownIcon,
  EmojiIcon,
  ForwardIcon,
  ImageOutlineIcon,
  ItalicIcon,
  LinkIcon,
  NumberListsIcon,
  SendIcon,
  TextBoldIcon,
  TextColorIcon,
  UnderLineIcon,
} from "../../components/icons/Icons";

interface ComposeEmailsProps {
  onClose: () => void;
}

interface IconSetsProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const ComposeEmails: React.FC<ComposeEmailsProps> = ({ onClose }) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const [subject, setSubject] = useState("");
  const [editorContent, setEditorContent] = useState("");

  //   const applyFormat = (format: string, value?: any) => {
  //     const editor = quillRef.current?.getEditor();
  //     if (!editor) return;
  //     if (value !== undefined) {
  //       editor.format(format, value);
  //     } else {
  //       const current = editor.getFormat()[format];
  //       editor.format(format, !current);
  //     }
  //   };

  const applyFormat = (format: string, value?: any) => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;

    const current = editor.getFormat();

    if (format === "list") {
      // Toggle list format
      if (current[format] === value) {
        editor.format(format, false); // Remove list format
      } else {
        editor.format(format, value); // Apply list format
      }
    } else if (format === "size") {
      if (value === "normal") {
        editor.format("size", false); // Remove align format to reset - for left
      } else {
        editor.format("size", value); // For apply align center and right
      }
    } else if (format === "align") {
      if (value === "left") {
        editor.format("align", false); // Remove align format to reset - for left
      } else {
        editor.format("align", value); // For apply align center and right
      }
    } else if (value !== undefined) {
      editor.format(format, value);
    } else {
      const isActive = current[format];
      editor.format(format, !isActive);
    }
  };

  const handleFontSize = (size: string) => applyFormat("size", size);
  const handleTextColor = (color: string) => applyFormat("color", color);
  const handleBgColor = (color: string) => applyFormat("background", color);

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="max-w-[640px] w-full min-h-[600px] rounded-sm flex bg-grey-aw-50 flex-col shadow-lg gap-3">
      {/* Header */}
      <div className="flex justify-between items-center px-2 py-3">
        <p className="font-semibold text-grey-ab">New Message</p>
        <div
          className="p-1 rounded-xs bg-grey-ab-50 cursor-pointer"
          onClick={handleCancel}
        >
          <CrossIcon size={16} color="#212121" />
        </div>
      </div>

      {/* To Section */}
      <div className="px-4 py-2 border-b border-grey-ab-50 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-grey-ab-300">To</p>
          <div className="flex gap-[10px] px-2 py-1 items-center rounded-full bg-grey-200">
            <div className="h-4 w-4 rounded-full bg-blue"></div>
            <p className="text-xs text-grey-ab-300">nvt.isst.nute@gmail.com</p>
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

      {/* Subject */}
      <div className="flex px-4 py-2 gap-3 border-b border-grey-ab-50 w-full">
        <p className="text-grey-ab-300">Subject:</p>
        <input
          type="text"
          placeholder="Subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full outline-none text-grey-ab-800"
        />
      </div>

      {/* Editor */}
      <div className=" border-b border-grey-ab-50">
        <ReactQuill
          ref={quillRef}
          value={editorContent}
          onChange={setEditorContent}
          theme="snow"
          modules={{
            toolbar: false,
            history: {
              delay: 500,
              maxStack: 100,
              userOnly: true,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "color",
            "background",
            "list",
            "bullet",
            "align",
            "link",
            "image",
          ]}
          className="bg-grey-aw-50 border-none h-60 overflow-auto custom-scrollbar"
        />
      </div>

      {/* Custom Toolbar */}
      <div className="flex flex-col gap-2 px-4 py-3 border-t border-t-grey-ab-50">
        <div className="flex gap-1 flex-wrap justify-end">
          <IconSets icon={<BackwardIcon size={20} />} onClick={() => {}} />
          <IconSets icon={<ForwardIcon size={20} />} onClick={() => {}} />
          <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs px-2 py-1 cursor-pointer flex gap-2 items-center">
            <p className="font-bold text-xs text-grey-ab-800">San serif</p>
            <DropDownIcon size={12} />
          </div>

          <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs px-1">
            <select
              className="text-xs bg-transparent outline-none cursor-pointer"
              onChange={(e) => handleFontSize(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Size
              </option>
              <option value="small" className="cursor-pointer">Small</option>
              <option value="normal" className="cursor-pointer">Normal</option>
              <option value="large" className="cursor-pointer">Large</option>
              <option value="huge" className="cursor-pointer">Huge</option>
            </select>
          </div>
          <IconSets
            icon={<TextBoldIcon size={20} />}
            onClick={() => applyFormat("bold")}
          />
          <IconSets
            icon={<ItalicIcon size={20} />}
            onClick={() => applyFormat("italic")}
          />
          <IconSets
            icon={<UnderLineIcon size={20} />}
            onClick={() => applyFormat("underline")}
          />

          <label htmlFor="textColor" className="relative">
            <IconSets icon={<TextColorIcon size={20} />} />
            <input
              type="color"
              id="textColor"
              aria-label="Text Color"
              title="Text Color"
              value={"#C80008"}
              className="absolute w-1 h-1 top-0 opacity-0"
              onChange={(e) => handleTextColor(e.target.value)}
            />
          </label>

          <label htmlFor="textbgColor" className="relative">
            <IconSets icon={<ColorFillIcon size={20} />} />
            <input
              type="color"
              id="textbgColor"
              className="absolute w-1 h-1 top-0 opacity-0"
              onChange={(e) => handleBgColor(e.target.value)}
            />
          </label>

          <IconSets
            icon={<AlignLeftIcon size={20} />}
            onClick={() => applyFormat("align", "left")}
          />
          <IconSets
            icon={<AlignCenterIcon size={20} />}
            onClick={() => applyFormat("align", "center")}
          />
          <IconSets
            icon={<AlignRightIcon size={20} />}
            onClick={() => applyFormat("align", "right")}
          />

          <IconSets
            icon={<BulletListsIcon size={20} />}
            onClick={() => applyFormat("list", "bullet")}
          />
          <IconSets
            icon={<NumberListsIcon size={20} />}
            onClick={() => applyFormat("list", "ordered")}
          />
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-t-grey-ab-50 my-2" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <IconSets icon={<AttachFileIcon size={20} color="#212121" />} />
            <IconSets icon={<EmojiIcon size={20} color="#212121" />} />
            <IconSets icon={<ImageOutlineIcon size={20} color="#212121" />} />
            <IconSets icon={<LinkIcon size={20} color="#212121" />} />
          </div>
          <div className="flex gap-3">
            <div onClick={handleCancel}>
              <PrimaryButton label={"Cancel"} size={"m"} variant={"outline"} />
            </div>
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
  );
};

export default ComposeEmails;

const IconSets: React.FC<IconSetsProps> = ({ icon, onClick }) => {
  return (
    <div
      className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs p-1 cursor-pointer h-fit"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
