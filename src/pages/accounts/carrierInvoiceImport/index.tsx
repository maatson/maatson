import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const CarrierInvoiceImport: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  const isView = pathname.startsWith("/accounts/carrier-invoice-import/view");
  const isCreate = pathname.startsWith(
    "/accounts/carrier-invoice-import/create"
  );
  const isEdit = pathname.startsWith("/accounts/carrier-invoice-import/edit");
  const isDetails = pathname.startsWith(
    "/accounts/carrier-invoice-import/details"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/carrier-invoice-import" },
  ];
  let heading = "Carrier Invoice (Import)";

  if (isView) {
    breadCrums.push(
      {
        label: "Carrier Invoice (Import)",
        path: "/accounts/carrier-invoice-import",
      },
      { label: "Carrier Invoice (Import) Details" }
    );
    heading = "Carrier Invoice (Import) Details";
  } else if (isCreate) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/carrier-invoice-import/view/${id}`,
      },
      { label: "Create Carrier Invoice" }
    );
    heading = "Create Carrier Invoice";
  } else if (isEdit) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/carrier-invoice-import/view/${id}`,
      },
      { label: "Edit Carrier Invoice" }
    );
    heading = "Edit Carrier Invoice";
  } else if (isDetails) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/carrier-invoice-import/view/${id}`,
      },
      { label: "Carrier Invoice Details" }
    );
    heading = "Carrier Invoice Details";
  } else {
    breadCrums.push({ label: "Carrier Invoice (Import)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default CarrierInvoiceImport;
