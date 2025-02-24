import React from "react";
import shipping from "/images/shipping.png";
interface CredentialsLayoutProps {
  children: React.ReactNode;
}

const CredentialsLayout: React.FC<CredentialsLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className=" w-full px-10 flex items-center bg-primary-gradient-6 ">
        <div className="px-8 gap-4 flex flex-col text-grey-aw-50">
          <div className="w-[280px] mx-auto">
            <img src={shipping} alt="Banner" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="h6 font-bold">
              Maatson Maritime Intl (OPC) Pvt Ltd
            </h6>
            <h3 className="text-secondary font-bold h3">
              Seamless Operations, Stronger Teamwork
            </h3>
          </div>
          <h6 className="text-sm">
            Welcome to the Maatson Maritime Employee Portal. This platform is
            designed to help our team efficiently manage logistics, track
            container operations, and streamline internal workflows.
          </h6>
        </div>
      </div>
      <div className="px-20 py-10 w-full flex items-center ">{children}</div>
    </div>
  );
};

export default CredentialsLayout;
