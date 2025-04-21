import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  JsonFileIcon,
  LeaveCalenderIcon,
  UpdateIcon,
} from "../../../../components/icons/Icons";

interface TabItem {
  label: string;
  to: string;
  exact: boolean;
  icon: React.FC<{ color?: string }>;
}

const AirFreight: React.FC = () => {
  const location = useLocation();

  const tabs: TabItem[] = [
    {
      label: "Update Schedules",
      to: "/sea-air-schedule/air-freight",
      exact: true,
      icon: UpdateIcon,
    },
    {
      label: "Schedule Details",
      to: "/sea-air-schedule/air-freight/schedule-details",
      exact: true,
      icon: LeaveCalenderIcon,
    },
    {
      label: "Bulk Schedule Updates",
      to: "/sea-air-schedule/air-freight/bulk-schedule-updates",
      exact: false,
      icon: JsonFileIcon,
    },
  ];

  return (
    <div className="bg-grey-aw-50 h-full rounded">
      <div className="border-b border-grey-ab-100 flex p-2 gap-2 text-sm font-semibold items-center overflow-auto custom-scrollbar-small">
        {tabs.map((tab, index) => {
          const isActive = tab.exact
            ? location.pathname === tab.to
            : location.pathname.startsWith(tab.to);

          const Icon = tab.icon;

          return (
            <div
              key={tab.label}
              className={`${
                index !== tabs.length - 1 ? "border-r border-r-grey-ab-100" : ""
              } px-2`}
            >
              <NavLink
                to={tab.to}
                end={tab.exact}
                className={`${
                  isActive
                    ? "text-secondary border-b-2 border-secondary"
                    : "border-b-2 border-transparent"
                } flex px-2 py-1 gap-[10px] items-center`}
              >
                <p>{tab.label}</p>
                <Icon color={isActive ? "#eeaa1f" : "black"} />
              </NavLink>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default AirFreight;
