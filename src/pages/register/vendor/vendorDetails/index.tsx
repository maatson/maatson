import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const VendorDetails: React.FC = () => {
  return (
    <>
      <div className="flex items-center text-sm">
        <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
          <button>
            <NavLink
              to={"/registration-vendor/details"}
              end
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded transition-all duration-500`
              }
            >
              Profile
            </NavLink>
          </button>
          <button>
            <NavLink
              to={"/registration-vendor/details/contact"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded transition-all duration-500`
              }
            >
              Contact Information
            </NavLink>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default VendorDetails;
