import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

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
import BlackButton from "../buttons/BlackButton";
import GroupField from "../groupField/GroupField";

interface ComposeEmailsProps {
  onClose: () => void;
}

interface IconSetsProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const ComposeEmails: React.FC<ComposeEmailsProps> = ({ onClose }) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const cursorPosition = useRef<number | null>(null);
  const [subject, setSubject] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const applyFormat = (format: string, value?: any) => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;

    const current = editor.getFormat();

    if (format === "list") {
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

  const onDrop = (acceptedFiles: File[]) => {
    setAttachedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  const handleFontSize = (size: string) => applyFormat("size", size);
  const handleTextColor = (color: string) => applyFormat("color", color);
  const handleBgColor = (color: string) => applyFormat("background", color);
  const handleEmojiSelect = (emoji: any) => {
    const editor = quillRef.current?.getEditor();
    const position = cursorPosition.current ?? 0;
    if (editor) {
      editor.insertText(position, emoji.native); // Insert the emoji at cursor position
      editor.setSelection(position + emoji.native.length); // Move the cursor after the emoji
    }
    setShowEmojiPicker(false);
  };

  const insertLink = () => {
    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    quill.focus();

    const range = quill.getSelection();
    // const linkToInsert = linkUrl;

    if (range) {
      quill.insertText(range.index, linkUrl);
      quill.formatText(range.index, linkUrl.length, "link", linkUrl);
      quill.setSelection(range.index + linkUrl.length);
    } else {
      const position = cursorPosition.current ?? 0;
      quill.insertText(position, linkUrl);
      quill.formatText(position, linkUrl.length, "link", linkUrl);
      quill.setSelection(position + linkUrl.length);
    }

    setShowLinkModal(false);
    setLinkText("");
    setLinkUrl("");
  };

  const handleEditorChangeSelection = (range: any) => {
    if (range) {
      cursorPosition.current = range.index;
    }
  };

  const handleCancel = () => {
    onClose();
  };

  useEffect(() => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;

    const editorContainer = editor.root;

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      const files = Array.from(e.dataTransfer?.files || []);
      if (files.length > 0) {
        onDrop(files);
      }
    };

    editorContainer.addEventListener("dragover", handleDragOver);
    editorContainer.addEventListener("dragleave", handleDragLeave);
    editorContainer.addEventListener("drop", handleDrop);

    return () => {
      editorContainer.removeEventListener("dragover", handleDragOver);
      editorContainer.removeEventListener("dragleave", handleDragLeave);
      editorContainer.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div className="max-w-[640px] w-full rounded-sm flex bg-grey-aw-50 flex-col shadow-lg gap-3">
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

      <div>
        {/* To Section */}
        <div className="px-4 py-2 border-b border-grey-ab-50 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-grey-ab-300">To</p>
            <div className="flex gap-[10px] px-2 py-1 items-center rounded-full bg-grey-200">
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
        <div className={` ${dragActive ? "bg-blue-50" : ""}`}>
          <ReactQuill
            ref={quillRef}
            value={editorContent}
            onChange={setEditorContent}
            onChangeSelection={handleEditorChangeSelection} // To track cursor position
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
            className=" border-none h-60 overflow-auto custom-scrollbar"
          />
        </div>
      </div>

      {/* file attachments */}
      {attachedFiles.length > 0 && (
        <div className="flex gap-2 items-center h-[58px] overflow-auto custom-scrollbar-small mx-2">
          {attachedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-grey-200 rounded-md px-2 py-1"
            >
              <p className="text-xs text-grey-ab-800">{file.name}</p>
              <button
                onClick={() =>
                  setAttachedFiles((prevFiles) =>
                    prevFiles.filter((_, i) => i !== index)
                  )
                }
                className="text-xs text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Custom Toolbar */}
      <div className="flex flex-col px-4 py-3 border-t border-t-grey-ab-50">
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
              <option value="small" className="cursor-pointer">
                Small
              </option>
              <option value="normal" className="cursor-pointer">
                Normal
              </option>
              <option value="large" className="cursor-pointer">
                Large
              </option>
              <option value="huge" className="cursor-pointer">
                Huge
              </option>
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
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <IconSets icon={<AttachFileIcon size={20} color="#212121" />} />
            </div>
            <IconSets
              icon={<EmojiIcon size={20} color="#212121" />}
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            />
            {showEmojiPicker && (
              <div className="absolute bottom-[20px] left-4 z-50">
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  theme="dark"
                />
              </div>
            )}
            {/* below apply image upload functcon similar in emails */}
            <IconSets icon={<ImageOutlineIcon size={20} color="#212121" />} />
            <IconSets
              icon={<LinkIcon size={20} color="#212121" />}
              onClick={() => setShowLinkModal(true)}
            />
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

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-grey-aw-50 rounded-md shadow-md p-4 flex flex-col gap-4 w-full max-w-sm">
            <GroupField
              label={"Insert Link"}
              type={"url"}
              placeholder={"Enter Link"}
              name={""}
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              error={false}
              errorMessage={""}
              leftIcon={<LinkIcon color="#2C398F" />}
            />
            <div className="flex justify-end gap-2 items-center">
              <div onClick={() => setShowLinkModal(false)}>
                <BlackButton label={"Cancel"} size={"m"} variant={"link"} />
              </div>
              <div onClick={insertLink}>
                <BlackButton label={"Save"} size={"m"} variant={"primary"} />
              </div>
            </div>
          </div>
        </div>
      )}
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
