import React, { ChangeEvent } from "react";
import { DropDownIcon, WarningIcon } from "../icons/Icons";
import Select from "react-select";

interface Groupfield {
  label: string;
  type: string;
  placeholder: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputStyle?: string;
  labelStyle?: string;
  parentStyle?: string;
  name: string;
  value: string | number;
  options?: { label: string; value: string }[]; // Better type for options
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: boolean;
  errorMessage: string;
}

const CustomDropdownIndicator = () => {
  return (
    <div>
      <DropDownIcon />
    </div>
  ); // Empty or custom content here to replace the default dropdown icon
};

const GroupField: React.FC<Groupfield> = ({
  label,
  type,
  placeholder,
  leftIcon,
  rightIcon,
  inputStyle,
  labelStyle,
  parentStyle,
  value,
  options,
  name,
  onChange,
  error,
  errorMessage,
}) => {
  // Handle React-Select change event
  const handleReactSelectChange = (selectedOption: any) => {
    onChange({
      target: { name, value: selectedOption ? selectedOption.value : "" },
    } as ChangeEvent<HTMLInputElement | HTMLSelectElement>);
  };
  return (
    <>
      <div className={`flex flex-col gap-2 ${parentStyle}`}>
        {label && (
          <label htmlFor={name} className={`text-grey-ab-800 ${labelStyle}`}>
            {label}
          </label>
        )}
        <div>
          <div
            className={`${
              type === "select" ? "py-[2px]" : "py-2"
            } px-4 flex gap-4 items-center border bg-grey-50  rounded-xs shadow-xs justify-between hover:border-grey-ab-100 focus:border-primary-400 active:border-primary-400 focus-within:border-primary-400 ${
              !error ? "border-grey-200 " : "border-error "
            } relative`}
          >
            {leftIcon && <div>{leftIcon}</div>}
            {type === "select" ? (
              <>
                <Select
                  name={name}
                  value={options?.find((option) => option.value === value)} // Set the selected value
                  onChange={handleReactSelectChange} // React-Select onChange handler
                  options={options}
                  className="w-full p-0" // Tailwind class for full width
                  classNamePrefix="custom-select" // Optional class prefix for styling
                  placeholder={placeholder || "Select an option"} // Placeholder text
                  isSearchable // Enable searching options
                  components={{
                    DropdownIndicator: CustomDropdownIndicator, // Hide the dropdown icon
                    IndicatorSeparator: null,
                  }}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      padding: "0",
                      borderColor: "none", // Tailwind border-gray-200
                      borderRadius: "0", // Tailwind rounded-md
                      boxShadow: "none", // Remove default React-Select shadow
                      background: "#fcfcfc",
                      border: 0,
                    }),
                    menu: (provided) => ({
                      ...provided,
                      //   maxHeight: "150px", // Tailwind equivalent max-height
                      //   overflowY: "auto", // Scroll if more options
                      top: "120%",
                      background: "#fcfcfc",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected
                        ? "#2c398f "
                        : state.isFocused
                        ? "#9ea4cf "
                        : "#fff", // Tailwind background colors
                      color:
                        state.isSelected || state.isFocused
                          ? "#fff"
                          : "#111827", // Tailwind text colors
                      padding: "0.5rem", // Tailwind padding
                    }),
                  }}
                />
              </>
            ) : (
              <input
                type={type}
                name={name}
                value={value}
                id={name}
                onChange={onChange}
                placeholder={placeholder}
                className={`outline-none  focus:outline-none bg-grey-50  active:outline-none text-grey-ab-800 w-full ${inputStyle}`}
              />
            )}
            {rightIcon && <div>{rightIcon}</div>}
          </div>
          {error && errorMessage && (
            <p className="text-error flex items-start gap-1 mt-1 text-2xs font-semibold capitalize">
              <div>
                <WarningIcon color="#ea0001" size={14} />
              </div>
              <span> {errorMessage}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default GroupField;
