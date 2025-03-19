import React, { useState } from "react";
// import FollowUps from "../../components/followups/FollowUps";

type Employee = {
  employeeName: string;
  department: string;
  email: string;
  mobileNumber: string;
  alternativeContact: string;
  countryOfOperation: string;
};

const PageNotFound: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data] = useState<Employee[]>([
    {
      employeeName: "Barmaleeva N",
      department: "Sales",
      email: "barmaleeva.nute@gmail.com",
      mobileNumber: "9700960035",
      alternativeContact: "900560035",
      countryOfOperation: "India",
    },
    {
      employeeName: "Thirupathi V",
      department: "Marketing",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "7700960035",
      alternativeContact: "7700999035",
      countryOfOperation: "China",
    },
    {
      employeeName: "Krishnan K",
      department: "Development",
      email: "krishnan.nute@gmail.com",
      mobileNumber: "6600960035",
      alternativeContact: "9900960035",
      countryOfOperation: "India",
    },
  ]);

  // 🔍 Filter data based on search query
  const filteredData = data.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const flter = data.filter((object) => object.employeeName.toLowerCase().includes(searchQuery.toLowerCase()));
  const filter = data.filter((object) => [object.employeeName, object.email, object.department].some((value) => value.toLowerCase().includes(searchQuery.toLowerCase())))
  const filters = data.filter((object) => Object.values(object).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase())))

  // console.log("1. ",(data.map((object) => object.employeeName)));
  console.log("2. ",(data.map((object) => Object.values(object))));

  const filteredData2 = data.filter((employee) =>
    employee.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredData3 = data.filter((employee) =>
    [employee.employeeName, employee.department, employee.email, employee.countryOfOperation]
      .some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* <p>PageNotFound 404</p>; */}
      {/* <div className="px-10 w-fit mx-auto"> */}
      {/* <FollowUps /> */}
      {/* </div> */}

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>

        {/* 🔍 Search Input */}
        <input
          type="text"
          placeholder="Search employees..."
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* 📋 Table */}
        <div className="overflow-x-auto">
          {filteredData.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Department</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Mobile</th>
                  <th className="py-2 px-4 border">Alternative Contact</th>
                  <th className="py-2 px-4 border">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((employee, index) => (
                  <tr key={index} className="border">
                    <td className="py-2 px-4 border">
                      {employee.employeeName}
                    </td>
                    <td className="py-2 px-4 border">{employee.department}</td>
                    <td className="py-2 px-4 border">{employee.email}</td>
                    <td className="py-2 px-4 border">
                      {employee.mobileNumber}
                    </td>
                    <td className="py-2 px-4 border">
                      {employee.alternativeContact}
                    </td>
                    <td className="py-2 px-4 border">
                      {employee.countryOfOperation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center">
              No matching employees found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
