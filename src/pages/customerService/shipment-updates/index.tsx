import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

const ShippingUpdates: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Customer Service",
          location.pathname === "/shipment-updates/"
            ? ["Shipment Updates"]
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/updates/update-details"
              )
            ? ["Shipment Updates", "Update Details"]
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/container-pickup/details"
              )
            ? ["Shipment Updates", "Container Pickup Details"]
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/onboard-confirmation/view"
              )
            ? ["...", "OnBoard Confirmation", "View"]
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/onboard-confirmation/edit"
              )
            ? ["...", "OnBoard Confirmation", "Edit"]
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/transit-view"
              )
            ? ["Shipment Updates", "Transit Info"]
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/delivery-order-collected/view"
              )
            ? ["Shipment Updates", "Delivery Order Collected (DOC)"]
            : "Shipment Updates",
        ].flat()}
        heading={
          location.pathname === "/shipment-updates/"
            ? "Shipment Updates"
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/updates/update-details"
              )
            ? "Updates Details"
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/container-pickup/details"
              )
            ? "Container Pickup Details"
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/onboard-confirmation/view"
              )
            ? "OnBoard Confirmation View"
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/onboard-confirmation/edit"
              )
            ? "OnBoard Confirmation Edit"
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/transit-view"
              )
            ? "Transit Info"
            : location.pathname.startsWith(
                "/shipment-updates/sea-freight/delivery-order-collected/view"
              )
            ? "Delivery Order Collected (DOC) Details"
            : "Shipment Updates"
        }
      />
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
          "/shipment-updates/sea-freight/delivery-order-collected/view"
        ) && (
          <div className="flex items-center text-sm">
            <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
              <button>
                <NavLink
                  to={"/shipment-updates/sea-freight"}
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      !location.pathname.startsWith(
                        "/shipment-updates/air-freight"
                      )
                        ? "bg-primary-900 text-grey-aw-50"
                        : ""
                    } px-4 py-2 rounded transition-all duration-500`
                  }
                >
                  Sea Freight
                </NavLink>
              </button>
              <button>
                <NavLink
                  to={"/shipment-updates/air-freight"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-primary-900 text-grey-aw-50" : ""
                    } px-4 py-2 rounded transition-all duration-500`
                  }
                >
                  Air Freight
                </NavLink>
              </button>
            </div>
          </div>
        )}
      <Outlet />
    </>
  );
};

export default ShippingUpdates;
