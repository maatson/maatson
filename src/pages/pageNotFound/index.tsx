import React, { useState } from "react";
import FollowUps from "../../components/followups/FollowUps";

const PageNotFound: React.FC = () => {
  return (
    <>
      {/* <p>PageNotFound 404</p>; */}
      <div className="px-10 w-fit mx-auto">
        <FollowUps />
      </div>
    </>
  );
};

export default PageNotFound;
