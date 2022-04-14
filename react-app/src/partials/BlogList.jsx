import React from 'react';
import { Link } from 'react-router-dom';

import PostImage01 from '../images/blog-post-01.jpg';
import PostImage02 from '../images/blog-post-02.jpg';
import PostImage03 from '../images/blog-post-03.jpg';
import PostImage04 from '../images/blog-post-04.jpg';
import PostImage05 from '../images/blog-post-05.jpg';
import PostImage06 from '../images/blog-post-06.jpg';
import PostImage07 from '../images/blog-post-07.jpg';
import PostImage08 from '../images/blog-post-08.jpg';
import PostImage09 from '../images/blog-post-09.jpg';
import PostImage10 from '../images/blog-post-10.jpg';
import AuthorImage01 from '../images/news-author-01.jpg';
import AuthorImage02 from '../images/news-author-02.jpg';
import AuthorImage03 from '../images/news-author-03.jpg';
import AuthorImage05 from '../images/news-author-05.jpg';
import AuthorImage06 from '../images/news-author-06.jpg';
import AuthorImage07 from '../images/news-author-07.jpg';
import CtaImage from '../images/cta-image.png';

function BlogList() {
  return (
    <>
      {/* Sticky article */}
      <section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">

            <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
              {/* Image */}
              <Link className="relative block group overflow-hidden md:w-1/2" to="/blog-post" data-aos="fade-down">
                <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage01} width="540" height="340" alt="News 01" />
                <div className="absolute top-6 right-6">
                  <svg className="w-8 h-8" viewBox="0 0 32 32">
                    <circle className="fill-slate-900" fillOpacity=".48" cx="16" cy="16" r="16" />
                    <path className="fill-yellow-500" d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                </div>
              </Link>
              {/* Content */}
              <div className="md:w-1/2" data-aos="fade-up">
                <header>
                  <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                    <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">How startups can sell more using smart channels</Link>
                  </h2>
                </header>
                <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                <footer className="flex items-center mt-4">
                  <Link to="#0">
                    <img className="rounded-full shrink-0 mr-3" src={AuthorImage01} width="32" height="32" alt="Author 01" />
                  </Link>
                  <div>
                    <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Patricia Williams</Link>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500">Sep 24, 2021</span>
                  </div>
                </footer>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* All articles */}
      <section className="bg-slate-50">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">

            {/* Latest */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">Latest</h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

                {/* 1st Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage02} width="540" height="340" alt="News 02" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">A sneak peek of the new Tidy Web Portal</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage02} width="32" height="32" alt="Author 02" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Knut Mayer</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Sep 24, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>
                
                {/* 2nd Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up" data-aos-delay="100">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage03} width="540" height="340" alt="News 03" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">40+ creative content ideas to post on your blog</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage03} width="32" height="32" alt="Author 03" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Samuel Regan</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Sep 24, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

                {/* 3rd Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up" data-aos-delay="200">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage04} width="540" height="340" alt="News 04" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">The best marketing channels to promote your products</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage03} width="32" height="32" alt="Author 03" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Fabian Centero</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Sep 22, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

              </div>
            </div>

            {/* Popular */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">Popular</h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

                {/* 1st Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage05} width="540" height="340" alt="News 05" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">Where to Post Remote Jobs for Developers for Free</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage02} width="32" height="32" alt="Author 02" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Knut Mayer</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Sep 1, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

                {/* 2nd Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up" data-aos-delay="100">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage06} width="540" height="340" alt="News 06" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">4 Must-Know Skill to Be an Effective Leader</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage05} width="32" height="32" alt="Author 05" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Christina Brill</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Jul 29, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

                {/* 3rd Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up" data-aos-delay="200">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage07} width="540" height="340" alt="News 07" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">Remote founder stand-up with Mark Muller</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage06} width="32" height="32" alt="Author 06" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Alicia Muller</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Jul 4, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

              </div>
            </div>

            {/* CTA box */}
            <div data-aos="fade-up">
              <div className="relative bg-slate-900 rounded-sm py-10 px-8 md:p-10 md:mt-24">

                {/* Background illustration */}
                <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                  <img src={CtaImage} width="456" height="337" alt="Free trial" />
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">

                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 font-playfair-display text-slate-100 mb-8">Say goodbye to long queues, big updates, and <span className="text-emerald-500">confusion</span>.</h3>
                    <div className="mb-3">
                      <Link className="btn text-white bg-blue-600 hover:bg-blue-700 group" to="#0">
                        Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </Link>
                    </div>
                    <div className="text-sm italic text-slate-500">No credit card required. Cancel anytime!</div>
                  </div>

                </div>

              </div>
            </div>

            {/* Product & News */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">Product &amp; News</h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

                {/* 1st Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage08} width="540" height="340" alt="News 08" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">How to level up your marketing strategy with Tidy Pro</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage07} width="32" height="32" alt="Author 07" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Alice Rossi</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">May 17, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

                {/* 2nd Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up" data-aos-delay="100">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage09} width="540" height="340" alt="News 09" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">Introducing the Tidy mentor Network</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage02} width="32" height="32" alt="Author 02" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Knut Mayer</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Apr 14, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

                {/* 3rd Article */}
                <article className="h-full flex flex-col space-y-5" data-aos="fade-up" data-aos-delay="200">
                  {/* Image */}
                  <Link className="block group overflow-hidden" to="/blog-post">
                    <img className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={PostImage10} width="540" height="340" alt="News 10" />
                  </Link>
                  {/* Content */}
                  <div className="grow flex flex-col">
                    <header>
                      <h3 className="h4 font-playfair-display mb-3">
                        <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="/blog-post">Elevating collaboration with Tidy and Google Workspace</Link>
                      </h3>
                    </header>
                    <p className="text-lg text-slate-500 grow">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                    <footer className="flex items-center mt-4">
                      <Link to="#0">
                        <img className="rounded-full shrink-0 mr-3" src={AuthorImage05} width="32" height="32" alt="Author 05" />
                      </Link>
                      <div>
                        <Link className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Christina Brill</Link>
                        <span className="text-slate-300"> · </span>
                        <span className="text-slate-500">Mar 4, 2021</span>
                      </div>
                    </footer>
                  </div>
                </article>

              </div>
            </div>

            {/* See All Articles */}
            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                See All Articles <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default BlogList;