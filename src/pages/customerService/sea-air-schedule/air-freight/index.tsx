import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SendIcon } from "../../../../components/icons/Icons";

const AirFreight: React.FC = () => {
  const location = useLocation();
  return (
    <div className="bg-grey-aw-50 h-full rounded">
      <div className="border-b border-grey-ab-100 flex p-2 gap-4 text-sm font-semibold items-center">
        <NavLink
          to={"/sea-air-schedule/air-freight"}
          className={({ isActive }) =>
            `${
              isActive && location.pathname === "/sea-air-schedule/air-freight"
                ? "text-secondary  border-b-2 border-secondary"
                : " border-b-2  border-transparent"
            } flex px-2 py-1 gap-[10px] items-center`
          }
        >
          <p> Update Schedules</p>
          <SendIcon
            color={`${
              location.pathname === "/sea-air-schedule/air-freight"
                ? "#eeaa1f"
                : "black"
            }`}
          />
        </NavLink>
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
          <SendIcon
            color={`${
              location.pathname ===
              "/sea-air-schedule/air-freight/schedule-details"
                ? "#eeaa1f"
                : "black"
            }`}
          />
        </NavLink>
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
          <SendIcon
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
