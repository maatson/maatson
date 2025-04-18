import React from "react";
import PageHeader from "../../../components/header/PageHeader";
import { NavLink, Outlet, useLocation } from "react-router-dom";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const OtherVendors: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  // Check for path conditions
  const isShippingCreate = pathname.startsWith(
    "/other-vendors/vendor-for-shipping/create"
  );
  const isShippingView = pathname.startsWith(
    "/other-vendors/vendor-for-shipping/view"
  );
  const isOfficeCreate = pathname.startsWith(
    "/other-vendors/vendor-for-office/create"
  );
  const isOfficeView = pathname.startsWith(
    "/other-vendors/vendor-for-office/view"
  );

  // Breadcrumbs array
  const breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Pricing & Procurement", path: "/rate-filing" },
    { label: "Other Vendors", path: "/other-vendors" },
  ];

  // Set heading and push dynamic breadcrumb
  let heading = "Other Vendors";

  if (isShippingCreate || isOfficeCreate) {
    breadCrums.push({ label: "Create Vendor Bill" });
    heading = "Create Vendor Bill";
  } else if (isShippingView) {
    breadCrums.push({ label: "Vendor for Shipping" });
    heading = "Vendor Bill for Shipping";
  } else if (isOfficeView) {
    breadCrums.push({ label: "Vendor Bill for Office Essentials" });
    heading = "Vendor Bill for Office Essentials";
  }

  // Show tab navigation only on base pages
  const showTabs =
    !isShippingCreate && !isShippingView && !isOfficeCreate && !isOfficeView;

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <div className="bg-grey-aw-50 h-full rounded">
        {showTabs && (
          <div className="border-b border-grey-ab-100 flex p-2 text-sm font-semibold items-center overflow-auto custom-scrollbar-small">
            <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
              <NavLink
                to={"/other-vendors/vendor-for-shipping"}
                className={({ isActive }) =>
                  `${
                    isActive &&
                    pathname === "/other-vendors/vendor-for-shipping"
                      ? "text-secondary border-b-2 border-secondary"
                      : "border-b-2 border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p>Vendor for Shipping</p>
              </NavLink>
            </div>
            <div className="px-1 border-r border-r-grey-ab-100 text-nowrap">
              <NavLink
                to={"/other-vendors/vendor-for-office"}
                end
                className={({ isActive }) =>
                  `${
                    isActive && pathname === "/other-vendors/vendor-for-office"
                      ? "text-secondary border-b-2 border-secondary"
                      : "border-b-2 border-transparent"
                  } flex px-2 py-1 gap-[10px] items-center`
                }
              >
                <p>Vendor for Office Essential</p>
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
