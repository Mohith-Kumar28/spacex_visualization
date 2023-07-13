import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SpaceX Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen mx-auto px-4 bg-gray-300">
        <header className="py-4">
          <h1 className="text-3xl font-bold">SpaceX Data</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
