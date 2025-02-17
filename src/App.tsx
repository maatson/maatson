import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import GroupField from "./components/groupField/GroupField";
import Login from "./pages/suriya/login/login";
import {
  DepartmentIcon,
  EyeOpenIcon,
  PasswordIcon,
} from "./components/icons/Icons";

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

  return (
    <>
      <div className="w-1/2 mx-auto flex flex-col gap-4 mt-5">
        <GroupField
          type={"text"}
          name={"name"}
          value={data.name}
          label={"username"}
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
          errorMessage={"Error please enter correctely"}
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

      {/* Login */}
      <div className="w-1/2 mx-auto flex flex-col gap-4 mt-10 px-20">
        <Login />
      </div>
    </>
  );
}

export default App;
