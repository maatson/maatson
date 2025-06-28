import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const AgentsSOADashboard: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  const isViewCredit = pathname.startsWith(
    "/accounts/agent-soa-dashboard/view-credit"
  );
  const isViewDebit = pathname.startsWith(
    "/accounts/agent-soa-dashboard/view-debit"
  );
  const isViewAll = pathname.startsWith(
    "/accounts/agent-soa-dashboard/view-slips"
  );

  const isCreditDetails = pathname.startsWith(
    "/accounts/agent-soa-dashboard/credit-details"
  );
  const isCreditDetailsEdit = pathname.startsWith(
    "/accounts/agent-soa-dashboard/credit-detail-edit"
  );
  const isDebitDetails = pathname.startsWith(
    "/accounts/agent-soa-dashboard/debit-details"
  );
  const isDebitDetailsEdit = pathname.startsWith(
    "/accounts/agent-soa-dashboard/debit-detail-edit"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/agent-soa-dashboard" },
  ];
  let heading = "Agent SOA Dashboard";

  if (isViewCredit) {
    breadCrums.push(
      {
        label: "Agent SOA Dashboard",
        path: "/accounts/agent-soa-dashboard",
      },
      { label: "Agent SOA Details" }
    );
    heading = "Agent SOA Details";
  } else if (isViewDebit) {
    breadCrums.push(
      {
        label: "Agent SOA Dashboard",
        path: "/accounts/agent-soa-dashboard",
      },
      { label: "Agent SOA Details" }
    );
    heading = "Agent SOA Details";
  } else if (isViewAll) {
    breadCrums.push(
      {
        label: "Agent SOA Dashboard",
        path: "/accounts/agent-soa-dashboard",
      },
      { label: "Agent SOA Details" }
    );
    heading = "Agent SOA Details";
  } else if (isCreditDetails) {
    breadCrums.push(
      {
        label: "Agent SOA Details",
        path: `/accounts/agent-soa-dashboard/view-credit/${id}`,
      },
      { label: "Credit Note Invoice Details" }
    );
    heading = "Credit Note Invoice Details";
  } else if (isCreditDetailsEdit) {
    breadCrums.push(
      {
        label: "Agent SOA Details",
        path: `/accounts/agent-soa-dashboard/view-credit/${id}`,
      },
      { label: "Edit Credit Note Invoice" }
    );
    heading = "Edit Credit Note Invoice";
  } else if (isDebitDetails) {
    breadCrums.push(
      {
        label: "Agent SOA Details",
        path: `/accounts/agent-soa-dashboard/view-debit/${id}`,
      },
      { label: "Debit Note Invoice Details" }
    );
    heading = "Debit Note Invoice Details";
  } else if (isDebitDetailsEdit) {
    breadCrums.push(
      {
        label: "Agent SOA Details",
        path: `/accounts/agent-soa-dashboard/view-debit/${id}`,
      },
      { label: "Edit Debit Note Invoice" }
    );
    heading = "Edit Debit Note Invoice";
  } else {
    breadCrums.push({ label: "Agent SOA Dashboard" });
  }

  const showTabs = isViewCredit || isViewDebit || isViewAll;

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />

      {showTabs && (
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2 bg-grey-50 px-2 py-3 rounded-sm font-semibold ">
            <button>
              <NavLink
                to={`/accounts/agent-soa-dashboard/view-credit/${id}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-primary-900 text-grey-aw-50" : ""
                  } px-4 py-2 rounded transition-all duration-500`
                }
              >
                Agent Credit
              </NavLink>
            </button>
            <button>
              <NavLink
                to={`/accounts/agent-soa-dashboard/view-debit/${id}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-primary-900 text-grey-aw-50" : ""
                  } px-4 py-2 rounded transition-all duration-500`
                }
              >
                Agent Debit
              </NavLink>
            </button>
            <button>
              <NavLink
                to={`/accounts/agent-soa-dashboard/view-slips/credit/${id}`}
                className={({ isActive }) =>
                  `${
                    isActive ||
                    pathname.startsWith(
                      `/accounts/agent-soa-dashboard/view-slips/debit/${id}`
                    )
                      ? "bg-primary-900 text-grey-aw-50"
                      : ""
                  } px-4 py-2 rounded transition-all duration-500`
                }
              >
                Credit/Debit Slips
              </NavLink>
            </button>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default AgentsSOADashboard;
