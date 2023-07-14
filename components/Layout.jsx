import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SpaceX Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen mx-auto  bg-black">
      
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
