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

// Registration Routes

// user
const UserRegister = lazy(() => import("./pages/register/user"));
const UserRegisterList = lazy(
  () => import("./pages/register/user/UserRegisterList")
);
const AddRegister = lazy(() => import("./pages/register/user/AddRegister"));
const UserDetails = lazy(() => import("./pages/register/user/UserDetails"));

// carrier
const CarrierRegister = lazy(() => import("./pages/register/carrier"));
const CarrierRegisterList = lazy(
  () => import("./pages/register/carrier/CarrierRegisterList")
);
const CarrierRegisterForm = lazy(
  () => import("./pages/register/carrier/CarrierRegisterForm")
);
const CarrierProfile = lazy(
  () => import("./pages/register/carrier/CarrierProfile")
);
const CarrierContactInformation = lazy(
  () => import("./pages/register/carrier/CarrierContactInformation")
);

// vendor
const VendorRegister = lazy(() => import("./pages/register/vendor"));
const VendorRegisterList = lazy(
  () => import("./pages/register/vendor/VendorRegisterList")
);
const AddVendorRegister = lazy(
  () => import("./pages/register/vendor/AddVendorRegister")
);
const VendorDetails = lazy(
  () => import("./pages/register/vendor/vendorDetails")
);
const VendorProfile = lazy(
  () => import("./pages/register/vendor/vendorDetails/VendorProfile")
);
const VendorContact = lazy(
  () => import("./pages/register/vendor/vendorDetails/VendorContact")
);

//SALES AND CRM (SALES AND MARKING & ENQUIRY & BOOKING)
const Booking = lazy(() => import("./pages/salesAndMarketing/booking"));
const BookingDetails = lazy(
  () => import("./pages/salesAndMarketing/booking/BookingDetails")
);
const ConvertToBooking = lazy(
  () => import("./pages/salesAndMarketing/booking/ConvertToBooking")
);
const AddBooking = lazy(
  () => import("./pages/salesAndMarketing/booking/AddBooking")
);
const BookingList = lazy(
  () => import("./pages/salesAndMarketing/booking/BookingList")
);

const Enquiry = lazy(() => import("./pages/salesAndMarketing/enquiry"));
const EnquiryList = lazy(
  () => import("./pages/salesAndMarketing/enquiry/EnquiryList")
);
const EnquiryDetails = lazy(
  () => import("./pages/salesAndMarketing/enquiry/EnquiryDetails")
);
const AddEnquiry = lazy(
  () => import("./pages/salesAndMarketing/enquiry/AddEnquiry")
);

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

// testimonials
const Testimonials = lazy(() => import("./pages/testimonials"));
const TestimonialList = lazy(
  () => import("./pages/testimonials/TestimonialList")
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
        {/* register */}
        <Route path="registration-user" element={<UserRegister />}>
          <Route index element={<UserRegisterList />} />
          <Route path="add" element={<AddRegister />} />
          <Route path="details" element={<UserDetails />} />
        </Route>
        <Route path="registration-carrier" element={<CarrierRegister />}>
          <Route index element={<CarrierRegisterList />} />
          <Route path="register-form" element={<CarrierRegisterForm />} />
          <Route path="carrier-details/profile" element={<CarrierProfile />} />
          <Route
            path="carrier-details/contact-information"
            element={<CarrierContactInformation />}
          />
        </Route>
        <Route path="registration-vendor" element={<VendorRegister />}>
          <Route index element={<VendorRegisterList />} />
          <Route path="add" element={<AddVendorRegister />} />
          <Route path="details" element={<VendorDetails />}>
            <Route index element={<VendorProfile />} />
            <Route path="contact" element={<VendorContact />} />
          </Route>
        </Route>
        {/* hrm */}
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

        {/* sales and marketting */}
        <Route path="booking" element={<Booking />}>
          <Route index element={<BookingList />} />
          <Route path="add" element={<AddBooking />} />
          <Route path="convert-to-booking" element={<ConvertToBooking />} />
          <Route path="details" element={<BookingDetails />} />
        </Route>
        <Route path="enquiry" element={<Enquiry />}>
          <Route index element={<EnquiryList />} />
          <Route path="add" element={<AddEnquiry />} />
          <Route path="details" element={<EnquiryDetails />} />
        </Route>

        {/* testimonials */}
        <Route path="testimonials" element={<Testimonials />}>
          <Route index element={<TestimonialList />} />
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
