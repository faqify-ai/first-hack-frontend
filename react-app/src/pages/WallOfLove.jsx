import React from 'react';

import Header from '../partials/Header';
import WofHero from '../partials/WofHero';
import Clients from '../partials/Clients';
import Customers from '../partials/Customers';
import Testimonials from '../partials/Testimonials';
import CtaDark from '../partials/CtaDark';
import Footer from '../partials/Footer';

function WallOfLove() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <WofHero />
        <Clients />
        <Customers />
        <Testimonials />
        <CtaDark />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default WallOfLove;