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
          location.pathname !== "/hrm/attendance" ? "Holidays" : "Attendance",
        ]}
        heading={
          location.pathname !== "/hrm/attendance" ? "Holidays" : "Attendance"
        }
      />
      <div className="flex items-center text-sm">
        <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold">
          <button>
            <NavLink
              to={"/hrm/attendance"}
              end
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded`
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
                } px-4 py-2 rounded`
              }
            >
              Holidays
            </NavLink>
          </button>
        </div>
      </div>
      <div className="bg-white  min-h-screen rounded">
        <Outlet />
      </div>
    </>
  );
};

export default Attendance;
