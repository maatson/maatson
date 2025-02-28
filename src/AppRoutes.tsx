import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loading components
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

// HRM Routes
const Attendance = lazy(() => import("./pages/hrm/attendance"));
const AttendanceList = lazy(
  () => import("./pages/hrm/attendance/AttendanceList")
);
const AttendanceDetail = lazy(
  () => import("./pages/hrm/attendance/AttendanceDetail")
);
const Holidays = lazy(() => import("./pages/hrm/attendance/Holidays"));

//Employees
const Employees = lazy(() => import("./pages/hrm/employees"));
const EmployeeList = lazy(() => import("./pages/hrm/employees/EmployeeList"));
const EmployeeForm = lazy(() => import("./pages/hrm/employees/EmployeeForm"));
const EmployeeProfile = lazy(
  () => import("./pages/hrm/employees/EmployeeProfile")
);

// Leave-Form
const LeaveForm = lazy(() => import("./pages/hrm/leaveForm"));
const LeaveFormList = lazy(() => import("./pages/hrm/leaveForm/LeaveFormList"));

//requirements
const Requirement = lazy(() => import("./pages/hrm/requirement"));
const RequirementList = lazy(
  () => import("./pages/hrm/requirement/RequirementList")
);
const RequirementDetails = lazy(
  () => import("./pages/hrm/requirement/RequirementDetails")
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Suspense for the Dashboard route */}
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            }
          >
            <DashBoard />
          </Suspense>
        }
      >
        <Route path="hrm" element={<PageNotFound />} />
        <Route path="hrm/employees" element={<Employees />}>
          <Route index element={<EmployeeList />} />
          <Route path="employee-form" element={<EmployeeForm />} />
          <Route path="employee-profile" element={<EmployeeProfile />} />
        </Route>
        <Route path="hrm/attendance" element={<Attendance />}>
          <Route index element={<AttendanceList />} />
          <Route path="holidays" element={<Holidays />} />
          <Route path="detail" element={<AttendanceDetail />} />
        </Route>
        <Route path="hrm/leave-form" element={<LeaveForm />}>
          <Route index element={<LeaveFormList />} />
        </Route>
        <Route path="hrm/requirement" element={<Requirement />}>
          <Route index element={<RequirementList />} />
          <Route path="details" element={<RequirementDetails />} />
          {/* <Route path="employee-profile" element={<EmployeeProfile />} /> */}
        </Route>
      </Route>

      {/* Suspense for Login and other credential-related routes */}
      <Route
        path="/login"
        element={
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            }
          >
            <CredentialsLayout>
              <Login />
            </CredentialsLayout>
          </Suspense>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            }
          >
            <CredentialsLayout>
              <ForgotPassword />
            </CredentialsLayout>
          </Suspense>
        }
      />
      <Route
        path="/reset-password"
        element={
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            }
          >
            <CredentialsLayout>
              <ResetPassword />
            </CredentialsLayout>
          </Suspense>
        }
      />
      <Route
        path="/otp-verification"
        element={
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            }
          >
            <CredentialsLayout>
              <OtpVerification />
            </CredentialsLayout>
          </Suspense>
        }
      />

      {/* Page not found for undefined routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
