import React from "react";

const ProfileSubHeaders: React.FC<{
  title: string;
  icon: React.ReactNode;
  titleStyle?: string;
}> = ({ title, icon, titleStyle }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          {icon}
          <p className={`font-semibold ${titleStyle}`} >{title}</p>
        </div>
        <div className="border-t border-t-grey-ab-100"></div>
      </div>
    </>
  );
};

export default ProfileSubHeaders;
