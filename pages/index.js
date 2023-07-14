import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import DataGrid from '../components/DataGrid';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <Provider store={store}>
      <Layout>
        {/* <Navigation/> */}
        <Hero/>
        <SearchForm />
        <DataGrid />
      </Layout>
    </Provider>
  );
};

export default HomePage;
