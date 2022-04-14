import React from 'react';

import Header from '../partials/Header';
import PricingHero from '../partials/PricingHero';
import PricingCta from '../partials/PricingCta';
import PricingFeatures from '../partials/PricingFeatures';
import FeaturesTable from '../partials/FeaturesTable';
import Faqs from '../partials/Faqs';
import CtaDark from '../partials/CtaDark';
import Footer from '../partials/Footer';

function Pricing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <PricingHero />
        <PricingCta />
        <PricingFeatures />
        <FeaturesTable />
        <Faqs />
        <CtaDark />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Pricing;