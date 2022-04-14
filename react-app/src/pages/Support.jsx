import React from 'react';

import Header from '../partials/Header';
import SupportHero from '../partials/SupportHero';
import SupportContent from '../partials/SupportContent';
import Footer from '../partials/Footer';

function Support() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <SupportHero />
        <SupportContent />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Support;