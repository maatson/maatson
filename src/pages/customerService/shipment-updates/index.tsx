import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}
const ShippingUpdates: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Customer Service", path: "/shipment-updates/sea-freight" },
  ];
  let heading = "Shipment Updates";

  // sea
  const isSeaFreightUpdatesUpdateDetails = pathname.startsWith(
    "/shipment-updates/sea-freight/updates/update-details"
  );
  const isSeaFreightContainerPickupDetails = pathname.startsWith(
    "/shipment-updates/sea-freight/container-pickup/details"
  );
  const isSeaFreightTerminalGateInDetails = pathname.startsWith(
    "/shipment-updates/sea-freight/terminal-gateIn/details"
  );
  const isSeaFreightCreateSplitBooking = pathname.startsWith(
    "/shipment-updates/sea-freight/create-split-booking"
  );
  const isSeaFreightOnboardEdit = pathname.startsWith(
    "/shipment-updates/sea-freight/onboard-confirmation/edit"
  );
  const isSeaFreightOnboardView = pathname.startsWith(
    "/shipment-updates/sea-freight/onboard-confirmation/view"
  );
  const isSeaFreightTransitView = pathname.startsWith(
    "/shipment-updates/sea-freight/transit-view"
  );
  const isSeaFreightDOCView = pathname.startsWith(
    "/shipment-updates/sea-freight/delivery-order-collected/view"
  );
  const isSeaFreightEmptyGateInView = pathname.startsWith(
    "/shipment-updates/sea-freight/empty-gateIn-confirmation/view"
  );
  // air
  const isAirFreightUpdatesUpdateDetails = pathname.startsWith(
    "/shipment-updates/air-freight/updates/update-details"
  );
  const isAirFreightAirPortGateInView = pathname.startsWith(
    "/shipment-updates/air-freight/airport-gatein-date/view"
  );
  const isAirFreightCargoHandOverUpdateView = pathname.startsWith(
    "/shipment-updates/air-freight/cargo-handover-update/view"
  );
  const isAirFreightCreateSplitBooking = pathname.startsWith(
    "/shipment-updates/air-freight/create-split-booking"
  );
  const isAirFreightDepartureConfirmEdit = pathname.startsWith(
    "/shipment-updates/air-freight/departure-confirmation/edit"
  );
  const isAirFreightDepartureConfirmView = pathname.startsWith(
    "/shipment-updates/air-freight/departure-confirmation/view"
  );
  const isAirFreightTransitView = pathname.startsWith(
    "/shipment-updates/air-freight/transit-view"
  );
  const isAirFreightDOCView = pathname.startsWith(
    "/shipment-updates/air-freight/delivery-order-collected/view"
  );

  const showTabs =
    !isSeaFreightOnboardView &&
    !isSeaFreightOnboardEdit &&
    !isAirFreightDepartureConfirmView &&
    !isAirFreightDepartureConfirmEdit &&
    !isSeaFreightTransitView &&
    !isAirFreightTransitView &&
    !isSeaFreightUpdatesUpdateDetails &&
    !isSeaFreightContainerPickupDetails &&
    !isSeaFreightDOCView &&
    !isAirFreightDOCView &&
    !isSeaFreightTerminalGateInDetails &&
    !isSeaFreightCreateSplitBooking &&
    !isAirFreightCreateSplitBooking &&
    !isSeaFreightEmptyGateInView &&
    !isAirFreightUpdatesUpdateDetails &&
    !isAirFreightAirPortGateInView &&
    !isAirFreightCargoHandOverUpdateView;

  if (isSeaFreightUpdatesUpdateDetails || isAirFreightUpdatesUpdateDetails) {
    if (isAirFreightUpdatesUpdateDetails) {
      breadCrums.push(
        { label: "Shipment Updates", path: "/shipment-updates/air-freight" },
        { label: "Update Details" }
      );
    } else {
      breadCrums.push(
        { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
        { label: "Update Details" }
      );
    }
    heading = "Updates Details";
  } else if (isSeaFreightContainerPickupDetails) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
      { label: "Container Pickup Details" }
    );
    heading = "Container Pickup Details";
  } else if (isSeaFreightTerminalGateInDetails) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
      { label: "Terminal Gate In Details" }
    );
    heading = "Terminal Gate In Details";
  } else if (isSeaFreightCreateSplitBooking || isAirFreightCreateSplitBooking) {
    if (isAirFreightCreateSplitBooking) {
      breadCrums.push(
        { label: "Shipment Updates", path: "/shipment-updates/air-freight" },
        { label: "Split Booking" }
      );
    } else {
      breadCrums.push(
        { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
        { label: "Split Booking" }
      );
    }
    heading = "Create Split Booking";
  } else if (isSeaFreightOnboardView) {
    breadCrums.push(
      { label: "..." },
      {
        label: "OnBoard Confirmation",
        path: "/shipment-updates/sea-freight/onboard-confirmation",
      },
      { label: "View" }
    );
    heading = "OnBoard Confirmation View";
  } else if (isSeaFreightOnboardEdit) {
    breadCrums.push(
      { label: "..." },
      {
        label: "OnBoard Confirmation",
        path: "/shipment-updates/sea-freight/onboard-confirmation",
      },
      { label: "Edit" }
    );
    heading = "OnBoard Confirmation Edit";
  } else if (isAirFreightDepartureConfirmView) {
    breadCrums.push(
      { label: "..." },
      {
        label: "Departure Confirmation",
        path: "/shipment-updates/air-freight/departure-confirmation",
      },
      { label: "View" }
    );
    heading = "Departure Confirmation View";
  } else if (isAirFreightDepartureConfirmEdit) {
    breadCrums.push(
      { label: "..." },
      {
        label: "Departure Confirmation",
        path: "/shipment-updates/air-freight/departure-confirmation",
      },
      { label: "Edit" }
    );
    heading = "Departure Confirmation Edit";
  } else if (isSeaFreightTransitView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
      { label: "Transit Info" }
    );
    heading = "Transit Info";
  } else if (isAirFreightTransitView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/air-freight" },
      { label: "Transit Info" }
    );
    heading = "Transit Info";
  } else if (isSeaFreightDOCView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
      { label: "Delivery Order Collected (DOC)" }
    );
    heading = "Delivery Order Collected (DOC) Details";
  } else if (isAirFreightDOCView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/air-freight" },
      { label: "Delivery Order Collected (DOC)" }
    );
    heading = "Delivery Order Collected (DOC) Details";
  } else if (isSeaFreightEmptyGateInView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/sea-freight" },
      { label: "Empty Gate In Confirmation" }
    );
    heading = "Empty Gate In Confirmation";
  } else if (isAirFreightAirPortGateInView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/air-freight" },
      { label: "Airport Gate-in Date Information" }
    );
    heading = "Airport Gate-in Date Information";
  } else if (isAirFreightCargoHandOverUpdateView) {
    breadCrums.push(
      { label: "Shipment Updates", path: "/shipment-updates/air-freight" },
      { label: "Cargo Handover Update" }
    );
    heading = "Cargo Handover Update";
  } else {
    breadCrums.push({ label: "Shipment Updates" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      {showTabs && (
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
