import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import DataGrid from '../components/DataGrid';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Image from 'next/image';

const HomePage = () => {
  return (
    <Provider store={store}>
      <Layout >
        {/* <Navigation/> */}
        <Hero/>
        <div className='relative py-2'>
    


          {/* <Image
     placeholder="blur"
     blurDataURL="/assets/galaxy.png"
      src="/assets/galaxy.png"
      objectFit="cover"
      layout="fill"
className='relative '
    /> */}
<div id='search' className='relative z-10  mx-8 rounded-2xl bg-white/10 backdrop-blur-3xl'>
        <SearchForm />
        <DataGrid />
        </div>
        </div>
      </Layout>
    </Provider>
  );
};

export default HomePage;
