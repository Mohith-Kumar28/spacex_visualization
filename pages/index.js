import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import DataGrid from '../components/DataGrid';

const HomePage = () => {
  return (
    <Provider store={store}>
      <Layout>
        <SearchForm />
        <DataGrid />
      </Layout>
    </Provider>
  );
};

export default HomePage;
