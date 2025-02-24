import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const DashBoard = lazy(() => import("./pages/dashboard/DashBoard"));
const CredentialsLayout = lazy(
  () => import("./pages/layouts/CredentialsLayout")
);
const Login = lazy(() => import("./components/login/Login"));
const ForgotPassword = lazy(
  () => import("./components/forgotPassword/ForgotPassword")
);
const ResetPassword = lazy(
  () => import("./components/resetPassword/ResetPassword")
);
const OtpVerification = lazy(
  () => import("./components/otpVerification/OtpVerification")
);
const PageNotFound = lazy(() => import("./pages/pageNotFound"));
const Attendance = lazy(() => import("./pages/hrm/attendance"));

const Employees = lazy(() => import("./pages/hrm/employees"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route path="hrm" element={<PageNotFound />} />
        <Route path="hrm/attendance" element={<Attendance />} />
        <Route path="hrm/employees" element={<Employees />} />
      </Route>
      <Route
        index
        path="/login"
        element={<CredentialsLayout children={<Login />} />}
      />
      <Route
        path="/forgot-password"
        element={<CredentialsLayout children={<ForgotPassword />} />}
      />
      <Route
        path="/reset-password"
        element={<CredentialsLayout children={<ResetPassword />} />}
      />
      <Route
        path="/otp-verification"
        element={<CredentialsLayout children={<OtpVerification />} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
