import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchData, updatePagination } from '../reducers/appSlice';
import {ArrowsUpDownIcon} from "@heroicons/react/20/solid"

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState({
    status: '',
    original_launch: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchData(searchData));
    dispatch(updatePagination({ currentPage: 1, totalPages: 1 }));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 relative bg-white/10 backdrop-blur-xl   pt-6 mt-16 rounded-b-3xl rounded-t-2xl">
      <div className="flex flex-wrap gap-y-3 px-4  text-gray-600">
        <div className='w-full px-3 md:w-1/3'>
          <label htmlFor="status" className="block mb-1 font-medium text-gray-100">Status</label>
          <select
            id="status"
            name="status"
            value={searchData.status}
            onChange={handleChange}
            className=" px-4 w-full py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div className='w-full px-3 md:w-1/3'>
          <label htmlFor="original_launch" className="block mb-1 font-medium text-gray-100">Original Launch</label>
          <input
            type="text"
            id="original_launch"
            name="original_launch"
            value={searchData.original_launch}
            onChange={handleChange}
            className=" px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='w-full px-3 md:w-1/3'>
          <label htmlFor="type" className="block mb-1 font-medium text-gray-100">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={searchData.type}
            onChange={handleChange}
            className=" px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
        <button type="submit" className="px-4  py-2 mt-4 w-full rounded-full text-white bg-purple-500 font-bold text-lg hover:bg-purple-600 focus:outline-none focus:bg-blue-600">Search</button>
        {/* <ArrowsUpDownIcon className='w-12 absolute text-gray-500 -bottom-16'/> */}
    </form>
  );
};

export default SearchForm;
