import "./App.css";
import SecondaryButton from "./components/buttons/SecondaryButton";
// import PrimaryButton from "./components/buttons/PrimaryButton";
import SuccessButton from "./components/buttons/SuccessButton";
import {
  AccountDetailIcon,
  BellIcon,
  CloseSolidIcon,
  CodeIcon,
  CompanyIcon,
  CrossIcon,
  DeleteIcon,
  DepartmentIcon,
  EmailIcon,
  EmployeeGroupIcon,
  ExcelIcon,
  ExporterIcon,
  EyeClose,
  EyeOpen,
  FileIcon,
  FollowUpIcon,
  ImporterIcon,
  InvoiceIcon,
  LocationIcon,
  NvoccIcon,
  PasswordIcon,
  PhoneIcon,
  PhoneOutlineIcon,
  ProductIcon,
  ReplyIcon,
  RoutingIcon,
  SendIcon,
  SettingsIcon,
  SuccessIcon,
  TaxIcon,
  TelephoneIcon,
  UploadIcon,
  UrlIcon,
  WarningIcon,
  WeightIcon,
} from "./components/icons/Icons";
// import NeutralBlueButton from "./components/buttons/NeutralBlueButton";
// import PinkButton from "./components/buttons/PinkButton";
// import BlackButton from "./components/buttons/BlackButton";
// import WarningButton from "./components/buttons/WarningButton";
// import SuccessButton from "./components/buttons/SuccessButton";
// import GreyButton from "./components/buttons/GreyButton";
// import TertiaryButton from "./components/buttons/TertiaryButton";

function App() {
  return (
    <>
      <div className="">
        <h1 className=" text-center text-grey-a-50">Maatson maritime</h1>
        <h1 className="text-red-600 text-center text-h1">Maatson maritime</h1>
        <h1 className="text-red-600 text-center rounded-sm text-h-2xl">
          Maatson maritime
        </h1>
        {/* Suriya button setup*/}
        <div className="container mx-auto my-10 flex gap-x-10 justify-center">
          {/* small */}
          <div className="flex flex-col gap-10 ">
            {/* primary */}
            <div className="flex flex-col gap-5 py-6">
              <SuccessButton label={"Send Email"} size={"s"} variant={""} />
              <SuccessButton
                label={"Send Email"}
                size={"s"}
                variant={""}
                disabled
              />
            </div>
            {/* secondary */}
            <div className="flex flex-col gap-5 py-6">
              <SuccessButton
                label={"Send Email"}
                size={"s"}
                variant={"secondary"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"s"}
                variant={"secondary"}
                disabled
              />
            </div>
            {/* outline */}
            <div className="flex flex-col gap-5 py-6">
              <SuccessButton
                label={"Send Email"}
                size={"s"}
                variant={"outline"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"s"}
                variant={"outline"}
                disabled
              />
            </div>
            {/* link */}
            <div className="flex flex-col py-6">
              <SuccessButton label={"Send Email"} size={"s"} variant={"link"} />
              <SuccessButton
                label={"Send Email"}
                size={"s"}
                variant={"link"}
                disabled
              />
            </div>
          </div>

          {/* medium */}
          <div className="flex flex-col gap-10">
            {/* primary */}
            <div className="flex flex-col gap-5 py-4">
              <SuccessButton label={"Send Email"} size={"m"} variant={""} />
              <SuccessButton
                label={"Send Email"}
                size={"m"}
                variant={""}
                disabled
              />
            </div>
            {/* secondary */}
            <div className="flex flex-col gap-5 py-4">
              <SuccessButton
                label={"Send Email"}
                size={"m"}
                variant={"secondary"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"m"}
                variant={"secondary"}
                disabled
              />
            </div>
            {/* outline */}
            <div className="flex flex-col gap-5 py-4">
              <SuccessButton
                label={"Send Email"}
                size={"m"}
                variant={"outline"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"m"}
                variant={"outline"}
                disabled
              />
            </div>
            {/* link */}
            <div className="flex flex-col py-4">
              <SuccessButton label={"Send Email"} size={"m"} variant={"link"} />
              <SuccessButton
                label={"Send Email"}
                size={"m"}
                variant={"link"}
                disabled
              />
            </div>
          </div>
          {/* large */}
          <div className="flex flex-col gap-10 ">
            {/* primary */}
            <div className="flex flex-col gap-5 py-3">
              <SuccessButton label={"Send Email"} size={"l"} variant={""} />
              <SuccessButton
                label={"Send Email"}
                size={"l"}
                variant={""}
                disabled
              />
            </div>
            {/* secondary */}
            <div className="flex flex-col gap-5 py-3">
              <SuccessButton
                label={"Send Email"}
                size={"l"}
                variant={"secondary"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"l"}
                variant={"secondary"}
                disabled
              />
            </div>
            {/* outline */}
            <div className="flex flex-col gap-5 py-3">
              <SuccessButton
                label={"Send Email"}
                size={"l"}
                variant={"outline"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"l"}
                variant={"outline"}
                disabled
              />
            </div>
            {/* link */}
            <div className="flex flex-col  py-3">
              <SuccessButton label={"Send Email"} size={"l"} variant={"link"} />
              <SuccessButton
                label={"Send Email"}
                size={"l"}
                variant={"link"}
                disabled
              />
            </div>
          </div>
          {/* double large */}
          <div className="flex flex-col gap-10">
            {/* primary */}
            <div className="flex flex-col gap-5">
              <SuccessButton label={"Send Email"} size={"xl"} variant={""} />
              <SuccessButton
                label={"Send Email"}
                size={"xl"}
                variant={""}
                disabled
              />
            </div>
            {/* secondary */}
            <div className="flex flex-col gap-5">
              <SuccessButton
                label={"Send Email"}
                size={"xl"}
                variant={"secondary"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"xl"}
                variant={"secondary"}
                disabled
              />
            </div>
            {/* outline */}
            <div className="flex flex-col gap-5">
              <SuccessButton
                label={"Send Email"}
                size={"xl"}
                variant={"outline"}
              />
              <SuccessButton
                label={"Send Email"}
                size={"xl"}
                variant={"outline"}
                disabled
              />
            </div>
            {/* link */}
            <div className="flex flex-col">
              <SuccessButton
                label={"Send Email"}
                size={"xl"}
                variant={"link"}
              />
              <SecondaryButton
                label={"Send Email"}
                size={"xl"}
                variant={"link"}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="text-center mb-2 flex gap-5 items-center">
          <span className="border px-8 py-3 bg-primary-gradient-1 rounded-md ">
            gradient
          </span>
          <span className="border px-8 py-3 bg-primary-gradient-2  rounded-md ">
            gradient
          </span>
          <span className="border px-8 py-3 bg-primary-gradient-3 rounded-md ">
            gradient
          </span>
          <span className="border px-8 py-3 bg-primary-gradient-4 rounded-md ">
            gradient
          </span>
          <span className="border px-8 py-3 bg-primary-gradient-5  rounded-md">
            gradient
          </span>
          <span className="border px-8 py-3 bg-primary-gradient-6 rounded-md ">
            gradient
          </span>
          <div className="flex flex-wrap gap-5">
            <EmployeeGroupIcon />
            <ImporterIcon />
            <ExporterIcon />
            <AccountDetailIcon />
            <BellIcon />
            <CloseSolidIcon />
            <CodeIcon />
            <CompanyIcon />
            <CrossIcon />
            <DeleteIcon />
            <DepartmentIcon />
            <EmailIcon />
            <ExcelIcon />
            <EyeClose />
            <EyeOpen />
            <FileIcon />
            <FollowUpIcon />
            <InvoiceIcon />
            <LocationIcon />
            <NvoccIcon />
            <PasswordIcon />
            <PhoneIcon />
            <PhoneOutlineIcon />
            <ProductIcon />
            <ReplyIcon />
            <RoutingIcon />
            <SendIcon />
            <SettingsIcon />
            <SuccessIcon />
            <TaxIcon />
            <TelephoneIcon />
            <UploadIcon />
            <UrlIcon />
            <WarningIcon />
            <WeightIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
