import React from 'react';

import Header from '../partials/Header';
import WofSingleHero from '../partials/WofSingleHero';
import Stats from '../partials/Stats';
import WofSingleContent from '../partials/WofSingleContent';
import RelatedStories from '../partials/RelatedStories';
import Footer from '../partials/Footer';

function WallOfLoveSingle() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <WofSingleHero />
        <Stats />
        <WofSingleContent />
        <RelatedStories />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default WallOfLoveSingle;