import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import GroupField from "./components/groupField/GroupField";
import {
  DepartmentIcon,
  EyeOpenIcon,
  PasswordIcon,
} from "./components/icons/Icons";
import { ToastContainer } from "react-toastify";
import SuccessChip from "./components/chips/SuccessChip";
import ErrorChip from "./components/chips/ErrorChip";
import {
  useErrorNotify,
  useInfoNotify,
  useSuccessNotify,
  useWarningNotify,
} from "./utils/toastutil";
import WarningChip from "./components/chips/WarningChip";
import BlueChip from "./components/chips/BlueChip";

function App() {
  const [data, setData] = useState({ name: "", email: "", department: "" });
  const handlechange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  const successToast = () => {
    // toast.success("success");
    useSuccessNotify({ heading: "Success", message: "youre successfull" });
  };
  const errorToast = () => {
    useErrorNotify({
      heading: "Invalid Email ",
      message: "This email is not registered. Please try again.",
    });
  };
  const warningToast = () => {
    useWarningNotify({
      heading: "Warning Email ",
      message: "This email is not registered. Please try again.",
    });
  };
  const infoToast = () => {
    useInfoNotify({
      heading: "Info Email ",
      message: "This email is not registered. Please try again.",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar
        icon={false}
        closeButton={false}
      />
      <div className="w-1/2 mx-auto flex flex-col gap-4 mt-5 ">
        <GroupField
          type={"text"}
          name={"name"}
          value={data.name}
          label={"username"}
          placeholder="username"
          onChange={handlechange}
          leftIcon={<DepartmentIcon color="#2C398F" />}
          error={false}
          errorMessage={""}
        />
        <GroupField
          type={"text"}
          name={"email"}
          label={"email"}
          value={data.email}
          onChange={handlechange}
          leftIcon={<PasswordIcon color="#2C398F" />}
          rightIcon={<EyeOpenIcon color="#2C398F" />}
          error={true}
          errorMessage={
            "Error please enter correctely Error please enter correctelyError please enter correctelyError please enter correctelyError please enter correctely"
          }
        />
        <GroupField
          type={"select"}
          name={"department"}
          label={"department"}
          value={data.department}
          placeholder="departments"
          onChange={handlechange}
          leftIcon={<DepartmentIcon color="#2C398F" />}
          error={false}
          errorMessage={""}
          options={[
            { label: "USA", value: "usa" },
            { label: "Canada", value: "canada" },
            { label: "Mexico", value: "mexico" },
          ]}
        />
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <div onClick={successToast}>
          <SuccessChip label={"Success Toast"} size={""} variant={"fill"} />
        </div>
        <div onClick={errorToast}>
          <ErrorChip label={"Error Toast"} size={""} variant={"fill"} />
        </div>
        <div onClick={warningToast}>
          <WarningChip label={"Error Toast"} size={""} variant={"fill"} />
        </div>
        <div onClick={infoToast}>
          <BlueChip label={"Info Toast"} size={""} variant={"fill"} />
        </div>
      </div>
    </>
  );
}

export default App;
