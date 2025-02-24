import React from "react";
import EmployeeList from "../../../components/hrm/employees/EmployeeList";
import EmployeeForm from "../../../components/hrm/employees/EmployeeForm";
import PageHeader from "../../../components/header/PageHeader";

const Employees: React.FC = () => {
  return (
    <>
      <div className="w-full bg-primary-50 flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-4 py-4 px-5">
          <PageHeader
            breadCrums={["Home", "HRM", "Employee"]}
            heading={"Employees"}
          />

          <EmployeeList />
        </div>

        {/* Footer */}
        <div>footer</div>
      </div>
    </>
  );
};

export default Employees;
