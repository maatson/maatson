import React from "react";
import FollowUps from "../../components/followups/FollowUps";

const PageNotFound: React.FC = () => {
  return (
    <>
      {/* <p>PageNotFound 404</p>; */}
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
