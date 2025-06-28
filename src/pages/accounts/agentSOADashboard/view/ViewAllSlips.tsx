import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const ViewAllSlips: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex flex-col bg-grey-aw-50 rounded-xs">
        <div className="flex px-4 pt-1 border-b border-b-grey-ab-100">
          <NavLink
            to={`/accounts/agent-soa-dashboard/view-slips/credit/${id}`}
            className={({ isActive }) =>
              `px-3 py-2 border-b-2 ${
                isActive
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-grey-ab-300"
              }  text-sm font-bold cursor-pointer transition-all duration-700`
            }
          >
            Credit Slips
          </NavLink>
          <NavLink
            to={`/accounts/agent-soa-dashboard/view-slips/debit/${id}`}
            className={({ isActive }) =>
              `px-3 py-2 border-b-2 ${
                isActive
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-grey-ab-300"
              }  text-sm font-bold cursor-pointer transition-all duration-700`
            }
          >
            Debit Slips
          </NavLink>
        </div>

        <Outlet />  
      </div>
    </>
  );
};

export default ViewAllSlips;
