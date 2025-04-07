import React from "react";
import { SlashIcon } from "../icons/Icons";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  breadCrums: string [];
  // breadCrums: { label: string; path: string }[];
  heading: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadCrums, heading }) => {
  return (
    <>
      <div className="flex px-3 py-2 justify-between w-full">
        <h5 className="h5 font-semibold">{heading}</h5>
        <div className="flex gap-1 items-center">
          {breadCrums.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              {/* <Link to={item.path}> */}
                <span
                  className={`shadow-xs px-2 py-1 rounded-xl text-2xs cursor-pointer  ${
                    index === breadCrums.length - 1
                      ? "bg-tertiary-50 text-tertiary-400"
                      : "bg-gray-200 text-grey-ab-300"
                  }`}
                >
                  {item}
                  {/* {item.label} */}
                </span>
              {/* </Link> */}
              {index === breadCrums.length - 1 ? "" : <SlashIcon />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
