import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SecondaryButton from "./components/buttons/SecondaryButton";
// import PrimaryButton from "./components/buttons/PrimaryButton";
import SuccessButton from "./components/buttons/SuccessButton";
import {
  AddIconIcon,
  AeroplaneIcon,
  AnalyticsIcon,
  BusinessIcon,
  CalenderIcon,
  CategoryIcon,
  ClockIcon,
  CloseIcon,
  ContainerIcon,
  ContainerSettingsIcon,
  DocumentIcon,
  DownArrowIcon,
  DownloadIcon,
  DropDownIcon,
  EditIcon,
  EmployeeGroupIcon,
  ExporterIcon,
  FilterIcon,
  FreightIcon,
  GlobalIcon,
  ImporterIcon,
  InfoIcon,
  LeftArrowIcon,
  LogoutIcon,
  MenuIcon,
  MessageIcon,
  NotesIcon,
  OperationsIcon,
  OptionsIcon,
  PriceTagIcon,
  PrintIcon,
  RangeCalenderIcon,
  RoadIcon,
  ScalePencilIcon,
  SearchIcon,
  ShipIcon,
  StarIcon,
  SunRiseIcon,
  TruckIcon,
  UserIcon,
} from "./components/icons/Icons";
// import NeutralBlueButton from "./components/buttons/NeutralBlueButton";
// import PinkButton from "./components/buttons/PinkButton";
// import BlackButton from "./components/buttons/BlackButton";
// import WarningButton from "./components/buttons/WarningButton";
// import SuccessButton from "./components/buttons/SuccessButton";
// import GreyButton from "./components/buttons/GreyButton";
// import TertiaryButton from "./components/buttons/TertiaryButton";
import PrimaryChip from "./components/chips/PrimaryChip";
import SecondaryChip from "./components/chips/SecondaryChip";
import TertiaryChip from "./components/chips/TertiaryChip";
import BlueChip from "./components/chips/BlueChip";
import BlackChip from "./components/chips/BlackChip";

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
        {/* Gradient setup */}
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
        </div>

        <div className="container mx-auto  flex gap-5 justify-center my-10">
          <EmployeeGroupIcon />
          <ImporterIcon />
          <ExporterIcon />
          <UserIcon />
          <CalenderIcon />
          <SunRiseIcon />
          <TruckIcon />
          <ContainerIcon />
          <AeroplaneIcon />
          <SearchIcon />
          <RoadIcon />
          <ShipIcon />
          <AnalyticsIcon />
          <MessageIcon />
          <ContainerSettingsIcon />
          <DocumentIcon />
          <EditIcon />
          <NotesIcon />
          <CloseIcon />
          <OptionsIcon />
          <BusinessIcon />
        </div>
        <div className="container mx-auto  flex gap-5 justify-center my-10">
          <PrintIcon />
          <DownloadIcon />
          <StarIcon />
          <LeftArrowIcon />
          <DownArrowIcon />
          <LogoutIcon />
          <DropDownIcon />
          <FreightIcon />
          <AddIconIcon />
          <FilterIcon />
          <MenuIcon />
          <PriceTagIcon />
          <RangeCalenderIcon />
          <GlobalIcon />
          <ScalePencilIcon />
          <ClockIcon />
          <InfoIcon />
          <CategoryIcon />
          <OperationsIcon />
        </div>

        {/* Chip setup */}
        <div className="container mx-auto py-10 flex flex-col gap-5 justify-center items-center">
          {/* fill */}
          <div className="flex flex-row gap-5">
            <div>
              <PrimaryChip label={"chip"} size={"s"} variant={"fill"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"m"} variant={"fill"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={""} variant={"fill"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"xl"} variant={"fill"} />
              <SecondaryChip label={"chip"} size={"xl"} variant={"fill"} />
              <TertiaryChip label={"chip"} size={"xl"} variant={"fill"} />
              <BlueChip label={"chip"} size={"xl"} variant={"fill"} />
              <BlackChip label={"chip"} size={"xl"} variant={"fill"} />
            </div>
          </div>
          {/* outline */}
          <div className="flex flex-row gap-5">
            <div>
              <PrimaryChip label={"chip"} size={"s"} variant={"outline"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"m"} variant={"outline"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={""} variant={"outline"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"xl"} variant={"outline"} />
            </div>
          </div>
          {/* mix */}
          <div className="flex flex-row gap-5">
            <div>
              <PrimaryChip label={"chip"} size={"s"} variant={"mix"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"m"} variant={"mix"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={""} variant={"mix"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"xl"} variant={"mix"} />
            </div>
          </div>
          {/* primary */}
          <div className="flex flex-row gap-5">
            <div>
              <PrimaryChip label={"chip"} size={"s"} variant={"primary"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"m"} variant={"primary"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={""} variant={"primary"} />
            </div>
            <div>
              <PrimaryChip label={"chip"} size={"xl"} variant={"primary"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
