import React, { ChangeEvent } from "react";
import { DropDownIcon, WarningIcon } from "../icons/Icons";
import Select from "react-select";
import "./style.css";
import CreatableSelect from "react-select/creatable";

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
  value: string | number | string[];
  options?: { label: string; value: string }[]; // Better type for options
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onClickRightIcon?: () => void;
  error: boolean;
  errorMessage: string;
  size?: string; //added by suriya
  isMulti?: boolean;
  isDisabled?: boolean;
}

// const CustomDropdownIndicator = () => {
//   return (
//     <div>
//       <DropDownIcon />
//     </div>
//   ); // Empty or custom content here to replace the default dropdown icon
// };

const CustomDropdownIndicator: React.FC<{ size?: string }> = ({ size }) => {
  return (
    <div>
      <DropDownIcon size={size === "s" ? "20px" : "24px"} />
    </div>
  );
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
  onClickRightIcon,
  error,
  errorMessage,
  isMulti,
  isDisabled,
  size, //added by suriya
}) => {
  // Handle React-Select change event
  const handleReactSelectChange = (selectedOption: any) => {
    onChange({
      target: { name, value: selectedOption ? selectedOption.value : "" },
    } as ChangeEvent<HTMLInputElement | HTMLSelectElement>);
  };
  const handleReactMultiSelectChange = (selectedOption: any) => {
    onChange({
      target: { name, value: selectedOption },
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
        {/* <div> */}
        <div
          className={`${size === "s" ? "px-3 py-[6px] text-xs" : "px-4 py-3 "}
             flex gap-4 items-center border bg-grey-50  rounded-xs shadow-xs justify-between  hover:border-grey-ab-100 focus:border-primary-400 active:border-primary-400 focus-within:border-primary-400 ${
               !error ? "border-grey-200 " : "border-error "
             }   ${inputStyle}`}
        >
          {leftIcon && <div className="flex-shrink-0">{leftIcon}</div>}
          {type === "select" ? (
            <>
              <Select
                id={name}
                name={name}
                value={options?.find((option) => option.value === value)} // Set the selected value
                onChange={
                  isMulti
                    ? handleReactMultiSelectChange
                    : handleReactSelectChange
                } // React-Select onChange handler
                isMulti={isMulti ? true : false}
                isDisabled={isDisabled}
                options={options}
                className="p-0 w-full min-w-0 " // Tailwind class for full width
                classNamePrefix="custom-select" // Optional class prefix for styling
                placeholder={placeholder || "Select an option"} // Placeholder text
                isSearchable // Enable searching options
                // components={{
                //   DropdownIndicator: CustomDropdownIndicator, // Hide the dropdown icon
                //   IndicatorSeparator: null,
                // }}
                components={{
                  DropdownIndicator: () => (
                    <CustomDropdownIndicator size={size} />
                  ),
                  IndicatorSeparator: null,
                }}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    padding: 0,
                    borderColor: "none", // Tailwind border-gray-200
                    borderRadius: "0", // Tailwind rounded-md
                    boxShadow: "none", // Remove default React-Select shadow
                    background: "#fcfcfc",
                    border: 0,
                    minHeight: "none",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    // fontSize: "16px",
                    color: "#999999  ",
                  }),
                  menu: (provided) => ({
                    ...provided,
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
                      state.isSelected || state.isFocused ? "#fff" : "#111827", // Tailwind text colors
                    padding: "0.2rem 0.5rem", // Tailwind padding
                  }),
                  multiValue: (provided) => ({
                    ...provided,
                    backgroundColor: "#ffffff", // Background color of the chip
                    borderRadius: "16px", // Round shape
                    border: "solid 1px #2c398f",
                    padding: "0px 8px", // Padding inside the chip
                    margin: "4px", // Space between chips
                  }),
                  multiValueLabel: (provided) => ({
                    ...provided,
                    color: "#2c398f", // Text color inside the chip
                    fontSize: "12px", // Text size inside the chip
                    fontWeight: "400",
                    marginBlock: "0",
                    paddingInline: "4px",
                  }),
                  multiValueRemove: (provided) => ({
                    ...provided,
                    color: "#2c398f", // Close icon color
                    cursor: "pointer",
                    padding: "0px",
                    marginBlock: "5px",
                    ":hover": {
                      backgroundColor: "#9ea4cf", // Hover effect for remove button
                      color: "#2c398f", // Text color on hover
                      padding: "0px ",
                    },
                  }),
                }}
              />
            </>
          ) : type === "creatable" ? (
            <>
              <CreatableSelect
                id={name}
                name={name}
                value={options?.find((option) => option.value === value)} // Set the selected value
                onChange={
                  isMulti
                    ? handleReactMultiSelectChange
                    : handleReactSelectChange
                } // React-Select onChange handler
                isMulti={isMulti ? true : false}
                options={options}
                isDisabled={isDisabled}
                className="p-0 w-full min-w-0 " // Tailwind class for full width
                classNamePrefix="custom-select" // Optional class prefix for styling
                placeholder={placeholder || "Select an option"} // Placeholder text
                isSearchable // Enable searching options
                // components={{
                //   DropdownIndicator: CustomDropdownIndicator, // Hide the dropdown icon
                //   IndicatorSeparator: null,
                // }}
                components={{
                  DropdownIndicator: () => (
                    <CustomDropdownIndicator size={size} />
                  ),
                  IndicatorSeparator: null,
                }}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    padding: 0,
                    borderColor: "none", // Tailwind border-gray-200
                    borderRadius: "0", // Tailwind rounded-md
                    boxShadow: "none", // Remove default React-Select shadow
                    background: "#fcfcfc",
                    border: 0,
                    minHeight: "none",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    // fontSize: "16px",
                    color: "#999999  ",
                  }),
                  menu: (provided) => ({
                    ...provided,
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
                      state.isSelected || state.isFocused ? "#fff" : "#111827", // Tailwind text colors
                    padding: "0.2rem 0.5rem", // Tailwind padding
                  }),
                  multiValue: (provided) => ({
                    ...provided,
                    backgroundColor: "#ffffff", // Background color of the chip
                    borderRadius: "16px", // Round shape
                    border: "solid 1px #2c398f",
                    padding: "0px 8px", // Padding inside the chip
                    margin: "4px", // Space between chips
                  }),
                  multiValueLabel: (provided) => ({
                    ...provided,
                    color: "#2c398f", // Text color inside the chip
                    fontSize: "12px", // Text size inside the chip
                    fontWeight: "400",
                    marginBlock: "0",
                    paddingInline: "4px",
                  }),
                  multiValueRemove: (provided) => ({
                    ...provided,
                    color: "#2c398f", // Close icon color
                    cursor: "pointer",
                    padding: "0px",
                    marginBlock: "5px",
                    ":hover": {
                      backgroundColor: "#9ea4cf", // Hover effect for remove button
                      color: "#2c398f", // Text color on hover
                      padding: "0px ",
                    },
                  }),
                }}
              />
            </>
          ) : type === "textarea" ? (
            <textarea
              name={name}
              value={value}
              id={name}
              disabled={isDisabled}
              onChange={onChange}
              placeholder={placeholder}
              className={`outline-none placeholder-grey-ab-200 focus:outline-none bg-grey-50  active:outline-none text-grey-ab-800 w-full `}
            ></textarea>
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              id={name}
              disabled={isDisabled}
              onChange={onChange}
              placeholder={placeholder}
              className={`outline-none placeholder-grey-ab-200 focus:outline-none bg-grey-50  active:outline-none text-grey-ab-800 w-full `}
            />
          )}
          {rightIcon && (
            <div onClick={onClickRightIcon} className="cursor-pointer">
              {rightIcon}
            </div>
          )}
        </div>
        {error && errorMessage && (
          <p className="text-error flex items-start gap-1 mt-1 text-2xs font-semibold capitalize">
            <div>
              <WarningIcon color="#ea0001" size={14} />
            </div>
            <span> {errorMessage}</span>
          </p>
        )}
        {/* </div> */}
      </div>
    </>
  );
};

export default GroupField;
