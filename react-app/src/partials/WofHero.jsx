import React, { useState } from 'react';
import Modal from '../utils/Modal';

import PageHero from '../images/wof-hero.jpg';

function WofHero() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100 mb-4">Join 70K+ companies and investors</h1>
            <p className="text-xl text-slate-400">We're proud to have played a part in these amazing journeys.</p>
          </div>

          {/* Hero image */}
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="relative flex justify-center items-center">
              <img className="mx-auto" src={PageHero} width="768" height="432" alt="Wof hero" />
              <button className="absolute group" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                  <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
                  <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                </svg>
              </button>

              {/* Modal */}
              <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
                <div className="relative pb-9/16">
                  <iframe className="w-full aspect-video" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
                </div>
              </Modal>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default WofHero;