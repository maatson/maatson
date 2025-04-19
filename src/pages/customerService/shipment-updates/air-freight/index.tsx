import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ShipmentAirFreight: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const hiddenPaths = [
    "/shipment-updates/air-freight/departure-confirmation/view",
    "/shipment-updates/air-freight/departure-confirmation/edit",
    "/shipment-updates/air-freight/transit-view",
    "/shipment-updates/air-freight/delivery-order-collected/view",
    "/shipment-updates/air-freight/updates/update-details",
    "/shipment-updates/air-freight/airport-gatein-date/view",
    "/shipment-updates/air-freight/cargo-handover-update/view",
    "/shipment-updates/air-freight/create-split-booking",
  ];

  const shouldHideTabs = hiddenPaths.some((path) => pathname.startsWith(path));

  const tabs = [
    {
      label: "Updates",
      to: "/shipment-updates/air-freight",
    },
    {
      label: "Airport Gate In Date",
      to: "/shipment-updates/air-freight/airport-gatein-date",
    },
    {
      label: "Cargo Handover Update",
      to: "/shipment-updates/air-freight/cargo-handover-update",
    },
    {
      label: "Departure Confirmation",
      to: "/shipment-updates/air-freight/departure-confirmation",
    },
    {
      label: "Transit Info",
      to: "/shipment-updates/air-freight/transit-info",
    },
    {
      label: "Delivery Order Collected",
      to: "/shipment-updates/air-freight/delivery-order-collected",
    },
  ];

  return (
    <div className="bg-grey-aw-50 h-full rounded">
      {!shouldHideTabs && (
        <div className="border-b border-grey-ab-100 flex p-2 gap-2 text-sm font-semibold items-center">
          {tabs.map((tab, index) => (
            <div
              key={tab.label}
              className={
                index !== tabs.length - 1
                  ? "pe-2 border-r border-r-grey-ab-100"
                  : ""
              }
            >
              <NavLink
                to={tab.to}
                end
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-secondary border-b-2 border-secondary"
                      : "border-b-2 border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p>{tab.label}</p>
              </NavLink>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default ShipmentAirFreight;
