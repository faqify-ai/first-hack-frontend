import React from 'react';

import HeroImage from '../images/about-hero.jpg';
import IntroImage from '../images/about-intro.jpg';

function AboutHero() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <img className="opacity-10 w-full h-full object-cover" src={HeroImage} width="1440" height="497" alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100">We're designing a new way to do business</h1>
          </div>

          {/* Hero image */}
          <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <img className="mx-auto" src={IntroImage} width="1024" height="576" alt="About intro" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;