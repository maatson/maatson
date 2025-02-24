import React from "react";
import EmployeeList from "../../../components/hrm/employees/EmployeeList";
import EmployeeForm from "../../../components/hrm/employees/EmployeeForm";

const EmployeeListPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="h-[68px] w-full bg-grey-aw-50"></div>

      {/* Main layout */}
      <div className="flex">
        {/* SideBar */}
        <div className="max-w-[260px] w-full bg-primary-gradient-4">
        </div>

        <div className="w-full bg-primary-50 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4 py-4 px-5">
            <div className="flex justify-between py-2 px-3">
              <h5 className="h5 font-bold text-grey-ab-900">Employees</h5>
              <div className="flex gap-1">{/* Breadcrumbs here */}</div> 
            </div>

            {/* EmployeeList Component */}
            {/* <EmployeeList /> */}
            <EmployeeForm />
          </div>

          {/* Footer */}
          <div className="py-1 bg-primary-100 text-center">Footer</div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListPage;
