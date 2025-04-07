import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  JsonFileIcon,
  LeaveCalenderIcon,
  UpdateIcon,
} from "../../../../components/icons/Icons";

const AirFreight: React.FC = () => {
  const location = useLocation();
  return (
    <div className="bg-grey-aw-50 h-full rounded">
      <div className="border-b border-grey-ab-100 flex p-2 gap-2 text-sm font-semibold items-center">
        <div className="border-r border-r-grey-ab-100 px-2">
          <NavLink
            to={"/sea-air-schedule/air-freight"}
            className={({ isActive }) =>
              `${
                isActive &&
                location.pathname === "/sea-air-schedule/air-freight"
                  ? "text-secondary  border-b-2 border-secondary"
                  : " border-b-2  border-transparent"
              } flex px-2 py-1 gap-[10px] items-center`
            }
          >
            <p> Update Schedules</p>
            <UpdateIcon
              color={`${
                location.pathname === "/sea-air-schedule/air-freight"
                  ? "#eeaa1f"
                  : "black"
              }`}
            />
          </NavLink>
        </div>
        <div className="border-r border-r-grey-ab-100 px-2">
          <NavLink
            to={"/sea-air-schedule/air-freight/schedule-details"}
            end
            className={({ isActive }) =>
              `${
                isActive &&
                location.pathname ===
                  "/sea-air-schedule/air-freight/schedule-details"
                  ? "text-secondary  border-b-2 border-secondary"
                  : " border-b-2  border-transparent"
              } flex px-2 py-1 gap-[10px] items-center`
            }
          >
            {" "}
            <p> Schedule Details </p>
            <LeaveCalenderIcon
              color={`${
                location.pathname ===
                "/sea-air-schedule/air-freight/schedule-details"
                  ? "#eeaa1f"
                  : "black"
              }`}
            />
          </NavLink>
        </div>

        <NavLink
          to={"/sea-air-schedule/air-freight/bulk-schedule-updates"}
          end
          className={({ isActive }) =>
            `${
              isActive &&
              location.pathname.startsWith(
                "/sea-air-schedule/air-freight/bulk-schedule-updates"
              )
                ? "text-secondary  border-b-2 border-secondary"
                : " border-b-2  border-transparent"
            } flex px-2 py-1 gap-[10px] items-center`
          }
        >
          <p> Bulk Schedule Updates </p>
          <JsonFileIcon
            color={`${
              location.pathname ===
              "/sea-air-schedule/air-freight/bulk-schedule-updates"
                ? "#eeaa1f"
                : "black"
            }`}
          />
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AirFreight;
