import React from "react";
import { Pagination } from "@mui/material";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        size="small"
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
          "& .Mui-selected": {
            backgroundColor: "#FDFDFD",
            color: "#2C398F",
            border: "1px solid #2C398F",
            "&:hover": {
              backgroundColor: "#FDFDFD",
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "#212121",
            fontSize: "10px",
            padding: "10px 5px 14px 5px",
            fontWeight: 800,
            borderRadius: "4px",
            border: "1px solid rgba(206, 206, 206, 1)",
          },
          "& .MuiPaginationItem-previousNext": {
            backgroundColor: "#FDFDFD",
            color: "#171717",
            border: "1px solid #171717",
            "&:hover": {
              border: "1px solid rgba(206, 206, 206, 1)",
            },
          },
          "& .MuiPaginationItem-previousNext.Mui-disabled": {
            backgroundColor: "#FDFDFD",
            color: "#171717",
            border: "1px solid #171717",
            opacity: 1,
          },
        }}
      />
    </>
  );
};

export default CustomPagination;
