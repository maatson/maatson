import React, { useState } from "react";

interface BlueSwitchProps  {
  active : boolean;
  size?: string;
  onChange: () => void;
}


const BlueSwitch: React.FC<BlueSwitchProps> = ( {size, active, onChange }) => {
  const handleChange = () => {
    onChange();
  };
  return (
    <>
      <div
        className={`w-[40px] rounded-xl border p-1 bg-white ${
          active ? "border-blue flex justify-end" : "border-grey-ab-200"
        }  transition-all ease-out duration-500 cursor-pointer`}
        onClick={handleChange}
      >
        <div
          className={`w-4 h-4 ${
            active ? "bg-blue" : "bg-grey-ab-100"
          } transition-all ease-out duration-500 rounded-full cursor-pointer`}
        ></div>
      </div>
    </>
  );
};

export default BlueSwitch;
