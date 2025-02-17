import React from "react";
import shipping from "/images/shipping.png";
interface CredentialsLayoutProps {
  children: React.ReactNode;
}

const CredentialsLayout: React.FC<CredentialsLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className=" w-full p-10 bg-primary-gradient-6  ">
        <div className="px-8 gap-6 flex flex-col text-grey-aw-50">
          <div className="w-[320px] mx-auto">
            <img src={shipping} alt="Banner" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="h5 font-semibold">
              Maatson Maritime Intl (OPC) Pvt Ltd
            </h5>
            <h2 className="text-secondary font-semibold h2">
              Seamless Operations, Stronger Teamwork
            </h2>
          </div>
          <h6 className="h6">
            Welcome to the Maatson Maritime Employee Portal. This platform is
            designed to help our team efficiently manage logistics, track
            container operations, and streamline internal workflows.
          </h6>
        </div>
      </div>
      <div className="p-10 border w-full ">{children}</div>
    </div>
  );
};

export default CredentialsLayout;
