
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePagination } from '../reducers/appSlice';
import { ArrowLongLeftIcon} from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

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
      if(i==1||i==2||i==totalPages)
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
    <div data-testid="pagination-component" className="flex justify-between">
      <motion.button
      initial={{  x:100 }}
      whileInView={{ x:0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.9 }}
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
        className={`px-3  rounded-xl mx-1 focus:outline-none ${pagination.currentPage === 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'border-purple-500 border-2 bg-gray-950 text-gray-200 hover:bg-gray-500'}`}
      >
       <ArrowLongLeftIcon className='w-9'/>
      </motion.button>
      {/* {renderPageNumbers()} */}
      <motion.button
      initial={{  x:-100 }}
      whileInView={{ x:0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.9 }}
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={pagination.currentPage === pagination.totalPages}
        className={`px-3 rounded-xl mx-1 focus:outline-none ${pagination.currentPage === pagination.totalPages ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'border-purple-500 border-2 bg-gray-950 text-gray-200 hover:bg-gray-500'}`}
      >
    <ArrowLongLeftIcon className='w-9 rotate-180'/>
      </motion.button>
    </div>
  );
};

export default Pagination;
