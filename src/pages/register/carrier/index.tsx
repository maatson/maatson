import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const CarrierRegister: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Registration",
          location.pathname === "/registration-carrier/register-form"
            ? ["Carrier Registration", "Add Carrier"]
            : location.pathname ===
              "/registration-carrier/carrier-details/profile"
            ? ["Carrier Registration", "Carrier Details"]
            : location.pathname ===
              "/registration-carrier/carrier-details/contact-information"
            ? ["Carrier Registration", "Carrier Details"]
            : "Carrier Registration",
        ].flat()}
        heading={
          location.pathname === "/registration-carrier/register-form"
            ? "Carrier Register"
            : location.pathname ===
              "/registration-carrier/carrier-details/profile"
            ? "Carrier Details"
            : location.pathname ===
              "/registration-carrier/carrier-details/contact-information"
            ? "Carrier Details"
            : "Carrier Registration"
        }
      />

      {(location.pathname === "/registration-carrier/carrier-details/profile" ||
        location.pathname === "/registration-carrier/carrier-details/contact-information") && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to={"/registration-carrier/carrier-details/profile"}
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
                to={"/registration-carrier/carrier-details/contact-information"}
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
      )}
      <Outlet />
    </>
  );
};

export default CarrierRegister;
