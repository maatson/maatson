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
const CancelEnquiry = lazy(
  () => import("./pages/salesAndMarketing/layouts/CancelEnquiry")
);
const NegotiateEnquiry = lazy(
  () => import("./pages/salesAndMarketing/layouts/NegotiateEnquiry")
);
const ConvertToBookingEnquiry = lazy(
  () => import("./pages/salesAndMarketing/layouts/ConvertToBookingEnquiry")
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

// CUSTOMER SERVICE : Sea Schedule
const SeaAirSchedule = lazy(
  () => import("./pages/customerService/sea-air-schedule")
);
//sea
const SeaFreight = lazy(
  () => import("./pages/customerService/sea-air-schedule/sea-freight")
);
const UpdateSchedule = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/sea-freight/updateSchedule/UpdateSchedule"
    )
);
const ScheduleDetails = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/sea-freight/scheduleDetails/ScheduleDetails"
    )
);
const BulkScheduleUpdates = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/sea-freight/bulkScheduleUpdates/BulkScheduleUpdates"
    )
);
const AddSeaScheduleForm = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/sea-freight/updateSchedule/AddSeaScheduleForm"
    )
);
const EditSeaScheduleForm = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/sea-freight/updateSchedule/EditSeaScheduleForm"
    )
);
const VesselDetails = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/sea-freight/updateSchedule/VesselDetails"
    )
);

//air
const AirFreight = lazy(
  () => import("./pages/customerService/sea-air-schedule/air-freight")
);
const UpdateScheduleAir = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/air-freight/updateSchedule/UpdateSchedule"
    )
);
const ScheduleDetailsAir = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/air-freight/scheduleDetails/ScheduleDetails"
    )
);
const BulkScheduleUpdatesAir = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/air-freight/bulkScheduleUpdates/BulkScheduleUpdates"
    )
);
const AddAirScheduleForm = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/air-freight/updateSchedule/AddAirScheduleForm"
    )
);
const EditAirScheduleForm = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/air-freight/updateSchedule/EditAirScheduleForm"
    )
);
const FlightDetails = lazy(
  () =>
    import(
      "./pages/customerService/sea-air-schedule/air-freight/updateSchedule/FlightDetails"
    )
);

// CUSTOMER SERVICE :Shipment updates
const ShipmentUpdates = lazy(
  () => import("./pages/customerService/shipment-updates")
);
// sea
const ShipmentSeaFreight = lazy(
  () => import("./pages/customerService/shipment-updates/sea-freight")
); //index
const Updates = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/updates/Updates"
    )
);
const UpdateDetails = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/updates/UpdateDetails"
    )
);
const ContainerPickUp = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/containerPickUp/ContainerPickUp"
    )
);
const ContainerPickUpDetails = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/containerPickUp/ContainerPickupDetails"
    )
);
const TerminalGateIn = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/terminalGateIn/TerminalGateIn"
    )
);
const TerminalGateInDetails = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/terminalGateIn/TerminalGateInDetails"
    )
);
const CreateSplitBooking = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/terminalGateIn/CreateSplitBooking"
    )
);
// vick routes
const OnboardConfirmation = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/onboardConfirmation/OnboardConfirmation"
    )
);
const ViewOnboardConfirmation = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/onboardConfirmation/ViewOnBoardConfirmation"
    )
);
const EditOnboardConfirmation = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/onboardConfirmation/EditOnBoardConfirmation"
    )
);
const TransitInfo = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/transitInfo/TransitInfo"
    )
);
const TransitView = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/transitInfo/TransitView"
    )
);
const DeliveryOrderCollected = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/deliveryOrderCollected/DeliveryOrderCollected"
    )
);
const DeliveryOrderCollectedView = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/deliveryOrderCollected/DeliveryOrderCollectedView"
    )
);
const EmptyGateInConfirmation = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/emptyGateInConfirmation/EmptyGateInConfirmation"
    )
);
const ViewEmptyGateIn = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/sea-freight/emptyGateInConfirmation/ViewEmptyGateIn"
    )
);

// air
const ShipmentAirFreight = lazy(
  () => import("./pages/customerService/shipment-updates/air-freight")
); //index
const UpdatesAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/updates/Updates"
    )
);
const AirportGateInDateAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/airportGateInDate/AirportGateInDate"
    )
);
const CargoHandoverUpdateAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/cargoHandoverUpdate/CargoHandoverUpdate"
    )
);
const DepartureConfirmationAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/departureConfirmation/DepartureConfirmation"
    )
);
const TransitInfoAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/transitInfo/TransitInfo"
    )
);
const DeliveryOrderCollectedAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/deliveryOrderCollected/DeliveryOrderCollected"
    )
);

// PRICING AND PROCUREMENT

const AllRates = lazy(() => import("./pages/pricing&procurement/allRates"));
const EnquiryRateFiling = lazy(
  () => import("./pages/pricing&procurement/enquiryRateFiling")
);
const NewRateFiling = lazy(
  () => import("./pages/pricing&procurement/newRateFiling")
);
const RateMailing = lazy(
  () => import("./pages/pricing&procurement/rateMailing")
);
const OtherVendors = lazy(
  () => import("./pages/pricing&procurement/otherVendors")
);
// TESTIMONALS
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
          <Route path="details/:id" element={<BookingDetails />} />
        </Route>
        <Route path="enquiry" element={<Enquiry />}>
          <Route index element={<EnquiryList />} />
          <Route path="add" element={<AddEnquiry />} />
          <Route path="details/:id" element={<EnquiryDetails />}>
            <Route path="booking-status/cancel" element={<CancelEnquiry />} />
            <Route index element={<NegotiateEnquiry />} />
            <Route
              path="booking-status/convertBooking"
              element={<ConvertToBookingEnquiry />}
            />
          </Route>
        </Route>

        {/* customer services */}
        {/* sea-air-schedule */}

        <Route path="sea-air-schedule" element={<SeaAirSchedule />}>
          <Route path="sea-freight" element={<SeaFreight />}>
            <Route index element={<UpdateSchedule />} />
            <Route path="schedule-details" element={<ScheduleDetails />} />
            <Route
              path="bulk-schedule-updates"
              element={<BulkScheduleUpdates />}
            />
          </Route>

          <Route path="air-freight" element={<AirFreight />}>
            <Route index element={<UpdateScheduleAir />} />
            <Route path="schedule-details" element={<ScheduleDetailsAir />} />
            <Route
              path="bulk-schedule-updates"
              element={<BulkScheduleUpdatesAir />}
            />
          </Route>

          <Route path="add-sea-schedule" element={<AddSeaScheduleForm />} />
          <Route path="edit-sea-schedule" element={<EditSeaScheduleForm />} />
          <Route path="vessel-details" element={<VesselDetails />} />
          <Route
            path="schedule-details/vessel-details"
            element={<VesselDetails />}
          />
          <Route path="add-air-schedule" element={<AddAirScheduleForm />} />
          <Route path="edit-air-schedule" element={<EditAirScheduleForm />} />
          <Route path="flight-details" element={<FlightDetails />} />
          <Route
            path="schedule-details/flight-details"
            element={<FlightDetails />}
          />
        </Route>

        {/* shipment-updates */}

        <Route path="shipment-updates" element={<ShipmentUpdates />}>
          <Route path="sea-freight" element={<ShipmentSeaFreight />}>
            <Route index element={<Updates />} />
            <Route path ="updates/update-details/:id" element={<UpdateDetails />} />
            <Route path="container-pickup" element={<ContainerPickUp />} />
            <Route
              path="container-pickup/details/:id"
              element={<ContainerPickUpDetails />}
            />
            <Route path="terminal-gateIn" element={<TerminalGateIn />} />
            <Route path="terminal-gateIn/details/:id" element={<TerminalGateInDetails />} />
            <Route path="create-split-booking/:id" element={<CreateSplitBooking />} />
            <Route
              path="onboard-confirmation"
              element={<OnboardConfirmation />}
            />
            <Route
              path="onboard-confirmation/view/:bookingId"
              element={<ViewOnboardConfirmation />}
            />
            <Route
              path="onboard-confirmation/edit/:bookingId"
              element={<EditOnboardConfirmation />}
            />
            <Route path="transit-info" element={<TransitInfo />} />
            <Route path="transit-view/:id" element={<TransitView />} />
            <Route
              path="delivery-order-collected"
              element={<DeliveryOrderCollected />}
            />
            <Route
              path="delivery-order-collected/view/:id"
              element={<DeliveryOrderCollectedView />}
            />
            <Route
              path="empty-return-confirmation"
              element={<EmptyReturnConfirmation />}
            />
            <Route path="empty-gateIn-confirmation/view/:id" element={<ViewEmptyGateIn />} />
          </Route>

          <Route path="air-freight" element={<ShipmentAirFreight />}>
            <Route index element={<UpdatesAir />} />
            <Route
              path="airport-gatein-date"
              element={<AirportGateInDateAir />}
            />
            <Route
              path="cargo-handover-update"
              element={<CargoHandoverUpdateAir />}
            />
            <Route
              path="departure-confirmation"
              element={<DepartureConfirmationAir />}
            />
            <Route path="transit-info" element={<TransitInfoAir />} />
            <Route
              path="delivery-order-collected"
              element={<DeliveryOrderCollectedAir />}
            />
          </Route>
        </Route>
        <Route path="cargo-arrival-notice" element={<Requirement />}></Route>

        {/* pricing & procurement */}
        <Route path="all-rates" element={<AllRates />}></Route>
        <Route
          path="rate-filing-enquiry"
          element={<EnquiryRateFiling />}
        ></Route>
        <Route path="rate-filing-new" element={<NewRateFiling />}></Route>
        <Route path="rate-mailing" element={<RateMailing />}></Route>
        <Route path="other-vendors" element={<OtherVendors />}></Route>

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
