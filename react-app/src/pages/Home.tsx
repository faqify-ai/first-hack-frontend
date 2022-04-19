import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesHome02 from '../partials/FeaturesHome02';
import FeaturesHome03 from '../partials/FeaturesHome03';
import Target from '../partials/Target';
import PricingSection from '../partials/PricingSection';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        {/* <FeaturesHome />
        <FeaturesHome02 />
        <FeaturesHome03 />
        <Target />
        <PricingSection /> */}
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;