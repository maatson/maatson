import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const InvoiceExport: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();

  const isView = pathname.startsWith("/accounts/invoice-export/view-invoice");
  const isCreateProforma = pathname.startsWith(
    "/accounts/invoice-export/create-proforma"
  );
  const isUpdateProforma = pathname.startsWith(
    "/accounts/invoice-export/update-proforma"
  );
  const isViewProforma = pathname.startsWith(
    "/accounts/invoice-export/view-proforma"
  );
  const isCreateCollection = pathname.startsWith(
    "/accounts/invoice-export/create-collection"
  );
  const isEditCollection = pathname.startsWith(
    "/accounts/invoice-export/edit-collection"
  );
  const isViewCollection = pathname.startsWith(
    "/accounts/invoice-export/view-collection"
  );
  const isUpdateTaxInvoice = pathname.startsWith(
    "/accounts/invoice-export/update-taxInvoice"
  );
  const isViewTaxInvoice = pathname.startsWith(
    "/accounts/invoice-export/view-taxInvoice"
  );

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Accounts", path: "/accounts/invoice-export" },
  ];
  let heading = "Invoice (Export)";

  if (isView) {
    breadCrums.push(
      {
        label: "Invoice (Export)",
        path: "/accounts/invoice-export",
      },
      { label: "Invoice Details" }
    );
    heading = "Invoice Details";
  } else if (isCreateProforma) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/proforma`,
      },
      { label: "Proforma Create" }
    );
    heading = "Proforma Create";
  } else if (isUpdateProforma) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/proforma`,
      },
      { label: "Proforma Update" }
    );
    heading = "Proforma Update";
  } else if (isViewProforma) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/proforma`,
      },
      { label: "Proforma Details" }
    );
    heading = "Proforma Details";
  } else if (isCreateCollection) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/collection`,
      },
      { label: "Create Collection" }
    );
    heading = "Create Collection";
  } else if (isEditCollection) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/collection`,
      },
      { label: "Edit Collection" }
    );
    heading = "Edit Collection";
  } else if (isViewCollection) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/collection`,
      },
      { label: "Colletion Details" }
    );
    heading = "Colletion Details";
  } else if (isUpdateTaxInvoice) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/taxInvoice`,
      },
      { label: "Tax-Invoice Update" }
    );
    heading = "Tax-Invoice Update";
  } else if (isViewTaxInvoice) {
    breadCrums.push(
      {
        label: "Invoice Details",
        path: `/accounts/invoice-export/view-invoice/${id}/taxInvoice`,
      },
      { label: "Tax Invoice Details" }
    );
    heading = "Tax Invoice Details";
  } else {
    breadCrums.push({ label: "Invoice (Export)" });
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default InvoiceExport;
