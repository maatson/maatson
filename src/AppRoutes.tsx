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

const RateTariff = lazy(() => import("./pages/salesAndMarketing/rateTariff"));
const RateTariffList = lazy(
  () => import("./pages/salesAndMarketing/rateTariff/RateTariffList")
);
const RateTariffView = lazy(
  () => import("./pages/salesAndMarketing/rateTariff/RateTariffView")
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
const UpdatesAirDetails = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/updates/UpdateAirDetails"
    )
);
const AirportGateInDateAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/airportGateInDate/AirportGateInDate"
    )
);
const ViewAirportGateIn = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/airportGateInDate/ViewAirportGateIn"
    )
);
const CargoHandoverUpdateAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/cargoHandoverUpdate/CargoHandoverUpdate"
    )
);
const ViewCargoHandoverUpdate = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/cargoHandoverUpdate/ViewCargoHandover"
    )
);
const DepartureConfirmationAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/departureConfirmation/DepartureConfirmation"
    )
);
const ViewDepartureConfirmation = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/departureConfirmation/ViewDepartureConfirmation"
    )
);
const EditDepartureConfirmation = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/departureConfirmation/EditDepartureConfirmation"
    )
);
const TransitInfoAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/transitInfo/TransitInfo"
    )
);
const TransitViewAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/transitInfo/TransitView"
    )
);
const DeliveryOrderCollectedAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/deliveryOrderCollected/DeliveryOrderCollected"
    )
);
const DeliveryOrderCollectedViewAir = lazy(
  () =>
    import(
      "./pages/customerService/shipment-updates/air-freight/deliveryOrderCollected/DeliveryOrderCollectedView"
    )
);

// PRICING AND PROCUREMENT

const RateFiling = lazy(() => import("./pages/pricing&procurement/rateFiling"));
const RateFilingList = lazy(
  () => import("./pages/pricing&procurement/rateFiling/RateFillingList")
);
const AvailableRates = lazy(
  () => import("./pages/pricing&procurement/rateFiling/AvailableRates")
);
const AddRateFiling = lazy(
  () => import("./pages/pricing&procurement/rateFiling/AddRateFiling")
);
const EditRateFiling = lazy(
  () => import("./pages/pricing&procurement/rateFiling/EditRateFiling")
);
const ViewRateFiling = lazy(
  () => import("./pages/pricing&procurement/rateFiling/ViewRateFiling")
);
const CreateRateFiling = lazy(
  () => import("./pages/pricing&procurement/rateFiling/CreateRateFiling")
);

const RateMailing = lazy(
  () => import("./pages/pricing&procurement/rateMailing")
);
const OtherVendors = lazy(
  () => import("./pages/pricing&procurement/otherVendors")
);
const VendorForShippingList = lazy(
  () => import("./pages/pricing&procurement/otherVendors/vendorForShipping")
);
const VendorForOfficeList = lazy(
  () =>
    import("./pages/pricing&procurement/otherVendors/vendorForOfficeEssential")
);
const CreateVendorBill = lazy(
  () => import("./pages/pricing&procurement/otherVendors/CreateVendorBill")
);
const EditVendorBill = lazy(
  () => import("./pages/pricing&procurement/otherVendors/EditVendorBill")
);
const ViewVendorBill = lazy(
  () => import("./pages/pricing&procurement/otherVendors/ViewVendorBill")
);

// OPERATIONS

const ContainerReleaseOrder = lazy(
  () => import("./pages/operations/containerReleaseOrder")
);
const ContainerReleaseOrderList = lazy(
  () =>
    import("./pages/operations/containerReleaseOrder/ContainerReleaseOrderList")
);
const CreateContainerReleaseOrder = lazy(
  () =>
    import(
      "./pages/operations/containerReleaseOrder/CreateContainerReleaseOrder"
    )
);
const EditContainerReleaseOrder = lazy(
  () =>
    import("./pages/operations/containerReleaseOrder/EditContainerReleaseOrder")
);
const ViewContainerReleaseOrder = lazy(
  () =>
    import("./pages/operations/containerReleaseOrder/ViewContainerReleaseOrder")
);
const Vgm = lazy(() => import("./pages/operations/vgm"));
const VGMFilingList = lazy(
  () => import("./pages/operations/vgm/VGMFilingList")
);
const CreateVGMFiling = lazy(
  () => import("./pages/operations/vgm/CreateVGMFiling")
);
const EditVGMFiling = lazy(
  () => import("./pages/operations/vgm/EditVGMFiling")
);
const ViewVGMFiling = lazy(
  () => import("./pages/operations/vgm/ViewVGMFiling")
);
const CargoManifest = lazy(() => import("./pages/operations/cargoManifest"));
const CargoManifestListSea = lazy(
  () => import("./pages/operations/cargoManifest/seaFreight/CargoManifestList")
);
const CargoManifestCreateSea = lazy(
  () =>
    import("./pages/operations/cargoManifest/seaFreight/CargoManifestCreate")
);
const CargoManifestEditSea = lazy(
  () => import("./pages/operations/cargoManifest/seaFreight/CargoManifestEdit")
);
const CargoManifestViewSea = lazy(
  () => import("./pages/operations/cargoManifest/seaFreight/CargoManifestView")
);
const CargoManifestListAir = lazy(
  () => import("./pages/operations/cargoManifest/airFreight/CargoManifestList")
);
const CargoManifestCreateAir = lazy(
  () =>
    import("./pages/operations/cargoManifest/airFreight/CargoManifestCreate")
);
const CargoManifestEditAir = lazy(
  () => import("./pages/operations/cargoManifest/airFreight/CargoManifestEdit")
);
const CargoManifestViewAir = lazy(
  () => import("./pages/operations/cargoManifest/airFreight/CargoManifestView")
);

// Documentation
// bill of lading - sea
const BillOfLadingSeaFreight = lazy(
  () => import("./pages/documentation/billOfLadingSeaFreight")
);
const BillOfLadingListSea = lazy(
  () => import("./pages/documentation/billOfLadingSeaFreight/BillOfLadingList")
);
const ViewBillOfLading = lazy(
  () => import("./pages/documentation/billOfLadingSeaFreight/ViewBillOfLading")
);
const CreateBl = lazy(
  () => import("./pages/documentation/billOfLadingSeaFreight/CreateBl")
);
const EditBl = lazy(
  () => import("./pages/documentation/billOfLadingSeaFreight/EditBl")
);
const ViewBl = lazy(
  () => import("./pages/documentation/billOfLadingSeaFreight/ViewBl")
);
// bill of lading - air
const BillOfLadingAirFreight = lazy(
  () => import("./pages/documentation/billOfLadingAirFreight")
);
const BillOfLadingListAir = lazy(
  () => import("./pages/documentation/billOfLadingAirFreight/BillOfLadingList")
);
const ViewBillOfLadingAir = lazy(
  () => import("./pages/documentation/billOfLadingAirFreight/ViewBillOfLading")
);
const CreateAirBl = lazy(
  () => import("./pages/documentation/billOfLadingAirFreight/CreateAirBl")
);
const EditAirBl = lazy(
  () => import("./pages/documentation/billOfLadingAirFreight/EditAirBl")
);
const ViewAirBl = lazy(
  () => import("./pages/documentation/billOfLadingAirFreight/viewAirBl")
);

// Accounts
const AccountsDashboard = lazy(
  () => import("./pages/accounts/accountsDashboard")
);
const Bank = lazy(() => import("./pages/accounts/bank"));
const BankList = lazy(() => import("./pages/accounts/bank/BankList"));
const BankDetails = lazy(() => import("./pages/accounts/bank/BankDetails"));

// carrier-invoice- import
const CarrierInvoiceImport = lazy(
  () => import("./pages/accounts/carrierInvoiceImport")
);
const CarrierInvoiceListImport = lazy(
  () => import("./pages/accounts/carrierInvoiceImport/CarrierInvoiceList")
);
const ViewCarrierInvoiceImport = lazy(
  () => import("./pages/accounts/carrierInvoiceImport/ViewCarrierInvoice")
);
const CreateCarrierInvoiceImport = lazy(
  () => import("./pages/accounts/carrierInvoiceImport/CreateCarrierInvoice")
);
const EditCarrierInvoiceImport = lazy(
  () => import("./pages/accounts/carrierInvoiceImport/EditCarrierInvoice")
);
const CarrierInvoiceDetailsImport = lazy(
  () => import("./pages/accounts/carrierInvoiceImport/CarrierInvoiceDetails")
);

// invoice - import
const InvoiceImport = lazy(() => import("./pages/accounts/invoiceImport"));
const InvoiceListImport = lazy(
  () => import("./pages/accounts/invoiceImport/InvoiceList")
);
const ViewInvoiceImport = lazy(
  () => import("./pages/accounts/invoiceImport/ViewInvoice")
);
const ProformaImport = lazy(
  () => import("./pages/accounts/invoiceImport/proforma")
);
const CreateProformaImport = lazy(
  () => import("./pages/accounts/invoiceImport/proforma/CreateProforma")
);
const UpdateProformaImport = lazy(
  () => import("./pages/accounts/invoiceImport/proforma/UpdateProforma")
);
const ViewProformaImport = lazy(
  () => import("./pages/accounts/invoiceImport/proforma/ViewProforma")
);
const ColletionImport = lazy(
  () => import("./pages/accounts/invoiceImport/collection")
);
const CreateCollectionImport = lazy(
  () => import("./pages/accounts/invoiceImport/collection/CreateCollection")
);
const EditCollectionImport = lazy(
  () => import("./pages/accounts/invoiceImport/collection/EditCollection")
);
const ViewColletionImport = lazy(
  () => import("./pages/accounts/invoiceImport/collection/ViewCollection")
);
const TaxInvoiceImport = lazy(
  () => import("./pages/accounts/invoiceImport/taxInvoice")
);
const UpdateTaxInvoiceImport = lazy(
  () => import("./pages/accounts/invoiceImport/taxInvoice/UpdataTaxInvoice")
);
const ViewTaxInvoiceImport = lazy(
  () => import("./pages/accounts/invoiceImport/taxInvoice/ViewTaxInvoice")
);

// invoice - export
const InvoiceExport = lazy(() => import("./pages/accounts/invoiceExport"));
const InvoiceListExport = lazy(
  () => import("./pages/accounts/invoiceExport/InvoiceList")
);
const ViewInvoiceExport = lazy(
  () => import("./pages/accounts/invoiceExport/ViewInvoice")
);
const ProformaExport = lazy(
  () => import("./pages/accounts/invoiceExport/proforma")
);
const CreateProformaExport = lazy(
  () => import("./pages/accounts/invoiceExport/proforma/CreateProforma")
);
const UpdateProformaExport = lazy(
  () => import("./pages/accounts/invoiceExport/proforma/UpdateProforma")
);
const ViewProformaExport = lazy(
  () => import("./pages/accounts/invoiceExport/proforma/ViewProforma")
);
const ColletionExport = lazy(
  () => import("./pages/accounts/invoiceExport/collection")
);
const CreateCollectionExport = lazy(
  () => import("./pages/accounts/invoiceExport/collection/CreateCollection")
);
const EditCollectionExport = lazy(
  () => import("./pages/accounts/invoiceExport/collection/EditCollection")
);
const ViewColletionExport = lazy(
  () => import("./pages/accounts/invoiceExport/collection/ViewCollection")
);
const TaxInvoiceExport = lazy(
  () => import("./pages/accounts/invoiceExport/taxInvoice")
);
const UpdateTaxInvoiceExport = lazy(
  () => import("./pages/accounts/invoiceExport/taxInvoice/UpdataTaxInvoice")
);
const ViewTaxInvoiceExport = lazy(
  () => import("./pages/accounts/invoiceExport/taxInvoice/ViewTaxInvoice")
);

// carrier-invoice-export
const CarrierInvoiceExport = lazy(
  () => import("./pages/accounts/carrierInvoiceExport")
);
const CarrierInvoiceListExport = lazy(
  () => import("./pages/accounts/carrierInvoiceExport/CarrierInvoiceList")
);
const ViewCarrierInvoiceExport = lazy(
  () => import("./pages/accounts/carrierInvoiceExport/ViewCarrierInvoice")
);
const CreateCarrierInvoiceExport = lazy(
  () => import("./pages/accounts/carrierInvoiceExport/CreateCarrierInvoice")
);
const EditCarrierInvoiceExport = lazy(
  () => import("./pages/accounts/carrierInvoiceExport/EditCarrierInvoice")
);
const CarrierInvoiceDetailsExport = lazy(
  () => import("./pages/accounts/carrierInvoiceExport/CarrierInvoiceDetails")
);

// agent soa dashboard
const AgentSOADashboard = lazy(
  () => import("./pages/accounts/agentSOADashboard")
);

// agent soa import
const AgentSOAImport = lazy(() => import("./pages/accounts/agentSOAImport"));
const AgentSOAListImport = lazy(
  () => import("./pages/accounts/agentSOAImport/AgentSOAList")
);
const ViewAgentSOAInvoiceImport = lazy(
  () => import("./pages/accounts/agentSOAImport/ViewAgentSOA")
);
const CreateCreditNoteInvoiceImport = lazy(
  () => import("./pages/accounts/agentSOAImport/CreateCreditNoteInvoice")
);
const CreateDebitNoteInvoiceImport = lazy(
  () => import("./pages/accounts/agentSOAImport/CreateDebitNoteInvoice")
);
const EditCreditNoteInvoiceImport = lazy(
  () => import("./pages/accounts/agentSOAImport/EditCreditNoteInvoice")
);
const EditDebitNoteInvoiceImport = lazy(
  () => import("./pages/accounts/agentSOAImport/EditDebitNoteInvoice")
);
const CreditNoteInvoiceDetailsImport = lazy(
  () => import("./pages/accounts/agentSOAImport/CreditNoteInvoiceDetails")
);
const DebitNoteInvoiceDetailsImport = lazy(
  () => import("./pages/accounts/agentSOAImport/DebitNoteInvoiceDetails")
);

// agent soa export
const AgentSOAExport = lazy(() => import("./pages/accounts/agentSOAExport"));
const AgentSOAListExport = lazy(
  () => import("./pages/accounts/agentSOAExport/AgentSOAList")
);
const ViewAgentSOAInvoiceExport = lazy(
  () => import("./pages/accounts/agentSOAExport/ViewAgentSOA")
);
const CreateCreditNoteInvoiceExport = lazy(
  () => import("./pages/accounts/agentSOAExport/CreateCreditNoteInvoice")
);
const CreateDebitNoteInvoiceExport = lazy(
  () => import("./pages/accounts/agentSOAExport/CreateDebitNoteInvoice")
);
const EditCreditNoteInvoiceExport = lazy(
  () => import("./pages/accounts/agentSOAExport/EditCreditNoteInvoice")
);
const EditDebitNoteInvoiceExport = lazy(
  () => import("./pages/accounts/agentSOAExport/EditDebitNoteInvoice")
);
const CreditNoteInvoiceDetailsExport = lazy(
  () => import("./pages/accounts/agentSOAExport/CreditNoteInvoiceDetails")
);
const DebitNoteInvoiceDetailsExport = lazy(
  () => import("./pages/accounts/agentSOAExport/DebitNoteInvoiceDetails")
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
        <Route path="rate-tariff" element={<RateTariff />}>
          <Route index element={<RateTariffList />} />
          <Route path="view/:id" element={<RateTariffView />} />
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
            <Route
              path="updates/update-details/:id"
              element={<UpdateDetails />}
            />
            <Route path="container-pickup" element={<ContainerPickUp />} />
            <Route
              path="container-pickup/details/:id"
              element={<ContainerPickUpDetails />}
            />
            <Route path="terminal-gateIn" element={<TerminalGateIn />} />
            <Route
              path="terminal-gateIn/details/:id"
              element={<TerminalGateInDetails />}
            />
            <Route
              path="create-split-booking/:id"
              element={<CreateSplitBooking />}
            />
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
              path="empty-gateIn-confirmation"
              element={<EmptyGateInConfirmation />}
            />
            <Route
              path="empty-gateIn-confirmation/view/:id"
              element={<ViewEmptyGateIn />}
            />
          </Route>

          <Route path="air-freight" element={<ShipmentAirFreight />}>
            <Route index element={<UpdatesAir />} />
            <Route
              path="updates/update-details/:id"
              element={<UpdatesAirDetails />}
            />
            <Route
              path="airport-gatein-date"
              element={<AirportGateInDateAir />}
            />
            <Route
              path="airport-gatein-date/view/:id"
              element={<ViewAirportGateIn />}
            />
            <Route
              path="cargo-handover-update"
              element={<CargoHandoverUpdateAir />}
            />
            <Route
              path="cargo-handover-update/view/:id"
              element={<ViewCargoHandoverUpdate />}
            />
            <Route
              path="create-split-booking/:id"
              element={<CreateSplitBooking />}
            />
            <Route
              path="departure-confirmation"
              element={<DepartureConfirmationAir />}
            />
            <Route
              path="departure-confirmation/view/:bookingId"
              element={<ViewDepartureConfirmation />}
            />
            <Route
              path="departure-confirmation/edit/:bookingId"
              element={<EditDepartureConfirmation />}
            />
            <Route path="transit-info" element={<TransitInfoAir />} />
            <Route path="transit-view/:id" element={<TransitViewAir />} />

            <Route
              path="delivery-order-collected"
              element={<DeliveryOrderCollectedAir />}
            />
            <Route
              path="delivery-order-collected/view/:id"
              element={<DeliveryOrderCollectedViewAir />}
            />
          </Route>
        </Route>

        {/* cargo arrival notice */}
        <Route path="cargo-arrival-notice" element={<Requirement />}></Route>

        {/* pricing & procurement */}
        <Route path="rate-filing" element={<RateFiling />}>
          <Route index element={<RateFilingList />} />
          <Route
            path="available-rates/:enquiryId"
            element={<AvailableRates />}
          />
          <Route path="add/:enquiryId" element={<AddRateFiling />} />
          <Route
            path="edit/:enquiryId/:rateFilingId"
            element={<EditRateFiling />}
          />
          <Route
            path="view/:enquiryId/:rateFilingId"
            element={<ViewRateFiling />}
          />
          <Route path="create" element={<CreateRateFiling />} />
        </Route>
        <Route path="rate-mailing" element={<RateMailing />}></Route>
        <Route path="other-vendors" element={<OtherVendors />}>
          <Route path="vendor-for-shipping">
            <Route index element={<VendorForShippingList />} />
            <Route path="create" element={<CreateVendorBill />} />
            <Route path="edit/:id" element={<EditVendorBill />} />
            <Route path="view/:id" element={<ViewVendorBill />} />
          </Route>
          <Route path="vendor-for-office">
            <Route index element={<VendorForOfficeList />} />
            <Route path="create" element={<CreateVendorBill />} />
            <Route path="edit/:id" element={<EditVendorBill />} />
            <Route path="view/:id" element={<ViewVendorBill />} />
          </Route>
        </Route>

        {/* operations */}
        <Route
          path="container-release-order"
          element={<ContainerReleaseOrder />}
        >
          <Route index element={<ContainerReleaseOrderList />} />
          <Route path="create" element={<CreateContainerReleaseOrder />} />
          <Route path="edit/:id" element={<EditContainerReleaseOrder />} />
          <Route path="view/:id" element={<ViewContainerReleaseOrder />} />
        </Route>

        <Route path="vgm-filing" element={<Vgm />}>
          <Route index element={<VGMFilingList />} />
          <Route path="create" element={<CreateVGMFiling />} />
          <Route path="edit/:id" element={<EditVGMFiling />} />
          <Route path="view/:id" element={<ViewVGMFiling />} />
        </Route>

        <Route path="cargo-manifest" element={<CargoManifest />}>
          <Route path="sea-freight">
            <Route index element={<CargoManifestListSea />} />
            <Route
              path="create/:bookingId"
              element={<CargoManifestCreateSea />}
            />
            <Route path="edit/:bookingId" element={<CargoManifestEditSea />} />
            <Route path="view/:bookingId" element={<CargoManifestViewSea />} />
          </Route>
          <Route path="air-freight">
            <Route index element={<CargoManifestListAir />} />
            <Route
              path="create/:bookingId"
              element={<CargoManifestCreateAir />}
            />
            <Route path="edit/:bookingId" element={<CargoManifestEditAir />} />
            <Route path="view/:bookingId" element={<CargoManifestViewAir />} />
          </Route>
        </Route>

        {/* documentation */}
        <Route
          path="bill-of-lading/sea-freight"
          element={<BillOfLadingSeaFreight />}
        >
          <Route index element={<BillOfLadingListSea />} />
          <Route path="view/:bookingId" element={<ViewBillOfLading />} />
          <Route path="viewBl/:blId" element={<ViewBl />} />
          <Route path="createBl/:bookingId" element={<CreateBl />} />
          <Route path="EditBl/:blId" element={<EditBl />} />
        </Route>
        <Route
          path="bill-of-lading/air-freight"
          element={<BillOfLadingAirFreight />}
        >
          <Route index element={<BillOfLadingListAir />} />
          <Route path="view/:bookingId" element={<ViewBillOfLadingAir />} />
          <Route path="createBl/:bookingId" element={<CreateAirBl />} />
          <Route path="editBl/:blId" element={<EditAirBl />} />
          <Route path="viewBl/:blId" element={<ViewAirBl />} />
        </Route>

        {/* accounts */}
        <Route path="accounts">
          <Route path="dashboard" element={<AccountsDashboard />}></Route>
          <Route path="bank" element={<Bank />}>
            <Route index element={<BankList />} />
            <Route path="details/:id" element={<BankDetails />} />
          </Route>

          <Route
            path="carrier-invoice-import"
            element={<CarrierInvoiceImport />}
          >
            <Route index element={<CarrierInvoiceListImport />} />
            <Route
              path="view/:id"
              element={<ViewCarrierInvoiceImport />}
            ></Route>
            <Route
              path="create/:id"
              element={<CreateCarrierInvoiceImport />}
            ></Route>
            <Route
              path="edit/:id"
              element={<EditCarrierInvoiceImport />}
            ></Route>
            <Route
              path="details/:id"
              element={<CarrierInvoiceDetailsImport />}
            ></Route>
          </Route>

          <Route path="invoice-import" element={<InvoiceImport />}>
            <Route index element={<InvoiceListImport />} />
            <Route path="view-invoice/:id" element={<ViewInvoiceImport />}>
              <Route path="proforma" element={<ProformaImport />} />
              <Route path="collection" element={<ColletionImport />} />
              <Route path="taxInvoice" element={<TaxInvoiceImport />} />
            </Route>
            <Route
              path="create-proforma/:id"
              element={<CreateProformaImport />}
            />
            <Route
              path="update-proforma/:id"
              element={<UpdateProformaImport />}
            />
            <Route path="view-proforma/:id" element={<ViewProformaImport />} />
            <Route
              path="create-collection/:id"
              element={<CreateCollectionImport />}
            />
            <Route
              path="edit-collection/:id"
              element={<EditCollectionImport />}
            />
            <Route
              path="view-collection/:id"
              element={<ViewColletionImport />}
            />
            <Route
              path="update-taxInvoice/:id/:taxNumber"
              element={<UpdateTaxInvoiceImport />}
            />
            <Route
              path="view-taxInvoice/:id/:taxNumber"
              element={<ViewTaxInvoiceImport />}
            />
          </Route>

          <Route
            path="carrier-invoice-export"
            element={<CarrierInvoiceExport />}
          >
            <Route index element={<CarrierInvoiceListExport />} />
            <Route
              path="view/:id"
              element={<ViewCarrierInvoiceExport />}
            ></Route>
            <Route
              path="create/:id"
              element={<CreateCarrierInvoiceExport />}
            ></Route>
            <Route
              path="edit/:id"
              element={<EditCarrierInvoiceExport />}
            ></Route>
            <Route
              path="details/:id"
              element={<CarrierInvoiceDetailsExport />}
            ></Route>
          </Route>

          <Route path="invoice-export" element={<InvoiceExport />}>
            <Route index element={<InvoiceListExport />} />
            <Route path="view-invoice/:id" element={<ViewInvoiceExport />}>
              <Route path="proforma" element={<ProformaExport />} />
              <Route path="collection" element={<ColletionExport />} />
              <Route path="taxInvoice" element={<TaxInvoiceExport />} />
            </Route>
            <Route
              path="create-proforma/:id"
              element={<CreateProformaExport />}
            />
            <Route
              path="update-proforma/:id"
              element={<UpdateProformaExport />}
            />
            <Route path="view-proforma/:id" element={<ViewProformaExport />} />
            <Route
              path="create-collection/:id"
              element={<CreateCollectionExport />}
            />
            <Route
              path="edit-collection/:id"
              element={<EditCollectionExport />}
            />
            <Route
              path="view-collection/:id"
              element={<ViewColletionExport />}
            />
            <Route
              path="update-taxInvoice/:id/:taxNumber"
              element={<UpdateTaxInvoiceExport />}
            />
            <Route
              path="view-taxInvoice/:id/:taxNumber"
              element={<ViewTaxInvoiceExport />}
            />
          </Route>

          <Route
            path="agent-soa-dashboard"
            element={<AgentSOADashboard />}
          ></Route>

          <Route path="agent-soa-import" element={<AgentSOAImport />}>
            <Route index element={<AgentSOAListImport />} />
            <Route
              path="view/:id"
              element={<ViewAgentSOAInvoiceImport />}
            ></Route>
            <Route
              path="credit-create/:id"
              element={<CreateCreditNoteInvoiceImport />}
            ></Route>
            <Route
              path="debit-create/:id"
              element={<CreateDebitNoteInvoiceImport />}
            ></Route>
            <Route
              path="credit-edit/:id/:creditId"
              element={<EditCreditNoteInvoiceImport />}
            ></Route>
            <Route
              path="debit-edit/:id/:creditId"
              element={<EditDebitNoteInvoiceImport />}
            ></Route>
            <Route
              path="credit-details/:id/:creditId"
              element={<CreditNoteInvoiceDetailsImport />}
            ></Route>
            <Route
              path="debit-details/:id/:creditId"
              element={<DebitNoteInvoiceDetailsImport />}
            ></Route>
          </Route>

          <Route path="agent-soa-export" element={<AgentSOAExport />}>
            <Route index element={<AgentSOAListExport />} />
            <Route
              path="view/:id"
              element={<ViewAgentSOAInvoiceExport />}
            ></Route>
            <Route
              path="credit-create/:id"
              element={<CreateCreditNoteInvoiceExport />}
            ></Route>
            <Route
              path="debit-create/:id"
              element={<CreateDebitNoteInvoiceExport />}
            ></Route>
            <Route
              path="credit-edit/:id/:creditId"
              element={<EditCreditNoteInvoiceExport />}
            ></Route>
            <Route
              path="debit-edit/:id/:creditId"
              element={<EditDebitNoteInvoiceExport />}
            ></Route>
            <Route
              path="credit-details/:id/:creditId"
              element={<CreditNoteInvoiceDetailsExport />}
            ></Route>
            <Route
              path="debit-details/:id/:creditId"
              element={<DebitNoteInvoiceDetailsExport />}
            ></Route>
          </Route>
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
