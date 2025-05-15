import React from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const DashBoard: React.FC = () => {
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Layout */}
      <div className="flex w-full relative">
        {/* Sidebar */}
        <div className="w-[20%] min-h-screen h-full fixed top-16 z-10 bg-primary-gradient-4 overflow-y-auto custom-scrollbar">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="w-[80%] ml-[20%]">
          <div className=" bg-primary-50 min-h-screen h-full px-5 pt-4 flex flex-col gap-4 custom-scrollbar">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
