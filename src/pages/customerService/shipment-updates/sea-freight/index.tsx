import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ShipmentSeaFreight: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-grey-aw-50 h-full rounded">
        {!location.pathname.startsWith(
          "/shipment-updates/sea-freight/onboard-confirmation/view"
        ) &&
          !location.pathname.startsWith(
            "/shipment-updates/sea-freight/onboard-confirmation/edit"
          ) &&
          !location.pathname.startsWith(
            "/shipment-updates/sea-freight/transit-view"
          ) &&
          !location.pathname.startsWith(
            "/shipment-updates/sea-freight/updates/update-details"
          ) &&
          !location.pathname.startsWith(
            "/shipment-updates/sea-freight/container-pickup/details"
          ) && 
          !location.pathname.startsWith(
            "/shipment-updates/sea-freight/terminal-gateIn/details"
          ) && (
            <div className="border-b border-grey-ab-100 flex p-2  text-sm font-semibold items-center overflow-auto custom-scrollbar-small ">
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/shipment-updates/sea-freight"}
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname === "/shipment-updates/sea-freight"
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Updates</p>
                </NavLink>
              </div>
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/shipment-updates/sea-freight/container-pickup"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname ===
                        "/shipment-updates/sea-freight/container-pickup"
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Container Pickup </p>
                </NavLink>
              </div>
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/shipment-updates/sea-freight/terminal-gateIn"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname.startsWith(
                        "/shipment-updates/sea-freight/terminal-gateIn"
                      )
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Terminal Gate In </p>
                </NavLink>
              </div>
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/shipment-updates/sea-freight/onboard-confirmation"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname.startsWith(
                        "/shipment-updates/sea-freight/onboard-confirmation"
                      )
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Onboard Confirmation </p>
                </NavLink>
              </div>
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/shipment-updates/sea-freight/transit-info"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname.startsWith(
                        "/shipment-updates/sea-freight/transit-info"
                      )
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Transit Info </p>
                </NavLink>
              </div>
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/shipment-updates/sea-freight/delivery-order-collected"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname.startsWith(
                        "/shipment-updates/sea-freight/delivery-order-collected"
                      )
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Delivery Order Collected </p>
                </NavLink>
              </div>
              <div className="text-nowrap px-1">
                <NavLink
                  to={"/shipment-updates/sea-freight/empty-return-confirmation"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname.startsWith(
                        "/shipment-updates/sea-freight/empty-return-confirmation"
                      )
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Empty Return Confirmation </p>
                </NavLink>
              </div>
            </div>
          )}
        <Outlet />
      </div>
    </>
  );
};

export default ShipmentSeaFreight;
