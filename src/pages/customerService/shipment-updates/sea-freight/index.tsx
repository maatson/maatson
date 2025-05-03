import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ShipmentSeaFreight: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const hiddenPaths = [
    "/shipment-updates/sea-freight/onboard-confirmation/view",
    "/shipment-updates/sea-freight/onboard-confirmation/edit",
    "/shipment-updates/sea-freight/transit-view",
    "/shipment-updates/sea-freight/updates/update-details",
    "/shipment-updates/sea-freight/container-pickup/details",
    "/shipment-updates/sea-freight/delivery-order-collected/view",
    "/shipment-updates/sea-freight/terminal-gateIn/details",
    "/shipment-updates/sea-freight/create-split-booking",
    "/shipment-updates/sea-freight/empty-gateIn-confirmation/view",
  ];

  const shouldHideTabs = hiddenPaths.some((path) => pathname.startsWith(path));

  const tabs = [
    {
      label: "Updates",
      to: "/shipment-updates/sea-freight",
    },
    {
      label: "Container Pickup",
      to: "/shipment-updates/sea-freight/container-pickup",
    },
    {
      label: "Terminal Gate In",
      to: "/shipment-updates/sea-freight/terminal-gateIn",
    },
    {
      label: "Onboard Confirmation",
      to: "/shipment-updates/sea-freight/onboard-confirmation",
    },
    {
      label: "Transit Info",
      to: "/shipment-updates/sea-freight/transit-info",
    },
    {
      label: "Delivery Order Collected",
      to: "/shipment-updates/sea-freight/delivery-order-collected",
    },
    {
      label: "Empty Gate In Confirmation",
      to: "/shipment-updates/sea-freight/empty-gateIn-confirmation",
    },
  ];

  return (
    <div className="bg-grey-aw-50 h-full rounded">
      {!shouldHideTabs && (
        <div className="border-b border-grey-ab-100 flex p-2 text-sm font-semibold items-center overflow-auto custom-scrollbar-small">
          {tabs.map((tab, index) => (
            <div
              key={tab.label}
              className={`px-1 text-nowrap ${
                index !== tabs.length - 1 ? "border-r border-r-grey-ab-100" : ""
              }`}
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

export default ShipmentSeaFreight;
