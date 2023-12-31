import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updatePagination, updateSearchResults } from '../reducers/appSlice';
import Pagination from './Pagination';
import Modal from './Modal';
import Table from './TableLayout';
import { motion } from 'framer-motion'
import DataTabs from './DataTabs';

const DataGrid = () => {
  const searchData = useSelector((state) => state.app.searchData);
  const pagination = useSelector((state) => state.app.pagination);
  const searchResults = useSelector((state) => state.app.searchResults);
  const dispatch = useDispatch();
  const itemsPerPage = 6; // Number of items to display per page


  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules', {
          params: {
            ...searchData,
            limit: itemsPerPage,
            offset: (pagination.currentPage -1) * itemsPerPage,
          },
        });

        dispatch(updateSearchResults(response.data));

         // Calculate total pages
         const totalCount = parseInt(response.headers['spacex-api-count']);
         const totalPages = Math.ceil(totalCount / itemsPerPage)-1;
         dispatch(updatePagination({ ...pagination, totalPages }));
      } catch (error) {
        console.error(error);
        dispatch(updateSearchResults([]));
      }
    };

    fetchSearchResults();
  }, [searchData, pagination.currentPage]);

  const handlePageChange = (pageNumber) => {
    dispatch(updatePagination({ ...pagination, currentPage: pageNumber }));
  };

  return (
    <motion.div initial={{  y:100 }}
    whileInView={{ y:0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }} data-testid="data-grid-component" className='mt-0'>
      
    <DataTabs itemsPerPage={itemsPerPage}/>

     <div className='rounded-b-lg  p-3'>
      <Pagination />
      </div>
    </motion.div>
  );
};

export default DataGrid;
