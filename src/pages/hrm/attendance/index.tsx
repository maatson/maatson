import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { NavLink, Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const Attendance: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "HRM", path: "/hrm/employees" },
  ];
  let heading = "Attendance";

  const isAttendanceDetail = pathname.includes("/hrm/attendance/detail");
  const isholidays = pathname.includes("/hrm/attendance/holidays");
  const isAttendance = pathname === "/hrm/attendance";

  const showTabs = isAttendance || isholidays;

  if (isAttendanceDetail) {
    heading = "Attendance Detail";
    breadCrums.push(
      { label: "Attendance", path: "/hrm/attendance" },
      { label: "Attendance Detail" }
    );
  } else if (isholidays) {
    heading = "Holidays";
    breadCrums.push({ label: "Holidays" });
  } else {
    breadCrums.push({ label: "Attendance" });
    heading = "Attendance";
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      {showTabs && (
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
