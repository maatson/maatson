import React, { useState } from "react";


const PageNotFound: React.FC = () => {
  const options = ["Sea Frieght", "Air Frieght", "Land Frieght",];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option) // Remove if already selected
        : [...prev, option] // Add if not selected
    );
  };

  return (
    <>
      <p>PageNotFound 404</p>;
      <div className="w-[400px] mx-auto mt-10 relative">
      <div className="flex items-center border rounded p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          value={selectedOptions.join(", ")}
          // readOnly
          className="w-full focus:outline-none"
          placeholder="Select frieghts"
        />
        {isOpen ? <div className="p-2 bg-primary-300" /> : <div className="p-2 bg-black" />}
      </div>
      {isOpen && (
        <div className="border rounded my-1 bg-white shadow-md absolute w-full z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-2 cursor-pointer border-b  ${
                selectedOptions.includes(option) ? "bg-primary-100 border-b-primary-400" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default PageNotFound;
