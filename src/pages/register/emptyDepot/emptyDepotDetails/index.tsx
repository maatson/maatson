import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const EmptyDepotDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex items-center text-sm">
        <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
          <button>
            <NavLink
              to={`/registration-empty-depot/details/${id}`}
              end
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded transition-all duration-700`
              }
            >
              Profile
            </NavLink>
          </button>
          <button>
            <NavLink
              to={`/registration-empty-depot/details/${id}/container-movement`}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded transition-all duration-700`
              }
            >
              Container Movement
            </NavLink>
          </button>
          <button>
            <NavLink
              to={`/registration-empty-depot/details/${id}/line-activity`}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary-900 text-grey-aw-50" : ""
                } px-4 py-2 rounded transition-all duration-700`
              }
            >
              Line Activity
            </NavLink>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default EmptyDepotDetails;
