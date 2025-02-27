import React, { useState } from "react";
import BlackChip from "../../chips/BlackChip";
import EmployeeImage from "/images/sample/employee.png";
import GradientChip from "../../chips/GradientChip";
import PrimaryChip from "../../chips/PrimaryChip";
import { EmailIcon, PhoneIcon } from "../../icons/Icons";
import CustomPagination from "../../pagination/CustomPagination";

interface Employee {
  id: number;
  name: string;
  image?: string; //temporary i set it for optional
  department: string;
  branchLocation: string;
  email: string;
  phone: string;
  experience: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Cooper, Kristin",
    image: "/images/sample/employee1.png",
    department: "CEO",
    branchLocation: "Chennai, India",
    email: "kristin.cooper@email.com",
    phone: "+61 2 6178 5284",
    experience: "3+",
  },
  {
    id: 2,
    name: "Smith, John",
    image: "/images/sample/employee2.png",
    department: "Market Manager",
    branchLocation: "Mumbai, India",
    email: "john.smith@email.com",
    phone: "+61 3 5678 4321",
    experience: "5+",
  },
  {
    id: 3,
    name: "Doe, Jane",
    image: "/images/sample/employee3.png",
    department: "HR Executive",
    branchLocation: "Delhi, India",
    email: "jane.doe@email.com",
    phone: "+61 4 9876 1234",
    experience: "2+",
  },
  {
    id: 4,
    name: "Williams, David",
    image: "/images/sample/employee4.png",
    department: "Director",
    branchLocation: "Bangalore, India",
    email: "david.williams@email.com",
    phone: "+61 5 3456 7890",
    experience: "8+",
  },
  {
    id: 5,
    name: "Brown, Emily",
    image: "/images/sample/employee5.png",
    department: "HR Executive",
    branchLocation: "Hyderabad, India",
    email: "emily.brown@email.com",
    phone: "+61 6 2345 6789",
    experience: "4+",
  },
  {
    id: 6,
    name: "Johnson, Michael",
    image: "/images/sample/employee6.png",
    department: "Software Engineer",
    branchLocation: "Pune, India",
    email: "michael.johnson@email.com",
    phone: "+61 7 1234 5678",
    experience: "6+",
  },
  {
    id: 7,
    name: "Davis, Laura",
    image: "/images/sample/employee7.png",
    department: "Product Manager",
    branchLocation: "Kolkata, India",
    email: "laura.davis@email.com",
    phone: "+61 8 8765 4321",
    experience: "7+",
  },
  {
    id: 8,
    name: "Martinez, Robert",
    image: "/images/sample/employee8.png",
    department: "QA Analyst",
    branchLocation: "Ahmedabad, India",
    email: "robert.martinez@email.com",
    phone: "+61 9 5678 1234",
    experience: "3+",
  },
  {
    id: 9,
    name: "Clark, Sophia",
    image: "/images/sample/employee9.png",
    department: "UX Designer",
    branchLocation: "Jaipur, India",
    email: "sophia.clark@email.com",
    phone: "+61 10 3456 7890",
    experience: "5+",
  },
  {
    id: 10,
    name: "Rodriguez, Daniel",
    image: "/images/sample/employee10.png",
    department: "Sales Manager",
    branchLocation: "Lucknow, India",
    email: "daniel.rodriguez@email.com",
    phone: "+61 11 2345 6789",
    experience: "8+",
  },
  {
    id: 11,
    name: "Garcia, Olivia",
    image: "/images/sample/employee11.png",
    department: "Marketing Lead",
    branchLocation: "Indore, India",
    email: "olivia.garcia@email.com",
    phone: "+61 12 1234 5678",
    experience: "4+",
  },
  {
    id: 12,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 13,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 14,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 15,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 16,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 17,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 18,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 19,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 20,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 21,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 22,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 23,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 24,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 25,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 26,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 27,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 28,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 29,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 30,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 31,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 32,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 33,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 34,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 35,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 36,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 37,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 38,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 39,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 40,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 41,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 42,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 43,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 44,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 45,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 46,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 47,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 48,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 49,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 50,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 51,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 52,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 53,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 54,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 55,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 56,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 57,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 58,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 59,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 60,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 61,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 62,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 63,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 64,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 65,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 66,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 67,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
  {
    id: 68,
    name: "Lopez, Ethan",
    image: "/images/sample/employee12.png",
    department: "Finance Manager",
    branchLocation: "Bhopal, India",
    email: "ethan.lopez@email.com",
    phone: "+61 13 8765 4321",
    experience: "6+",
  },
];

const EmployeeCard: React.FC = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log("Value ", value);
  };
  const startIndex = (page - 1) * itemsPerPage; //(1-1)* 12 = 0, (2-1)* 12 = 12, (3-1)* 12 = 24 ...
  const paginatedEmployees = employees.slice(
    startIndex,
    startIndex + itemsPerPage
  ); //slice(0,11), slice(12,23), slice(24,35) ...

  return (
    <>
      <div className="py-4 px-2 grid grid-cols-3 xl:grid-cols-4 gap-3 items-center">
        {paginatedEmployees.map((employee) => (
          <div
            key={employee.id}
            className="bg-grey-aw-50 rounded-sm flex flex-col gap-3 shadow-lg p-3 max-w-[245px] w-full mx-auto"
          >
            <div className="flex justify-between">
              <div>
                <input type="checkbox" className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="xs-3">Experience</span>
                <div className="flex justify-end">
                  <BlackChip
                    label={employee.experience}
                    size={"s"}
                    variant={"mix"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="flex flex-col gap-2 items-center">
                <div className="w-16 h-16">
                  <img
                    src={EmployeeImage}
                    alt={employee.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-center text-grey-ab-800 font-semibold">
                  {employee.name}
                </div>
              </div>
              <div className="flex gap-1">
                <GradientChip
                  label={employee.department}
                  size={"s"}
                  variant={"fill"}
                />
                <PrimaryChip
                  label={"Department"}
                  size={"s"}
                  variant={"primary"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 rounded-xs p-2 bg-grey-100">
              <div className="flex justify-between items-center">
                <p className="xs-2 text-grey-ab-400">Office Location</p>
                <PrimaryChip
                  label={employee.branchLocation}
                  size={"m"}
                  variant={"mix"}
                />
              </div>
              <div className="flex gap-3">
                <EmailIcon size="16px" color="#2C398F" />
                <p className="text-xs text-grey-ab-400">{employee.email}</p>
              </div>
              <div className="flex gap-3">
                <PhoneIcon size="16px" color="#2C398F" />
                <p className="text-xs text-grey-ab-400">{employee.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-between py-4 px-2 items-center">
        <div className="text-xs text-grey-ab-200">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, employees.length)} of{" "}
          {employees.length} Entries
        </div>
        <CustomPagination
          totalItems={employees.length}
          itemsPerPage={itemsPerPage}
          currentPage={page}
          handlePageChange={handleChange}
        />
        {/* <Pagination
          count={Math.ceil(employees.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          size="small"
          className="text-primary-300"
          siblingCount={0}
          boundaryCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "10px",
              color: "#212121",
              backgroundColor: "#FDFDFD",
              border: "1px solid rgba(206, 206, 206, 1)",
              fontWeight: 800,
              lineHeight: 0,
              "&:hover": {
                backgroundColor: "#C4C8E4",
              },
            },
            // selected page
            "& .Mui-selected": {
              backgroundColor: "#FDFDFD",
              color: "#2C398F",
              border: "1px solid #2C398F",
              "&:hover": {
                backgroundColor: "#FDFDFD",
              },
            },
            // 3 dots section
            "& .MuiPaginationItem-ellipsis": {
              color: "#212121",
              fontSize: "10px",
              padding: "10px 5px 14px 5px",
              fontWeight: 800,
              borderRadius: "4px",
              border: "1px solid rgba(206, 206, 206, 1)",
            },
            // left , right arrow buttons
            "& .MuiPaginationItem-previousNext": {
              backgroundColor: "#FDFDFD",
              color: "#171717",
              border: "1px solid #171717",
              "&:hover": {
                border: "1px solid rgba(206, 206, 206, 1)",
              },
            },
            // disabled left, rigth buttons
            "& .MuiPaginationItem-previousNext.Mui-disabled": {
              backgroundColor: "#FDFDFD",
              color: "#171717",
              border: "1px solid #171717",
              opacity: 1,
            },
          }}
        /> */}
      </div>
    </>
  );
};

export default EmployeeCard;
