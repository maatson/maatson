import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../../../components/header/PageHeader";

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const RateTariff: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Sales & Marketing", path: "/rate-tariff" },
    { label: "Rate Tariff", path: "/rate-tariff" },
  ];
  let heading = "Rate Tariff";

  const isRateTariffView = pathname.startsWith("/rate-tariff/view");

  if (isRateTariffView) {
    breadCrums.push({ label: "Rate Tariff View" });
    heading = "Rate Tariff Details";
  }

  return (
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />
      <Outlet />
    </>
  );
};

export default RateTariff;
