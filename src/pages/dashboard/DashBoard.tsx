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
      <div className="h-16 "></div>
      <div className="flex items-start w-full relative custom-scrollbar ">
        <div className="w-full max-w-[20%]  min-h-screen h-full"></div>
        <div className="w-full max-w-[20%] min-h-screen  h-full fixed bg-primary-gradient-4 overflow-y-auto">
          <SideBar />
        </div>
        <div className="w-full max-w-[80%]  h-full bg-primary-50 break-after-all flex mx-auto  ">
          <div className="flex flex-col justifiy-between min-h-screen h-full w-full ps-4 pe-5 pt-4 gap-4 custom-scrollbar">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
