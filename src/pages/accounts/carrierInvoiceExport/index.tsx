import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const CarrierInvoiceExport: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  const isView = pathname.startsWith("/accounts/carrier-invoice-export/view");
  const isCreate = pathname.startsWith(
    "/accounts/carrier-invoice-export/create"
  );
  const isEdit = pathname.startsWith("/accounts/carrier-invoice-export/edit");
  const isDetails = pathname.startsWith(
    "/accounts/carrier-invoice-export/details"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/carrier-invoice-export" },
  ];
  let heading = "Carrier Invoice (Export)";

  if (isView) {
    breadCrums.push(
      {
        label: "Carrier Invoice (Export)",
        path: "/accounts/carrier-invoice-export",
      },
      { label: "Carrier Invoice (Export) Details" }
    );
    heading = "Carrier Invoice (Export) Details";
  } else if (isCreate) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/carrier-invoice-export/view/${id}`,
      },
      { label: "Create Carrier Invoice" }
    );
    heading = "Create Carrier Invoice";
  } else if (isEdit) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/carrier-invoice-export/view/${id}`,
      },
      { label: "Edit Carrier Invoice" }
    );
    heading = "Edit Carrier Invoice";
  } else if (isDetails) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/carrier-invoice-export/view/${id}`,
      },
      { label: "Carrier Invoice Details" }
    );
    heading = "Carrier Invoice Details";
  } else {
    breadCrums.push({ label: "Carrier Invoice (Export)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default CarrierInvoiceExport;
