import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePagination } from '../reducers/appSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.app.pagination);

  const handlePageChange = (pageNumber) => {
    dispatch(updatePagination({ ...pagination, currentPage: pageNumber }));
  };

  const renderPageNumbers = () => {
    const { currentPage, totalPages } = pagination;
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md mx-1 focus:outline-none ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
        className={`px-3 py-1 rounded-md mx-1 focus:outline-none ${pagination.currentPage === 1 ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={pagination.currentPage === pagination.totalPages}
        className={`px-3 py-1 rounded-md mx-1 focus:outline-none ${pagination.currentPage === pagination.totalPages ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
