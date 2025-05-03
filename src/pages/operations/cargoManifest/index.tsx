import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const CargoManifest: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const isSeaFreight = pathname === "/cargo-manifest/sea-freight";
  const isAirFreight = pathname === "/cargo-manifest/air-freight";
  const showTabs = isAirFreight || isSeaFreight;

  const isSeaCmCreate = pathname.startsWith(
    "/cargo-manifest/sea-freight/create"
  );
  const isAirCmCreate = pathname.startsWith(
    "/cargo-manifest/air-freight/create"
  );
  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Operations", path: "/cargo-manifest/sea-freight" },
  ];
  let heading = "Cargo Manifest";

  if (isSeaCmCreate || isAirCmCreate) {
    if (isSeaCmCreate) {
      breadCrums.push(
        { label: "Cargo Manifest", path: "/cargo-manifest/sea-freight" },
        { label: "Cargo Manifest Create" }
      );
    }
    if (isAirCmCreate) {
      breadCrums.push(
        { label: "Cargo Manifest", path: "/cargo-manifest/air-freight" },
        { label: "Cargo Manifest Create" }
      );
    }
    heading = "Cargo Manifest Create";
  } else {
    breadCrums.push({ label: "Cargo Manifest" });
    heading = "Cargo Manifest";
  }
  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      {showTabs && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to={"/cargo-manifest/sea-freight"}
                end
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-primary-900 text-grey-aw-50" : ""
                  } px-4 py-2 rounded transition-all duration-500`
                }
              >
                Sea Freight
              </NavLink>
            </button>
            <button>
              <NavLink
                to={"/cargo-manifest/air-freight"}
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

export default CargoManifest;
