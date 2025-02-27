import React from "react";
import Pagination from "@mui/material/Pagination";

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = React.memo(
  ({ totalItems, itemsPerPage, currentPage, handlePageChange }) => {
    return (
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded" // Rounded pagination buttons
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
          "& .Mui-selected": {
            backgroundColor: "#9ea4cf !important",
            color: "#fdfdfd",
            border: "1px solid #2C398F",
            "&:hover": {
              backgroundColor: "#9ea4cf",
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "#212121",
            fontSize: "10px",
            padding: "10px 5px 14px 5px",
            height: "100%",
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
    );
  }
);

export default CustomPagination;
