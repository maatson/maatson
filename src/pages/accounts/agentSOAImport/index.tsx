import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const AgentsSOAImport: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  const isView = pathname.startsWith("/accounts/agent-soa-import/view");
  const isCreditCreate = pathname.startsWith(
    "/accounts/agent-soa-import/credit-create"
  );
  const isDebitCreate = pathname.startsWith(
    "/accounts/agent-soa-import/debit-create"
  );
  const isCreditEdit = pathname.startsWith(
    "/accounts/agent-soa-import/credit-edit"
  );
  const isDebitEdit = pathname.startsWith(
    "/accounts/agent-soa-import/debit-edit"
  );
  const isCreditDetails = pathname.startsWith(
    "/accounts/agent-soa-import/credit-details"
  );
  const isDebitDetails = pathname.startsWith(
    "/accounts/agent-soa-import/debit-details"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/agent-soa-import" },
  ];
  let heading = "Agent SOA (Import)";

  if (isView) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: "/accounts/agent-soa-import",
      },
      { label: "Agent SOA (Import) Details" }
    );
    heading = "Agent SOA (Import) Details";
  } else if (isCreditCreate) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: `/accounts/agent-soa-import/view/${id}`,
      },
      { label: "Credit Note Invoice Create" }
    );
    heading = "Credit Note Invoice Create";
  } else if (isDebitCreate) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: `/accounts/agent-soa-import/view/${id}`,
      },
      { label: "Debit Note Invoice Create" }
    );
    heading = "Debit Note Invoice Create";
  } else if (isCreditEdit) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: `/accounts/agent-soa-import/view/${id}`,
      },
      { label: "Credit Note Invoice Edit" }
    );
    heading = "Credit Note Invoice Edit";
  } else if (isDebitEdit) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: `/accounts/agent-soa-import/view/${id}`,
      },
      { label: "Debit Note Invoice Edit" }
    );
    heading = "Debit Note Invoice Edit";
  } else if (isCreditDetails) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: `/accounts/agent-soa-import/view/${id}`,
      },
      { label: "Credit Note Invoice Details" }
    );
    heading = "Credit Note Invoice Details";
  } else if (isDebitDetails) {
    breadCrums.push(
      {
        label: "Agent SOA (Import)",
        path: `/accounts/agent-soa-import/view/${id}`,
      },
      { label: "Debit Note Invoice Details" }
    );
    heading = "Debit Note Invoice Details";
  } else {
    breadCrums.push({ label: "Agent SOA (Import)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default AgentsSOAImport;
