import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const SeaAirSchedule: React.FC = () => {
  return (
    <>
      {" "}
      <PageHeader
        breadCrums={[
          "Home",
          "Customer Service",
          location.pathname === "/sea-air-schedule"
            ? ["Air & Sea Schedule"]
            : "Air & Sea Schedule",
        ].flat()}
        heading={
          location.pathname === "/sea-air-schedule"
            ? "Air & Sea Schedule"
            : "Air & Sea Schedule"
        }
      />
      <div className="flex items-center text-sm">
        <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
          <button>
            <NavLink
              to={"/sea-air-schedule/sea-freight"}
              className={({ isActive }) =>
                `${
                  isActive &&
                  !location.pathname.startsWith("/sea-air-schedule/air-freight")
                    ? "bg-primary-900 text-grey-aw-50"
                    : ""
                } px-4 py-2 rounded transition-all duration-500`
              }
            >
              Sea Freight
            </NavLink>
          </button>
          <button>
            <NavLink
              to={"/sea-air-schedule/air-freight"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded transition-all duration-500`
              }
            >
              Air Freight
            </NavLink>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SeaAirSchedule;
