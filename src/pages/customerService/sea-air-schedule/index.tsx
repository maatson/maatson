import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const SeaAirSchedule: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define flags based on the current pathname
  const isAddSeaSchedule = pathname === "/sea-air-schedule/add-sea-schedule";
  const isAddAirSchedule = pathname === "/sea-air-schedule/add-air-schedule";
  const isEditSeaSchedule = pathname === "/sea-air-schedule/edit-sea-schedule";
  const isEditAirSchedule = pathname === "/sea-air-schedule/edit-air-schedule";
  const isVesselDetails =
    pathname === "/sea-air-schedule/vessel-details" ||
    pathname === "/sea-air-schedule/schedule-details/vessel-details";
  const isFlightDetails =
    pathname === "/sea-air-schedule/flight-details" ||
    pathname === "/sea-air-schedule/schedule-details/flight-details";

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Customer Service", path: "/sea-air-schedule/sea-freight" },
  ];
  let heading = "Air & Sea Schedule";

  // Adjust breadcrumbs and heading based on flags
  if (isAddSeaSchedule || isAddAirSchedule) {
    breadCrums.push(
      { label: "Air & Sea Schedule", path: "/sea-air-schedule/sea-freight" },
      { label: "Add Schedule" }
    );
    heading = "Add Schedule";
  } else if (isEditSeaSchedule || isEditAirSchedule) {
    breadCrums.push(
      { label: "Air & Sea Schedule", path: "/sea-air-schedule/sea-freight" },
      { label: "Edit Schedule" }
    );
    heading = "Edit Schedule";
  } else if (isVesselDetails) {
    breadCrums.push(
      { label: "Air & Sea Schedule", path: "/sea-air-schedule/sea-freight" },
      { label: "Vessel Details" }
    );
    heading = "Vessel Details";
  } else if (isFlightDetails) {
    breadCrums.push(
      { label: "Air & Sea Schedule", path: "/sea-air-schedule/sea-freight" },
      { label: "Flight Details" }
    );
    heading = "Flight Details";
  } else {
    breadCrums.push({ label: "Air & Sea Schedule" });
  }

  // Define condition for showing tabs
  const showTabs =
    !isAddSeaSchedule &&
    !isEditSeaSchedule &&
    !isVesselDetails &&
    !isFlightDetails &&
    !isAddAirSchedule &&
    !isEditAirSchedule;

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />

      {/* Conditionally render tabs if needed */}
      {showTabs && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to={"/sea-air-schedule/sea-freight"}
                className={({ isActive }) =>
                  `${
                    isActive &&
                    !pathname.startsWith("/sea-air-schedule/air-freight")
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

      <Outlet />
    </>
  );
};

export default SeaAirSchedule;
