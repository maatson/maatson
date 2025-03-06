import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Attendance: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "HRM",
          location.pathname === "/hrm/attendance/detail"
            ? ["Attendance", "Attendance Detail"]
            : location.pathname === "/hrm/attendance/holidays"
            ? "Holidays"
            : "Attendance",
        ].flat()}
        heading={
          location.pathname === "/hrm/attendance/detail"
            ? "Attendance Detail"
            : location.pathname === "/hrm/attendance/holidays"
            ? "Holidays"
            : "Attendance"
        }
      />
      {(location.pathname === "/hrm/attendance" ||
        location.pathname === "/hrm/attendance/holidays") && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to={"/hrm/attendance"}
                end
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-primary-900 text-grey-aw-50" : ""
                  } px-4 py-2 rounded transition-all duration-500`
                }
              >
                Attendance
              </NavLink>
            </button>
            <button>
              <NavLink
                to={"/hrm/attendance/holidays"}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-primary-900 text-grey-aw-50" : ""
                  } px-4 py-2 rounded transition-all duration-500`
                }
              >
                Holidays
              </NavLink>
            </button>
          </div>
        </div>
      )}
      <div
        className={`${
          location.pathname === "/hrm/attendance/detail" ? "" : "bg-white"
        }  min-h-screen rounded`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Attendance;
