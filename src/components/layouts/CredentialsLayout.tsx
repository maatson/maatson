import React from "react";

interface CredentialsLayoutProps {
  children: React.ReactNode;
}

const CredentialsLayout: React.FC<CredentialsLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="border-2 w-full p-10 bg-primary-gradient-6 "></div>
      <div className="p-20  border w-full ">{children}</div>
    </div>
  );
};

export default CredentialsLayout;
