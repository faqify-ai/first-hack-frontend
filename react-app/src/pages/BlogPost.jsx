import React from 'react';

import Header from '../partials/Header';
import BlogSingle from '../partials/BlogSingle';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <BlogSingle />
        <div className="flex justify-center mb-8" aria-hidden="true">
          <svg className="fill-slate-400" height="4" width="36">
            <circle cx="18" cy="2" r="2" />
            <circle cx="2" cy="2" r="2" />
            <circle cx="34" cy="2" r="2" />
          </svg>
        </div>
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;