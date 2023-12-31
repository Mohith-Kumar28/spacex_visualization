import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import DataGrid from '../components/DataGrid';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <Provider store={store}>
      <Layout >
        {/* <Navigation/> */}
        <Hero/>
        <div className='relative pb-2 pt-40'>
    
    
<div className="z-10 leading-none absolute top-0 left-0 w-full overflow-hidden">
   
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    </svg>
</div>


          <Image
     placeholder="blur"
     blurDataURL="/assets/galaxy.png"
      src="/assets/galaxy.png"
      objectFit="cover"
      layout="fill"
className='relative opacity-100'
    />

{/* <video autoPlay={true}  loop={true} className='h-full absolute z-0 top-0 '>
        <source src="/assets/galaxy.mp4" />
      </video> */}

<motion.section initial={{  y:100 }}
     whileInView={{ y:0 }}
     viewport={{ once: true }}
     transition={{ duration: 1 }} id='search' className='relative z-10 mb-10   rounded-2xl bg-white/10 backdrop-blur-xl max-w-5xl mx-auto'>
        <SearchForm />
        <DataGrid />
        </motion.section>
        </div>
      </Layout>
    </Provider>
  );
};

export default HomePage;
