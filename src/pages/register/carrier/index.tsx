import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const CarrierRegister: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Registration", path: "/registration-carrier" },
  ];
  let heading = "Carrier Registration";

  const isAddForm = pathname === "/registration-carrier/register-form";
  const isProfile =
    pathname === "/registration-carrier/carrier-details/profile";
  const isContact =
    pathname === "/registration-carrier/carrier-details/contact-information";

  if (isAddForm) {
    breadCrums.push(
      { label: "Carrier Registration", path: "/registration-carrier" },
      { label: "Add Carrier" }
    );
    heading = "Carrier Register";
  } else if (isProfile || isContact) {
    breadCrums.push(
      { label: "Carrier Registration", path: "/registration-carrier" },
      { label: "Carrier Details" }
    );
    heading = "Carrier Details";
  } else {
    breadCrums.push({ label: "Carrier Registration" });
  }

  const showTabs = isProfile || isContact;

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />

      {showTabs && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to="/registration-carrier/carrier-details/profile"
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
                to="/registration-carrier/carrier-details/contact-information"
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
