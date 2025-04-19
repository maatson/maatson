import React from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes";
import ScrollTop from "./utils/ScrollTop";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar
        icon={false}
        closeButton={false}
      />
      <ScrollTop>
        <AppRoutes />
      </ScrollTop>
    </>
  );
};

export default App;
