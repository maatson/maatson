import React from "react";
import FollowUps from "../../components/followups/FollowUps";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import Footer from "../../components/footer/Footer";
import AddSchedule from "../customerService/sea-air-schedule/sea-freight/updateSchedule/AddSeaScheduleForm";

const PageNotFound: React.FC = () => {
  return (
    <>
       <p>PageNotFound 404</p>;
      <div className="px-10 w-fit mx-auto">
        <FollowUps
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </>
  );
};

export default PageNotFound;
