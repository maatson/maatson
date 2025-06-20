import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const AgentsSOAExport: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  const isView = pathname.startsWith("/accounts/agent-soa-export/view");
  const isCreditCreate = pathname.startsWith(
    "/accounts/agent-soa-export/credit-create"
  );
  const isDebitCreate = pathname.startsWith(
    "/accounts/agent-soa-export/debit-create"
  );
  const isCreditEdit = pathname.startsWith(
    "/accounts/agent-soa-export/credit-edit"
  );
  const isDebitEdit = pathname.startsWith(
    "/accounts/agent-soa-export/debit-edit"
  );
  const isCreditDetails = pathname.startsWith(
    "/accounts/agent-soa-export/credit-details"
  );
  const isDebitDetails = pathname.startsWith(
    "/accounts/agent-soa-export/debit-details"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/agent-soa-export" },
  ];
  let heading = "Agent SOA (Export)";

  if (isView) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: "/accounts/agent-soa-export",
      },
      { label: "Agent SOA (Export) Details" }
    );
    heading = "Agent SOA (Export) Details";
  } else if (isCreditCreate) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: `/accounts/agent-soa-export/view/${id}`,
      },
      { label: "Credit Note Invoice Create" }
    );
    heading = "Credit Note Invoice Create";
  } else if (isDebitCreate) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: `/accounts/agent-soa-export/view/${id}`,
      },
      { label: "Debit Note Invoice Create" }
    );
    heading = "Debit Note Invoice Create";
  } else if (isCreditEdit) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: `/accounts/agent-soa-export/view/${id}`,
      },
      { label: "Credit Note Invoice Edit" }
    );
    heading = "Credit Note Invoice Edit";
  } else if (isDebitEdit) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: `/accounts/agent-soa-export/view/${id}`,
      },
      { label: "Debit Note Invoice Edit" }
    );
    heading = "Debit Note Invoice Edit";
  } else if (isCreditDetails) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: `/accounts/agent-soa-export/view/${id}`,
      },
      { label: "Credit Note Invoice Details" }
    );
    heading = "Credit Note Invoice Details";
  } else if (isDebitDetails) {
    breadCrums.push(
      {
        label: "Agent SOA (Export)",
        path: `/accounts/agent-soa-export/view/${id}`,
      },
      { label: "Debit Note Invoice Details" }
    );
    heading = "Debit Note Invoice Details";
  } else {
    breadCrums.push({ label: "Agent SOA (Export)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default AgentsSOAExport;
