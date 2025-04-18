import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const OtherVendors: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <PageHeader
        breadCrums={[
          "Home",
          "Pricing & Procurement",
          location.pathname.startsWith(
            "/other-vendors/vendor-for-shipping/create"
          ) ||
          location.pathname.startsWith(
            "/other-vendors/vendor-for-office/create"
          )
            ? ["Other Vendors", "Create Vendor Bill"]
            : location.pathname.startsWith(
                "/other-vendors/vendor-for-shipping/view"
              )
            ? ["Other Vendors", "Vendor for Shipping"]
            : location.pathname.startsWith(
                "/other-vendors/vendor-for-office/view"
              )
            ? ["Other Vendors", "Vendor Bill for Office Essentials"]
            : ["Other Vendors"],
        ].flat()}
        heading={
          location.pathname.startsWith(
            "/other-vendors/vendor-for-shipping/create"
          ) ||
          location.pathname.startsWith(
            "/other-vendors/vendor-for-office/create"
          )
            ? "Create Vendor Bill"
            : location.pathname.startsWith(
                "/other-vendors/vendor-for-shipping/view"
              )
            ? "Vendor Bill for Shipping"
            : location.pathname.startsWith(
                "/other-vendors/vendor-for-office/view"
              )
            ? "Vendor Bill for Office Essentials"
            : "Other Vendors"
        }
      />
      <div className="bg-grey-aw-50 h-full rounded">
        {!location.pathname.startsWith(
          "/other-vendors/vendor-for-shipping/create"
        ) &&
          !location.pathname.startsWith(
            "/other-vendors/vendor-for-shipping/view"
          ) &&
          !location.pathname.startsWith(
            "/other-vendors/vendor-for-office/create"
          ) &&
          !location.pathname.startsWith(
            "/other-vendors/vendor-for-office/view"
          ) && (
            <div className="border-b border-grey-ab-100 flex p-2  text-sm font-semibold items-center overflow-auto custom-scrollbar-small ">
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/other-vendors/vendor-for-shipping"}
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname === "/other-vendors/vendor-for-shipping"
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Vendor for Shipping</p>
                </NavLink>
              </div>
              <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
                <NavLink
                  to={"/other-vendors/vendor-for-office"}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      location.pathname === "/other-vendors/vendor-for-office"
                        ? "text-secondary  border-b-2 border-secondary"
                        : " border-b-2  border-transparent"
                    } flex px-2 py-1 gap-[10px] items-center`
                  }
                >
                  <p> Vendor for Office Essential </p>
                </NavLink>
              </div>
            </div>
          )}
        <Outlet />
      </div>
    </>
  );
};

export default OtherVendors;
