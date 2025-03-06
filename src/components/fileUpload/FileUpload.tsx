import { CloseSolidIcon } from "../icons/Icons";

interface FileUploadProps {
  label: string;
  onFileChange: (file: File | null) => void;
  fileName?: string;
  parentStyle?: string;
  labelStyle?: string;
  size?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onFileChange,
  fileName = "",
  size = "l",
  labelStyle,
  parentStyle,
}) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);
  };

  const handleRemoveFile = () => {
    onFileChange(null);
  };

  return (
    <>
      <div className={`min-w-[400px] flex flex-col gap-2 ${parentStyle} `}>
        {label && (
          <label htmlFor={label} className={`text-grey-ab ${labelStyle}`}>
            {label}
          </label>
        )}
        <input
          type="file"
          id={label}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex rounded-xs border border-grey-ab-200">
          <label
            htmlFor={label}
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
              {fileName || "No File Chosen"}
            </p>
            {fileName && (
              <button
                onClick={handleRemoveFile}
                className="flex items-center justify-center"
              >
                <CloseSolidIcon color="#6A6A6A" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
