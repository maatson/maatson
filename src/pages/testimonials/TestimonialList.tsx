import React, { ChangeEvent, useState } from "react";
import GroupField from "../../components/groupField/GroupField";
import { AddIcon, ExcelIcon, SearchIcon } from "../../components/icons/Icons";
import SuccessButton from "../../components/buttons/SuccessButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";
import CustomPagination from "../../components/pagination/CustomPagination";
import TestimonialsForm from "./TestimonialsForm";

const TestimonialList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const [data, setData] = useState({ search: "" });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [testimonialsData, setTestimonialsData] = useState<any>([
    {
      id: 1,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 2,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 3,
      companyName: "Hapag Lloyd",
      rating: "2",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 4,
      companyName: "Hapag Lloyd",
      rating: "3",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 5,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 6,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 7,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 8,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 9,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 10,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
    {
      id: 11,
      companyName: "Hapag Lloyd",
      rating: "4",
      feedback:
        "The freight forwarding service was exceptional. Our shipments arrived on time and in perfect condition.",
    },
  ]);
  
  const handleEdit = (id: string | number) => {
    setIsOpen(true);
    console.log("Selected testimonial id : ",id);
    // alert("Selected testimonial id : "+id);
  };
  const handleDelete = (id: string | number) => {
    window.confirm("Confirm to delete this testimonial with id "+id + "?");
  };

  // Pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    console.log("Value ", value);
  };
  const startIndex = (page - 1) * itemsPerPage; //(1-1)* 12 = 0, (2-1)* 12 = 12, (3-1)* 12 = 24 ...
  const paginatedData = testimonialsData.slice(
    startIndex,
    startIndex + itemsPerPage
  ); //slice(0,11), slice(12,23), slice(24,35) ...

  return (
    <>
      <div className="rounded-xs flex flex-col gap-2">
        <div className=" rounded-t-xs flex justify-between p-3 bg-grey-aw-50 shadow-lg items-center">
          <div className="flex gap-6 items-center">
            <div className="text-lg font-semibold text-grey-ab-900">
              Testimonials List
            </div>
            <GroupField
              label={""}
              type={"text"}
              placeholder={"Search"}
              name={"search"}
              value={data.search}
              onChange={handleChange}
              rightIcon={<SearchIcon size={22} color="#6A6A6A" />}
              error={false}
              errorMessage={""}
              parentStyle="max-w-[240px]"
            />
          </div>
          <div className="flex gap-6">
            <div>
              <SuccessButton
                label={"Export"}
                size={"l"}
                variant={"primary"}
                rightIcon={<ExcelIcon color="#FCFCFC" />}
              />
            </div>
            <div onClick={openPopup}>
              <PrimaryButton
                label={"Add Testimonials"}
                size={"l"}
                variant={"primary"}
                leftIcon={<AddIcon color="#FCFCFC" />}
              />
            </div>
          </div>
        </div>

        {/* cards loop */}
        <div className="grid grid-cols-3 gap-6 p-4  ">
          {paginatedData.map((item : any) => (
            <TestimonialCard
              onDelete={() => handleDelete(item.id)}
              onEdit={() => handleEdit(item.id)}
              id={item.id}
              companyName={item.companyName}
              rating={item.rating}
              feedback={item.feedback}
            />
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-between py-4 px-2 items-center">
          <div className="text-xs text-grey-ab-200">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, testimonialsData.length)} of{" "}
            {testimonialsData.length} Entries
          </div>
          <CustomPagination
            totalItems={testimonialsData.length}
            itemsPerPage={itemsPerPage}
            currentPage={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Popup  */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <TestimonialsForm onClose={closePopup} />
        </div>
      )}
    </>
  );
};

export default TestimonialList;
