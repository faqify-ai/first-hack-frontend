import React from 'react';

import Header from '../partials/Header';
import AboutHero from '../partials/AboutHero';
import Stats02 from '../partials/Stats02';
import AboutContent from '../partials/AboutContent';
import Team from '../partials/Team';
import TeamMembers from '../partials/TeamMembers';
import Clients02 from '../partials/Clients02';
import Cta02 from '../partials/Cta02';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <AboutHero />
        <Stats02 />
        <AboutContent />
        <Team />
        <TeamMembers />
        <Clients02 />
        <Cta02 />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;