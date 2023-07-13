import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchData, updatePagination } from '../reducers/appSlice';

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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-4 text-gray-600">
        <div>
          <label htmlFor="status" className="block mb-1 font-medium text-gray-700">Status</label>
          <select
            id="status"
            name="status"
            value={searchData.status}
            onChange={handleChange}
            className="w-40 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div>
          <label htmlFor="original_launch" className="block mb-1 font-medium text-gray-700">Original Launch</label>
          <input
            type="text"
            id="original_launch"
            name="original_launch"
            value={searchData.original_launch}
            onChange={handleChange}
            className="w-40 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="type" className="block mb-1 font-medium text-gray-700">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={searchData.type}
            onChange={handleChange}
            className="w-40 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
