import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import "./quillCustomFonts";
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
  CloseIcon,
  ColorFillIcon,
  CrossIcon,
  DocumentIcon,
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

const textColor = [
  "#000000",
  "#00CC54",
  "#232E72",
  "#255771",
  "#BE8819",
  "#E800B1",
  "#0084E8",
  "#E8891C",
  "#C80008",
];
const textBackgroundColor = [
  "#FDFDFD",
  "#8AF1B4",
  "#C4C8E4",
  "#9FBECD",
  "#F8DDA5",
  "#FF8AE3",
  "#8ACCFF",
  "#FFCF98",
  "#F58A8A",
];

const ComposeEmails: React.FC<ComposeEmailsProps> = ({ onClose }) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const cursorPosition = useRef<number | null>(null);
  const [subject, setSubject] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showTextColorPalette, setShowTextColorPalette] = useState(false);
  const [showBgColorPalette, setShowBgColorPalette] = useState(false);

  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [image, setImage] = useState<File | null>();

  const [currentFontSize, setCurrentFontSize] = useState("normal");
  const [currentFontStyle, setCurrentFontStyle] = useState("sans-serif");

  const applyFormat = (format: string, value?: any) => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;

    const current = editor.getFormat();

    if (format === "list") {
      if (current[format] === value) {
        editor.format(format, false, "user"); // Remove list format
      } else {
        editor.format(format, value, "user"); // Apply list format
      }
    } else if (format === "size") {
      if (value === "normal") {
        editor.format("size", false, "user"); // Remove align format to reset - for left
      } else {
        editor.format("size", value, "user"); // For apply align center and right
      }
    } else if (format === "font") {
      if (value === "sans-serif") {
        editor.format("font", false, "user");
      } else {
        editor.format("font", value, "user");
      }
    } else if (format === "align") {
      if (value === "left") {
        editor.format("align", false, "user"); // Remove align format to reset - for left
      } else {
        editor.format("align", value, "user"); // For apply align center and right
      }
    } else if (value !== undefined) {
      editor.format(format, value, "user");
    } else {
      const isActive = current[format];
      editor.format(format, !isActive, "user");
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

  const handleFontSize = (size: string) => {
    applyFormat("size", size);
    setCurrentFontSize(size); // <- Manually update UI
  };
  const handleFontStyle = (font: string) => {
    applyFormat("font", font);
    setCurrentFontStyle(font); // <- Manually update UI
  };
  const handleTextColor = (color: string) => applyFormat("color", color);
  const handleBgColor = (color: string) => applyFormat("background", color);

  const handleEmojiSelect = (emoji: any) => {
    const editor = quillRef.current?.getEditor();

    const position = cursorPosition.current ?? 0;
    if (editor) {
      editor.insertText(position, emoji.native, "user"); // Insert the emoji at cursor position
      editor.setSelection(position + emoji.native.length); // Move the cursor after the emoji
    }
    setShowEmojiPicker(false);
  };

  const insertLink = () => {
    const quill = quillRef.current?.getEditor();
    if (!quill) return;
    quill.focus();

    const range = quill.getSelection();
    if (range) {
      quill.insertText(range.index, linkUrl, "user");
      quill.formatText(range.index, linkUrl.length, "link", linkUrl, "user");
      quill.setSelection(range.index + linkUrl.length, 0);
    } else {
      const position = cursorPosition.current ?? 0;
      quill.insertText(position, linkUrl, "user");
      quill.formatText(position, linkUrl.length, "link", linkUrl, "user");
      quill.setSelection(position + linkUrl.length, 0);
    }
    setShowLinkModal(false);
    setLinkUrl("");
  };

  const insertImage = () => {
    const quill = quillRef.current?.getEditor();
    if (!quill || !image) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      const range = quill.getSelection(true);
      quill.insertEmbed(range ? range.index : 0, "image", base64Image, "user");
      quill.setSelection((range?.index ?? 0) + 1, 0);
    };
    reader.readAsDataURL(image);
    setImage(null);
  };

  const handleUndo = () => {
    const editor = quillRef.current?.getEditor();
    (editor as any).history.undo();
  };

  const handleRedo = () => {
    const editor = quillRef.current?.getEditor();
    (editor as any).history.redo();
  };

  const handleEditorChangeSelection = (range: any) => {
    if (range) {
      cursorPosition.current = range.index;
      const editor = quillRef.current?.getEditor();
      if (editor) {
        const formats = editor.getFormat(range);

        setCurrentFontSize(formats.size || "normal");
        setCurrentFontStyle(formats.font || "sans-serif");
      }
    }
  };

  const handleCancel = () => {
    onClose();
  };

  useEffect(() => {
    const editor = quillRef.current?.getEditor();
    if (editor) {
      const range = editor.getSelection();
      if (range) {
        const formats = editor.getFormat(range);
        setCurrentFontSize(formats.size || "normal");
        setCurrentFontStyle(formats.font || "sans-serif");
      }
    }
  }, []);

  useEffect(() => {
    if (image) {
      insertImage();
    }
  }, [image]);

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
            onChange={(content, delta, source, editor) => {
              setEditorContent(content);
              setTimeout(() => {
                const range = editor.getSelection();
                if (range) {
                  const formats = (editor as any).getFormat(range);
                  setCurrentFontSize(formats.size || "normal");
                  setCurrentFontStyle(formats.font || "sans-serif");
                }
              }, 0); 
            }}
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
        <div className="flex gap-2 items-center h-[48px] overflow-auto custom-scrollbar-small mx-4 ">
          {attachedFiles.map((file, index) => (
            <div
              key={index}
              className="flex gap-3 p-2 rounded-xs bg-primary-50 border border-grey-ab-100 items-center w-[220px] justify-between"
            >
              <div className="flex gap-3 truncate">
                <div>
                  <DocumentIcon color="#2C398F" />
                </div>
                <p className=" text-grey-ab-900 truncate">{file.name}</p>
              </div>
              <button
                onClick={() =>
                  setAttachedFiles((prevFiles) =>
                    prevFiles.filter((_, i) => i !== index)
                  )
                }
              >
                <CloseIcon size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Custom Toolbar */}
      <div className="flex flex-col px-4 py-3 border-t border-t-grey-ab-50">
        <div className="flex gap-1 flex-wrap justify-end">
          <IconSets icon={<BackwardIcon size={20} />} onClick={handleUndo} />
          <IconSets icon={<ForwardIcon size={20} />} onClick={handleRedo} />

          <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs px-1">
            <select
              className="text-xs bg-transparent outline-none cursor-pointer"
              value={currentFontStyle}
              onChange={(e) => handleFontStyle(e.target.value)}
            >
              <option value="" disabled>
                Font Style
              </option>
              <option value="sans-serif">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="slabserif">Slab Serif</option>
              <option value="script">Script</option>
            </select>
          </div>

          <div className="bg-grey-aw-50 border border-grey-ab-50 rounded-xs px-1">
            <select
              className="text-xs bg-transparent outline-none cursor-pointer"
              value={currentFontSize}
              onChange={(e) => handleFontSize(e.target.value)}
            >
              <option value="" disabled>
                Size
              </option>
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="huge">Huge</option>
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
          <div className="relative">
            <IconSets
              icon={<TextColorIcon size={20} />}
              onClick={() => {
                setShowTextColorPalette((prev) => !prev);
                setShowBgColorPalette(false);
              }}
            />
            {showTextColorPalette && (
              <div className="absolute flex gap-2 bottom-[44px] z-10 bg-grey-aw-50 border border-grey-ab-50 rounded-xs shadow-md p-2">
                {textColor.map((color) => (
                  <button
                    key={color}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      handleTextColor(color);
                      setShowTextColorPalette(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <IconSets
              icon={<ColorFillIcon size={20} />}
              onClick={() => {
                setShowTextColorPalette(false);
                setShowBgColorPalette((prev) => !prev);
              }}
            />
            {showBgColorPalette && (
              <div className="absolute flex gap-2 bottom-[44px] z-10 bg-grey-aw-50 border border-grey-ab-50 rounded-xs shadow-md p-2">
                {textBackgroundColor.map((color) => (
                  <button
                    key={color}
                    className="w-4 h-4 rounded-full border border-grey-ab-100"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      handleBgColor(color);
                      setShowBgColorPalette(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
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
            <label htmlFor="imageinsertion">
              <IconSets icon={<ImageOutlineIcon size={20} color="#212121" />} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="imageinsertion"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                  insertImage(); // Insert immediately
                }
              }}
              className="hidden"
            />
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
