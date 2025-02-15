import React from "react";
import "./App.css";
import Login from "./components/login/Login";

const App: React.FC = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <Login />
      </div>
    </>
  );
};

export default App;
