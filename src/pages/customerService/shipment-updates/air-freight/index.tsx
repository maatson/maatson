import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ShipmentAirFreight: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-grey-aw-50 h-full rounded">
        {!location.pathname.startsWith(
          "/shipment-updates/air-freight/updates/update-details"
        ) && 
        !location.pathname.startsWith(
          "/shipment-updates/air-freight/airport-gatein-date/view"
        ) && (
          <div className="border-b border-grey-ab-100 flex p-2 gap-2 text-sm font-semibold items-center">
            <div className="pe-2 border-r border-r-grey-ab-100">
              <NavLink
                to={"/shipment-updates/air-freight"}
                className={({ isActive }) =>
                  `${
                    isActive &&
                    location.pathname === "/shipment-updates/air-freight"
                      ? "text-secondary  border-b-2 border-secondary"
                      : " border-b-2  border-transparent "
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p> Updates</p>
              </NavLink>
            </div>
            <div className="pe-2 border-r border-r-grey-ab-100">
              <NavLink
                to={"/shipment-updates/air-freight/airport-gatein-date"}
                end
                className={({ isActive }) =>
                  `${
                    isActive &&
                    location.pathname ===
                      "/shipment-updates/air-freight/airport-gatein-date"
                      ? "text-secondary  border-b-2 border-secondary"
                      : " border-b-2  border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p> Airport Gate In Date </p>
              </NavLink>
            </div>
            <div className="pe-2 border-r border-r-grey-ab-100">
              <NavLink
                to={"/shipment-updates/air-freight/cargo-handover-update"}
                end
                className={({ isActive }) =>
                  `${
                    isActive &&
                    location.pathname.startsWith(
                      "/shipment-updates/air-freight/cargo-handover-update"
                    )
                      ? "text-secondary  border-b-2 border-secondary"
                      : " border-b-2  border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p> Cargo Handover Update </p>
              </NavLink>
            </div>
            <div className="pe-2 border-r border-r-grey-ab-100">
              <NavLink
                to={"/shipment-updates/air-freight/departure-confirmation"}
                end
                className={({ isActive }) =>
                  `${
                    isActive &&
                    location.pathname.startsWith(
                      "/shipment-updates/air-freight/departure-confirmation"
                    )
                      ? "text-secondary  border-b-2 border-secondary"
                      : " border-b-2  border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p> Departure Confirmation </p>
              </NavLink>
            </div>
            <div className="pe-2 border-r border-r-grey-ab-100">
              <NavLink
                to={"/shipment-updates/air-freight/transit-info"}
                end
                className={({ isActive }) =>
                  `${
                    isActive &&
                    location.pathname.startsWith(
                      "/shipment-updates/air-freight/transit-info"
                    )
                      ? "text-secondary  border-b-2 border-secondary"
                      : " border-b-2  border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p> Transit Info </p>
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/shipment-updates/air-freight/delivery-order-collected"}
                end
                className={({ isActive }) =>
                  `${
                    isActive &&
                    location.pathname.startsWith(
                      "/shipment-updates/air-freight/delivery-order-collected"
                    )
                      ? "text-secondary  border-b-2 border-secondary"
                      : " border-b-2  border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p> Delivery Order Collected </p>
              </NavLink>
            </div>
          </div>
        )}

        <Outlet />
      </div>
    </>
  );
};

export default ShipmentAirFreight;
