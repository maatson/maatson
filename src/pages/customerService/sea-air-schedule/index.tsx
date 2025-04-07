import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const SeaAirSchedule: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Customer Service",
          location.pathname === "/sea-air-schedule/add-sea-schedule" || location.pathname === "/sea-air-schedule/add-air-schedule"
            ? ["Air & Sea Schedule", "Add Schedule"]
            : location.pathname === "/sea-air-schedule/edit-sea-schedule" || location.pathname === "/sea-air-schedule/edit-air-schedule"
            ? ["Air & Sea Schedule", "Edit Schedule"]
            : location.pathname === "/sea-air-schedule/vessel-details" || location.pathname === "/sea-air-schedule/schedule-details/vessel-details"
            ? ["Air & Sea Schedule", "Vessel Details"]
            : location.pathname === "/sea-air-schedule/flight-details" || location.pathname === "/sea-air-schedule/schedule-details/flight-details"
            ? ["Air & Sea Schedule", "Flight Details"]
            : "Air & Sea Schedule",
        ].flat()}
        heading={
          location.pathname === "/sea-air-schedule/add-sea-schedule" || location.pathname === "/sea-air-schedule/add-air-schedule"
            ? "Add Schedule"
            : location.pathname === "/sea-air-schedule/edit-sea-schedule" || location.pathname === "/sea-air-schedule/edit-air-schedule"
            ? "Edit Schedule"
            : location.pathname === "/sea-air-schedule/vessel-details" ||  location.pathname === "/sea-air-schedule/schedule-details/vessel-details"
            ? "Vessel Details"
            : location.pathname === "/sea-air-schedule/flight-details" ||  location.pathname === "/sea-air-schedule/schedule-details/flight-details"
            ? "Flight Details"
            : "Air & Sea Schedule"
        }
      />
      {location.pathname !== "/sea-air-schedule/add-sea-schedule" &&
        location.pathname !== "/sea-air-schedule/edit-sea-schedule" &&
        location.pathname !== "/sea-air-schedule/vessel-details" &&
        location.pathname !== "/sea-air-schedule/schedule-details/vessel-details" &&
        
        location.pathname !== "/sea-air-schedule/add-air-schedule" &&
        location.pathname !== "/sea-air-schedule/edit-air-schedule" &&
        location.pathname !== "/sea-air-schedule/flight-details" &&
        location.pathname !== "/sea-air-schedule/schedule-details/flight-details" &&
        (
          <div className="flex items-center text-sm">
            <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
              <button>
                <NavLink
                  to={"/sea-air-schedule/sea-freight"}
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      !location.pathname.startsWith(
                        "/sea-air-schedule/air-freight"
                      )
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
        )}
      {/* <div className="flex items-center text-sm">
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
      </div> */}
      <Outlet />
    </>
  );
};

export default SeaAirSchedule;
