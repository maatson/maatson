import React, { ChangeEvent } from "react";
import { CalenderIcon, DropDownIcon, WarningIcon } from "../icons/Icons";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import "./style.css";

interface Groupfield {
  label: string;
  type: string;
  placeholder: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputStyle?: string;
  labelStyle?: string;
  parentStyle?: string;
  isDateLeft?: boolean;
  name: string;
  value: string | number | string[];
  options?: { label: string; value: string }[];
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onClickRightIcon?: () => void;
  error: boolean;
  errorMessage: string;
  size?: string;
  isMulti?: boolean;
  isDisabled?: boolean;
  id?: string;
  maxLength?: number;
  onBlur?: (e: React.FocusEvent<any>) => void;
}

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: 0,
    borderColor: "none",
    borderRadius: "0",
    boxShadow: "none",
    background: "#fcfcfc",
    border: 0,
    minHeight: "none",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#999999",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
  menu: (provided: any) => ({
    ...provided,
    top: "120%",
    background: "#fcfcfc",
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#2c398f"
      : state.isFocused
      ? "#9ea4cf"
      : "#fff",
    color: state.isSelected || state.isFocused ? "#fff" : "#111827",
    padding: "0.2rem 0.5rem",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "solid 1px #2c398f",
    padding: "0px 8px",
    margin: "4px",
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "#2c398f",
    fontSize: "12px",
    fontWeight: "400",
    marginBlock: "0",
    paddingInline: "4px",
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: "#2c398f",
    cursor: "pointer",
    padding: "0px",
    marginBlock: "5px",
    ":hover": {
      backgroundColor: "#9ea4cf",
      color: "#2c398f",
      padding: "0px",
    },
  }),
};

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
  size,
  id,
  isDateLeft,
  onBlur,
  maxLength,
}) => {
  const getSelectedValue = () => {
    if (Array.isArray(value)) {
      return value.map(
        (val) =>
          options?.find((opt) => opt.value === val) || {
            label: val,
            value: val,
          }
      );
    }
    return (
      options?.find((opt) => opt.value === value) ||
      (value ? { label: value, value } : null)
    );
  };

  const handleReactSelectChange = (selectedOption: any) => {
    onChange({
      target: { name, value: selectedOption ? selectedOption.value : "" },
    } as ChangeEvent<HTMLInputElement | HTMLSelectElement>);
  };

  const handleReactMultiSelectChange = (selectedOption: any) => {
    const value = selectedOption
      ? selectedOption.map(
          (option: { label: string; value: string }) => option.value
        )
      : [];
    onChange({
      target: {
        name,
        value: value,
      },
    } as ChangeEvent<HTMLInputElement | HTMLSelectElement>);
  };

  return (
    <>
      <div className={`flex flex-col gap-2 ${parentStyle}`}>
        {type !== "radio" && label && (
          <label htmlFor={name} className={`text-grey-ab-800 ${labelStyle}`}>
            {label}
          </label>
        )}

        <div
          className={`${size === "s" ? "px-3 py-[6px] text-xs" : "px-4 py-3 "} 
            flex gap-4 items-center border bg-grey-50  rounded-xs shadow-xs justify-between  
            hover:border-grey-ab-100 focus:border-primary-400 active:border-primary-400 focus-within:border-primary-400 
            ${!error ? "border-grey-200" : "border-error"} ${inputStyle}`}
        >
          {leftIcon && <div className="flex-shrink-0">{leftIcon}</div>}

          {type === "radio" && label && (
            <label
              htmlFor={type === "radio" ? id || name : name}
              className={`text-grey-ab-800 ${labelStyle}`}
            >
              {label}
            </label>
          )}

          {type === "select" ? (
            <Select
              id={name}
              name={name}
              value={getSelectedValue()}
              onChange={
                isMulti ? handleReactMultiSelectChange : handleReactSelectChange
              }
              isMulti={isMulti || false}
              isDisabled={isDisabled}
              options={options}
              className="p-0 w-full min-w-0"
              classNamePrefix="custom-select"
              placeholder={placeholder || "Select an option"}
              isSearchable
              components={{
                DropdownIndicator: () => (
                  <CustomDropdownIndicator size={size} />
                ),
                IndicatorSeparator: null,
              }}
              styles={selectStyles}
              menuPortalTarget={document.body}
            />
          ) : type === "creatable" ? (
            <CreatableSelect
              id={name}
              name={name}
              value={getSelectedValue()}
              onChange={
                isMulti ? handleReactMultiSelectChange : handleReactSelectChange
              }
              isMulti={isMulti || false}
              options={options}
              isDisabled={isDisabled}
              className="p-0 w-full min-w-0"
              classNamePrefix="custom-select"
              placeholder={placeholder || "Select an option"}
              isSearchable
              components={{
                DropdownIndicator: () => (
                  <CustomDropdownIndicator size={size} />
                ),
                IndicatorSeparator: null,
              }}
              styles={selectStyles}
            />
          ) : type === "textarea" ? (
            <textarea
              name={name}
              value={value}
              id={name}
              disabled={isDisabled}
              onChange={onChange}
              onBlur={onBlur}
              maxLength={maxLength}
              placeholder={placeholder}
              className="outline-none custom-scrollbar-small placeholder-grey-ab-200 focus:outline-none bg-grey-50 text-grey-ab-800 w-full"
            />
          ) : type === "date" ? (
            <div className="relative w-full">
              <input
                type="date"
                name={name}
                value={value}
                id={name}
                disabled={isDisabled}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`absolute w-full top-0 left-0 h-full opacity-0 z-10 ${
                  isDateLeft && "rotate-180"
                }`}
              />
              <div
                className={`flex w-full items-center z-0 ${
                  isDateLeft
                    ? "flex-row-reverse justify-end gap-4"
                    : "justify-between"
                }`}
              >
                <span
                  className={` overflow-hidden text-ellipsis max-w-[150px] whitespace-nowrap ${
                    value ? "text-grey-ab-800" : "text-grey-ab-200"
                  }`}
                >
                  {value || placeholder}
                </span>
                <CalenderIcon
                  size={`${size === "s" ? 16 : 24}`}
                  color="#2C398F"
                />
              </div>
            </div>
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              id={type === "radio" ? id || name : name}
              disabled={isDisabled}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className="outline-none placeholder-grey-ab-200 focus:outline-none bg-grey-50 text-grey-ab-800 w-full"
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
            <span>{errorMessage}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default GroupField;
