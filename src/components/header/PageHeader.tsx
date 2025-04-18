import React from "react";
import { SlashIcon } from "../icons/Icons";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  breadCrums: { label: string; path?: string }[];
  heading: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadCrums, heading }) => {
  return (
    <div className="flex px-3 py-2 justify-between w-full">
      <h5 className="h5 font-semibold">{heading}</h5>
      <div className="flex gap-1 items-center">
        {breadCrums.map((item, index) => {
          const isLast = index === breadCrums.length - 1;
          const classes = `shadow-xs px-2 py-1 rounded-xl text-2xs cursor-pointer ${
            isLast
              ? "bg-tertiary-50 text-tertiary-400"
              : "bg-gray-200 text-grey-ab-300"
          }`;

          const crumb =
            item.path && !isLast ? (
              <Link to={item.path}>
                <span className={classes}>{item.label}</span>
              </Link>
            ) : (
              <span className={classes}>{item.label}</span>
            );

          return (
            <div key={index} className="flex items-center gap-1">
              {crumb}
              {!isLast && <SlashIcon />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageHeader;
