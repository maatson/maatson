import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}
const CargoArrivalNotice: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    {
      label: "Customer Service",
      path: `${
        pathname.startsWith("/cargo-arrival-notice/sea-freight")
          ? "/cargo-arrival-notice/sea-freight"
          : "/cargo-arrival-notice/air-freight"
      }`,
    },
  ];
  let heading = "Cargo Arrival Notice";

  // sea
  const isSeaFreightView = pathname.startsWith(
    "/cargo-arrival-notice/sea-freight/view"
  );
  const isSeaFreightCreate = pathname.startsWith(
    "/cargo-arrival-notice/sea-freight/create"
  );
  const isSeaFreightEdit = pathname.startsWith(
    "/cargo-arrival-notice/sea-freight/edit"
  );
  const isSeaFreightDetails = pathname.startsWith(
    "/cargo-arrival-notice/sea-freight/details"
  );

  // air
  const isAirFreightView = pathname.startsWith(
    "/cargo-arrival-notice/air-freight/view"
  );
  const isAirFreightCreate = pathname.startsWith(
    "/cargo-arrival-notice/air-freight/create"
  );
  const isAirFreightEdit = pathname.startsWith(
    "/cargo-arrival-notice/air-freight/edit"
  );
  const isAirFreightDetails = pathname.startsWith(
    "/cargo-arrival-notice/air-freight/details"
  );

  const showTabs =
    !isSeaFreightView &&
    !isSeaFreightCreate &&
    !isSeaFreightEdit &&
    !isSeaFreightDetails &&
    !isAirFreightView &&
    !isAirFreightCreate &&
    !isAirFreightEdit &&
    !isAirFreightDetails;
  if (isSeaFreightView || isAirFreightView) {
    if (isSeaFreightView) {
      breadCrums.push(
        {
          label: "Cargo Arrival Notice",
          path: "/cargo-arrival-notice/sea-freight",
        },
        { label: `CAN for (${id})` }
      );
    } else {
      breadCrums.push(
        {
          label: "Cargo Arrival Notice",
          path: "/cargo-arrival-notice/air-freight",
        },
        { label: `CAN for (${id})` }
      );
    }
    heading = `CAN for (${id})`;
  } else if (isSeaFreightCreate || isAirFreightCreate) {
    if (isSeaFreightCreate) {
      breadCrums.push(
        { label: "..." },
        {
          label: `CAN for (${id})`,
          path: `/cargo-arrival-notice/sea-freight/view/${id}`,
        },
        { label: "CAN Create" }
      );
    } else {
      breadCrums.push(
        { label: "..." },
        {
          label: `CAN for (${id})`,
          path: `/cargo-arrival-notice/air-freight/view/${id}`,
        },
        { label: "CAN Create" }
      );
    }
    heading = "CAN Create";
  } else if (isSeaFreightEdit || isAirFreightEdit) {
    if (isSeaFreightEdit) {
      breadCrums.push(
        { label: "..." },
        {
          label: `CAN for (${id})`,
          path: `/cargo-arrival-notice/sea-freight/view/${id}`,
        },
        { label: "CAN Edit" }
      );
    } else {
      breadCrums.push(
        { label: "..." },
        {
          label: `CAN for (${id})`,
          path: `/cargo-arrival-notice/air-freight/view/${id}`,
        },
        { label: "CAN Edit" }
      );
    }
    heading = "CAN Edit";
  } else if (isSeaFreightDetails || isAirFreightDetails) {
    if (isSeaFreightDetails) {
      breadCrums.push(
        { label: "..." },
        {
          label: `CAN for (${id})`,
          path: `/cargo-arrival-notice/sea-freight/view/${id}`,
        },
        { label: "CAN Details" }
      );
    } else {
      breadCrums.push(
        { label: "..." },
        {
          label: `CAN for (${id})`,
          path: `/cargo-arrival-notice/air-freight/view/${id}`,
        },
        { label: "CAN Details" }
      );
    }
    heading = "CAN Details";
  } else {
    breadCrums.push({ label: "Cargo Arrival Notice" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      {showTabs && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to={"/cargo-arrival-notice/sea-freight"}
                className={({ isActive }) =>
                  `${
                    isActive &&
                    !location.pathname.startsWith(
                      "/cargo-arrival-notice/air-freight"
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
                to={"/cargo-arrival-notice/air-freight"}
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

export default CargoArrivalNotice;
