import React from "react";
import logo from "/images/logo.svg";
import profile from "/images/logo.svg";
import { BellIcon, FollowUpIcon, SettingsIcon } from "../icons/Icons";

const Header: React.FC = () => {
  return (
    <div className="px-5 py-3 bg-grey-aw-50 shadow-sm flex items-center justify-between w-full ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-8">
          <span className="bg-primary-50 p-2 rounded-full relative  cursor-pointer">
            <FollowUpIcon color="#2C398F" />
            <span className="rounded-full text-3xs font-semibold p-1 bg-error text-grey-50 absolute -top-1 left-1/2">
              21+
            </span>
          </span>
          <span className="bg-primary-50 p-2 rounded-full relative  cursor-pointer">
            <BellIcon color="#2C398F" />
            <span className="rounded-full text-3xs font-semibold p-1 bg-error text-grey-50 absolute -top-1 left-1/2">
              21+
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3 border-x px-4  cursor-pointer">
          <div className="w-10 h-10">
            <img
              src={profile}
              alt="profile_picture"
              className="w-full h-full rounded-full object-fill border"
            />
          </div>
          <div className="flex flex-col gap-1  text-grey-ab-800">
            <p className="text-sm font-semibold">Tim Martin</p>
            <p className="text-xs ">sales executive</p>
          </div>
        </div>
        <div className="flex items-center">
          {" "}
          <span className="bg-grey-200 p-2 rounded-full  cursor-pointer">
            <SettingsIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
