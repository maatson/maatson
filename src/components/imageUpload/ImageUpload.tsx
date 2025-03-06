import { useState } from "react";
import { UploadIcon, EditIcon } from "../icons/Icons";

interface ImageUploadProps {
  label: string;
  onImageChange: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, label }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange?.(file);
    }
  };
    
  return (
    <div>
      <input
        type="file"
        id={label}
        accept="image/jpeg, image/jpg, image/png"
        className="hidden"
        onChange={handleImageChange}
      />
      {!selectedImage ? (
        <label
          htmlFor={label}
          className="w-[220px] min-h-[128px] flex items-center justify-center rounded-xs border px-4 bg-white flex-col gap-3 border-grey-ab-100 relative cursor-pointer"
        >
          <UploadIcon size={32} color="#6A6A6A" />
          <div className="flex flex-col gap-1">
            <p className="text-sm text-blue text-center">
              {label}
            </p>
            <div className="text-center xs-2 text-grey-ab-200">
              Supports JPEG, JPG, and PNG formats (Max 1MB)
            </div>
          </div>
        </label>
      ) : (
        <div className="w-[220px] min-h-[128px] flex items-center justify-center rounded-xs border px-4 bg-white flex-col gap-3 border-grey-ab-100 relative">
          <div className="w-20 h-20">
            <img
              src={selectedImage}
              alt={label}
              className="w-full h-full object-cover"
            />
          </div>
          <label
            htmlFor={label}
            className="rounded-xs bg-blue-50 p-1 absolute bottom-2 right-2 cursor-pointer"
          >
            <EditIcon size={16} color="#0067B5" />
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
