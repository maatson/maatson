import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GreyButton from "../../../components/buttons/GreyButton";
import {
  AccountDetailIcon,
  CompanyIcon,
  DeleteIcon,
  DepartmentIcon,
  DocumentIcon,
  EmailIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  LocationIcon,
  PasswordIcon,
  PhoneIcon,
  RegistrationIcon,
  UploadIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import GroupField from "../../../components/groupField/GroupField";
import FileUpload from "../../../components/fileUpload/FileUpload";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import CustomTable from "../../../components/table/CustomTable";
import DocumentForm from "./DocumentForm";
import { Link } from "react-router-dom";

// Define table model
interface RowData {
  id: string | number;
  documentName: string;
  documentFile: React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "documentName", label: "Document Name" },
  { id: "documentFile", label: "Document File" },
  { id: "action", label: "Action", align: "center", minWidth: 130 },
];

const EmployeeForm: React.FC = () => {
  const [eyeIcon, setEyeIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const [data, setData] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    image: null as File | null,
    fullName: "",
    dateofBirth: "",
    gender: "",
    personalEmail: "",
    personalMobileNo: "",
    street: "",
    city: "",
    doorNo: "",
    postalCode: "",
    country: "",
    contactPersonName: "",
    contactPersonEmail: "",
    contactPersonMobileNo: "",
    officeLocation: "",
    joiningDate: "",
    designation: "",
    department: "",
    employeeType: "",
    employeeResume: null as File | null,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (name: "employeeResume", file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("data :", data);
  };

  // My table format
  const [rows, setRows] = useState<RowData[]>([]);
  const createData = (items: any) => {
    const { id, fileName } = items;
    const documentFile = (
      <div className="flex gap-3 py-1 px-2 items-center justify-start">
        <DocumentIcon color="#2C398F" />
        <div className="text-grey-ab-800">{fileName}.pdf</div>
      </div>
    );
    const actions = (
      <div className="flex gap-[10px] py-1 px-2 justify-center items-center">
        <div className="bg-error-50 p-1 rounded-xs cursor-pointer">
          <DeleteIcon size={16} color="#810001" />
        </div>
        <div className="bg-blue-50 p-1 rounded-xs cursor-pointer">
          <DocumentIcon size={16} color="#00508C" />
        </div>
      </div>
    );
    const updatedData = {
      id: id,
      documentName: items?.documentName,
      documentFile: documentFile,
      action: actions,
    };

    return updatedData;
  };
  const tableData = [
    {
      documentName: "Pan Card",
      fileName: "User Pan Card",
    },
    {
      documentName: "Aadhaar Card",
      fileName: "User Aadhaar Card",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchData = useCallback(() => {
    const arr = tableData.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes

  return (
    <>
      <div className="w-full rounded-xs py-4 px-8 flex flex-col gap-8 bg-grey-aw-50 shadow-lg">
        {/* heading section */}
        <p className="py-4 px-3 text-lg font-bold text-grey-ab-900">
          Employee Form
        </p>

        {/* form section */}
        <div className="flex flex-col gap-8">
          {/* employee registration */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <RegistrationIcon />
                <p className="font-semibold text-grey-ab-800">
                  Employee Registration
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>
            {/* user name */}
            <GroupField
              label={"User Name*"}
              type={"text"}
              placeholder={"Enter User Name"}
              name={"userName"}
              value={data.userName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<UserIcon color="#2C398F" />}
              parentStyle="max-w-[400px] w-full"
            />

            {/* email , mobile number */}
            <div className="flex gap-4">
              <GroupField
                label={"Email*"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<EmailIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Mobile Number"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                name={"mobileNo"}
                value={data.mobileNo}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>

            {/* password, confirm password */}
            <div className="flex gap-4">
              <GroupField
                type={eyeIcon ? "text" : "password"}
                name={"password"}
                value={data.password}
                onChange={handleChange}
                leftIcon={<PasswordIcon color="#2C398F" />}
                rightIcon={
                  eyeIcon ? (
                    <EyeOpenIcon color="#2C398F" />
                  ) : (
                    <EyeCloseIcon color="#2C398F" />
                  )
                }
                onClickRightIcon={() => setEyeIcon(!eyeIcon)}
                error={false}
                errorMessage={""}
                label={"Password*"}
                placeholder={"Enter Password"}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Confirm Password"}
                type={eyeIcon ? "text" : "password"}
                placeholder={"Enter Confirm Password"}
                name={"confirmPassword"}
                value={data.confirmPassword}
                onChange={handleChange}
                rightIcon={
                  eyeIcon ? (
                    <EyeOpenIcon color="#2C398F" />
                  ) : (
                    <EyeCloseIcon color="#2C398F" />
                  )
                }
                onClickRightIcon={() => setEyeIcon(!eyeIcon)}
                error={false}
                errorMessage={""}
                leftIcon={<PasswordIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>
          </div>

          {/* employee information */}
          <div className="flex flex-col gap-6">
            {/* employee information */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <UserIcon />
                  <p className="font-semibold text-grey-ab-800">
                    Employee Information
                  </p>
                </div>
                <div className="border-t border-t-grey-ab-100 flex flex-col gap-3"></div>
              </div>

              <ImageUpload
                onImageChange={handleImageChange}
                label={"Upload Your Profile Picture"}
              />

              <div className="flex gap-4">
                <GroupField
                  label={"Full Name*"}
                  type={"text"}
                  placeholder={"Enter Full Name"}
                  name={"fullName"}
                  value={data.fullName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Date of Birth*"}
                  type={"date"}
                  placeholder={"DD/MM/YYYY"}
                  name={"dateofBirth"}
                  value={data.dateofBirth}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
            </div>

            {/* gender */}
            <div className="flex flex-col gap-2">
              <p className="text-grey-ab-600">Gender*</p>
              <div className="flex gap-8">
                <div className="flex gap-3 font-semibold text-grey-ab-800">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value={"male"}
                    checked={data.gender === "male"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-3 font-semibold text-grey-ab-800">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value={"female"}
                    checked={data.gender === "female"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="flex gap-3 font-semibold text-grey-ab-800">
                  <input
                    type="radio"
                    id="others"
                    name="gender"
                    value={"others"}
                    checked={data.gender === "others"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>

            {/* email & mobile number  */}
            <div className="flex gap-4">
              <GroupField
                label={"Personal Email*"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"personalEmail"}
                value={data.personalEmail}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<EmailIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Personal Mobile Number*"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                name={"personalMobileNo"}
                value={data.personalMobileNo}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>

            {/* address */}
            <div className="flex flex-col gap-4">
              <p className="text-grey-ab-500">Employee Address*</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4">
                  <GroupField
                    label={"Building/Door Number"}
                    type={"text"}
                    placeholder={"Enter Building/Door Number"}
                    name={"doorNo"}
                    value={data.doorNo}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                  <GroupField
                    label={"Street*"}
                    type={"text"}
                    placeholder={"Enter Street"}
                    name={"street"}
                    value={data.street}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                </div>

                {/* 3 input section */}
                <div className="flex gap-[18px]">
                  <GroupField
                    label={"City*"}
                    type={"text"}
                    placeholder={"Enter City"}
                    name={"city"}
                    value={data.city}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[260px] w-full"
                  />
                  <GroupField
                    label={"Postal Code*"}
                    type={"text"}
                    placeholder={"Enter Postal Code"}
                    name={"postalCode"}
                    value={data.postalCode}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[260px] w-full"
                  />
                  <GroupField
                    label={"Country "}
                    type={"text"}
                    placeholder={"Enter Country"}
                    name={"country"}
                    value={data.country}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[260px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* emergency contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <PhoneIcon />
                <p className="font-semibold text-grey-ab-800">
                  Emergency Contact Details
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100 flex flex-col gap-3"></div>
            </div>

            {/* 2nd */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <GroupField
                  label={"Contact Person Name"}
                  type={"text"}
                  placeholder={"Enter Full Name"}
                  name={"contactPersonName"}
                  value={data.contactPersonName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Contact Person Email"}
                  type={"email"}
                  placeholder={"Enter Email"}
                  name={"contactPersonEmail"}
                  value={data.contactPersonEmail}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<EmailIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <GroupField
                label={"Contact Person Mobile Number"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                name={"contactPersonMobileNo"}
                value={data.contactPersonMobileNo}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>
          </div>

          {/* company details */}
          <div className="flex flex-col gap-6">
            {/* head */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <CompanyIcon />
                <p className="font-semibold text-grey-ab-800">
                  Company Details
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100 flex flex-col gap-3"></div>
            </div>

            <div className="flex flex-col gap-4">
              {/* office loaction, joining */}
              <div className="flex gap-4">
                <GroupField
                  label={"Office Location*"}
                  type={"text"}
                  placeholder={"Enter Office Location"}
                  name={"officeLocation"}
                  value={data.officeLocation}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<LocationIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Joining Date*"}
                  type={"date"}
                  placeholder={"DD/MM/YYYY"}
                  name={"joiningDate"}
                  value={data.joiningDate}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>

              {/* designation  */}
              <div className="flex gap-4">
                <GroupField
                  label={"Designation"}
                  type={"select"}
                  placeholder={"Choose Designation"}
                  name={"designation"}
                  value={data.designation}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<AccountDetailIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Department"}
                  type={"text"}
                  placeholder={"Choose Department"}
                  name={"department"}
                  value={data.department}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<DepartmentIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>

              {/* employee type */}
              <div className="flex flex-col gap-2">
                <p className="text-grey-ab-600">Employee Type*</p>
                <div className="flex gap-8">
                  <div className="flex gap-3 font-semibold text-grey-ab-800">
                    <input
                      type="radio"
                      id="fullTime"
                      name="employeeType"
                      className="w-5 h-5"
                    />
                    <label htmlFor="fullTime">Full- Time</label>
                  </div>
                  <div className="flex gap-3 font-semibold text-grey-ab-800">
                    <input
                      type="radio"
                      id="fullTime"
                      name="employeeType"
                      className="w-5 h-5"
                    />
                    <label htmlFor="fullTime">Part- Time</label>
                  </div>
                  <div className="flex gap-3 font-semibold text-grey-ab-800">
                    <input
                      type="radio"
                      id="internship"
                      name="employeeType"
                      className="w-5 h-5"
                    />
                    <label htmlFor="internship">Internship</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* employee documents */}
          <div className="flex flex-col gap-6">
            {/* head */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <DocumentIcon />
                <p className="font-semibold text-grey-ab-800">
                  Employee Documents
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100 flex flex-col gap-3"></div>
            </div>

            {/* resume doc */}
            <div className="max-w-[816px]">
              <FileUpload
                onFileChange={(file) =>
                  handleFileChange("employeeResume", file)
                }
                label={"Resume"}
                fileName={data.employeeResume?.name}
              />
            </div>

            {/* verification doc */}
            <div className="flex flex-col ">
              <div className="flex justify-between py-3 px-4 bg-grey-50">
                <p className="text-lg font-bold text-grey-ab-800">
                  Verification Document
                </p>
                <div onClick={openPopup}>
                  <GreyButton
                    label={"Add Document"}
                    size={"s"}
                    variant={""}
                    rightIcon={<UploadIcon size={16} />}
                  />
                </div>
              </div>
              <CustomTable columns={columns} rows={rows} isCheckbox={false} />
            </div>
          </div>
        </div>

        {/* button section */}
        <div className="flex gap-6 items-center  justify-end">
          <div>
            <Link to={"/hrm/employees"}>
              <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
            </Link>
          </div>

          <div onClick={handleSubmit}>
            <PrimaryButton
              label={"Save Details"}
              size={"xl"}
              variant={"primary"}
            />
          </div>
        </div>
      </div>

      {/* Popup  */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <DocumentForm onClose={closePopup} />
        </div>
      )}
    </>
  );
};

export default EmployeeForm;
