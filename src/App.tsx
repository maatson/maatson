import React from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar
        icon={false}
        closeButton={false}
      />
      <AppRoutes />
    </>
  );
};

export default App;
