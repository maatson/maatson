import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

interface LayoutProps {
  label: string;
  value: string | React.ReactNode;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

const ViewInvoice: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-grey-aw-50 rounded-sm px-6 py-3 shadow-lg flex justify-between">
          <Layout label={"Booking ID"} value={"0000001"} />
          <Layout label={"Bill of Lading"} value={"MSCU1234569-A"} />
          <Layout
            label={"Company Name"}
            value={"HarborLine Exports Pvt. Ltd."}
          />
          <Layout label={"Port of Loading"} value={"Los Angeles, USA"} />
          <Layout
            label={"Port of Discharge"}
            value={"Rotterdam, Netherlands"}
          />
          <Layout label={"Total Amount"} value={"20,00,000"} />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center text-sm">
            <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
              <button>
                <NavLink
                  to={`/accounts/invoice-import/view-invoice/${id}/proforma`}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-primary-900 text-grey-aw-50" : ""
                    } px-4 py-2 rounded transition-all duration-500`
                  }
                >
                  Proforma
                </NavLink>
              </button>
              <button>
                <NavLink
                  to={`/accounts/invoice-import/view-invoice/${id}/collection`}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-primary-900 text-grey-aw-50" : ""
                    } px-4 py-2 rounded transition-all duration-500`
                  }
                >
                  Collection
                </NavLink>
              </button>
              <button>
                <NavLink
                  to={`/accounts/invoice-import/view-invoice/${id}/taxInvoice`}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-primary-900 text-grey-aw-50" : ""
                    } px-4 py-2 rounded transition-all duration-500`
                  }
                >
                  Tax Invoice
                </NavLink>
              </button>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ViewInvoice;

export const Layout: React.FC<LayoutProps> = ({
  label,
  value,
  parentStyle,
  valueStyle,
  labelStyle,
}) => {
  return (
    <div
      className={`flex text-sm text-grey-ab-900 py-1 flex-col gap-1 ${parentStyle}`}
    >
      <p className={`font-bold ${labelStyle}`}>{label}</p>
      <p className={` ${valueStyle}`}>{value}</p>
    </div>
  );
};
