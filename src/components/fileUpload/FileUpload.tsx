import { useState } from "react";
import { CloseSolidIcon } from "../icons/Icons";

interface FileUploadProps {
  size?: string;
  onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileChange,
  size = "l",
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileChange?.(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFileChange?.(null);
  };

  return (
    <>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="flex rounded-xs border border-grey-ab-200">
        <label
          htmlFor="fileInput"
          className={`border-r flex items-center flex-shrink-0 rounded-l-xs border-r-grey-ab-200 bg-grey-200 ${
            size === "m" ? "py-2  text-sm " : "py-3 font-semibold"
          } pl-4 pr-3 text-grey-ab-300 cursor-pointer`}
        >
          Choose File
        </label>
        <div
          className={`min-w-[280px] w-full rounded-r-xs flex justify-between ${
            size === "m" ? "py-2  text-sm " : "py-3"
          } pl-3 pr-4 bg-white items-center`}
        >
          <p className="text-sm text-grey-ab-300">
            {selectedFile ? selectedFile.name : "No File Choosen"}
          </p>
          {selectedFile && (
            <button
              onClick={handleRemoveFile}
              className="flex items-center justify-center"
            >
              <CloseSolidIcon color="#6A6A6A" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
