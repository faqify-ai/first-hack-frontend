import React from 'react';
import { Link } from 'react-router-dom';

import AuthorImage from '../images/news-author-01.jpg';
import NewsSingleImage from '../images/news-single.jpg';
import NewsInnerImage from '../images/news-inner-image.jpg';
import NewsInnerImage02 from '../images/news-inner-image-02.jpg';

function BlogSingle() {
  return (
    <article>
      <header className="relative">

        {/* Dark background */}
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40 pb-8">
            <div className="max-w-3xl mx-auto">

              <div className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <Link className="inline-flex font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out group mb-2" to="/blog" data-aos="fade-down"><span className="tracking-normal text-blue-600 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&lt;-</span> Back to Blog</Link>
                  <h1 className="h2 font-playfair-display text-slate-100 mb-6">Introducing the Market Builder Tool</h1>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-3" data-aos="fade-up">
                  {/* Author meta */}
                  <div className="flex items-center justify-center">
                    <Link to="#0">
                      <img className="rounded-full shrink-0 mr-3" src={AuthorImage} width="32" height="32" alt="Author 01" />
                    </Link>
                    <div>
                      <Link className="font-medium text-slate-200 hover:text-slate-100 transition duration-150 ease-in-out" to="#0">Patricia Williams</Link>
                      <span className="text-slate-600"> · </span>
                      <span className="text-slate-400">Sep 24, 2021</span>
                    </div>
                  </div>
                  {/* Social links */}
                  <div className="flex justify-center mt-4 md:mt-0">
                    <ul className="flex space-x-5 mb-4 md:order-1 md:ml-4 md:mb-0">
                      <li>
                        <Link className="text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out" to="#0" aria-label="Twitter">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out" to="#0" aria-label="Twitter">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out" to="#0" aria-label="Twitter">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10c0 4.25 2.667 7.833 6.333 9.333-.083-.75-.166-2 0-2.833.167-.75 1.167-5 1.167-5s-.25-.667-.25-1.5c0-1.417.833-2.417 1.833-2.417.834 0 1.25.667 1.25 1.417 0 .833-.583 2.167-.833 3.333-.25 1 .5 1.834 1.5 1.834 1.75 0 3.167-1.834 3.167-4.584 0-2.416-1.75-4.083-4.167-4.083-2.833 0-4.5 2.167-4.5 4.333 0 .834.333 1.75.75 2.25.083.084.083.167.083.25-.083.334-.25 1-.25 1.167-.083.167-.166.25-.333.167-1.25-.584-2-2.417-2-3.834 0-3.166 2.333-6.083 6.583-6.083 3.5 0 6.167 2.5 6.167 5.75 0 3.417-2.167 6.25-5.167 6.25-1 0-2-.5-2.333-1.167 0 0-.5 1.917-.583 2.417-.25.833-.834 1.917-1.25 2.583C8 19.833 9 20 10 20c5.5 0 10-4.5 10-10S15.5 0 10 0Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Article image */}
              <figure>
                <img className="w-full" src={NewsSingleImage} width="768" height="432" alt="News single" />
              </figure>

            </div>
          </div>
        </div>
      </header>

      {/* Article content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-lg text-slate-500">
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet <strong className="font-medium text-slate-800">how to manage anything malesuada</strong> proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem <Link className="font-medium text-blue-600 hover:underline" to="#0">et tortor consequat</Link>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. <strong className="font-medium text-slate-800">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
            </p>
            <p className="mb-8">
              Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi blandit cursus risus.
            </p>
            <div className="flex justify-center mb-8" aria-hidden="true">
              <svg className="fill-slate-400" height="4" width="36">
                <circle cx="18" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="34" cy="2" r="2" />
              </svg>
            </div>
            <h2 className="h3 font-playfair-display text-slate-800 mb-4">1 / Adaptation of the mobile version</h2>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet.
            </p>
            <figure className="mb-8 lg:-ml-32 lg:-mr-32">
              <img className="w-full" src={NewsInnerImage} width="1024" height="576" alt="News inner" />
            </figure>
            <h3 className="h4 font-playfair-display text-slate-800 mb-4">Why this change seems mostly visual</h3>
            <p className="mb-8">
              Et leo duis ut diam quam nulla porttitor porttitor lacus luctus accumsan tortor, lorem dolor sed viverra ipsum nunc aliquet bibendum enim eu augue ut lectus arcu bibendum at. Non sodales neque sodales ut etiam sit. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.
            </p>
            <div className="flex justify-center mb-8" aria-hidden="true">
              <svg className="fill-slate-400" height="4" width="36">
                <circle cx="18" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="34" cy="2" r="2" />
              </svg>
            </div>
            <h2 className="h3 font-playfair-display text-slate-800 mb-4">2 / Streamline the experience with custom flows</h2>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
            </p>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend:
            </p>
            <p className="mb-8 border-l-2 border-slate-800 pl-3 lg:-ml-3.5">
              <strong className="font-medium text-slate-800">Example:</strong> Adipiscing diams - 2px, feugiat auctor - 3px;
            </p>
            <div className="flex justify-center mb-8" aria-hidden="true">
              <svg className="fill-slate-400" height="4" width="36">
                <circle cx="18" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="34" cy="2" r="2" />
              </svg>
            </div>
            <h2 className="h3 font-playfair-display text-slate-800 mb-4">3 / Simplified navigation flow</h2>
            <p className="mb-8">
              Arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet.
            </p>
            <figure className="mb-8">
              <img className="w-full" src={NewsInnerImage} width="768" height="432" alt="News inner 02" />
            </figure>
            <p className="mb-8 border-l-2 border-slate-800 pl-3 lg:-ml-3.5">
              <strong className="font-medium text-slate-800"><em className="italic">Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien risus nec feugiat auctor urna nunc.</em></strong>
            </p>
            <div className="flex justify-center mb-8" aria-hidden="true">
              <svg className="fill-slate-400" height="4" width="36">
                <circle cx="18" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="34" cy="2" r="2" />
              </svg>
            </div>
            <h2 className="h3 font-playfair-display text-slate-800 mb-4">Handy tools</h2>
            <p className="mb-8">
              Arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet:
            </p>
            <ul className="list-disc list-inside mb-8">
              <li>
                <Link className="font-medium text-slate-800 underline hover:no-underline" to="#0">Designing Better Symbols</Link>
              </li>
              <li>
                <Link className="font-medium text-slate-800 underline hover:no-underline" to="#0">Upgrading Smart Objects</Link>
              </li>
              <li>
                <Link className="font-medium text-slate-800 underline hover:no-underline" to="#0">Designing Vs Coding</Link>
              </li>
              <li>
                <Link className="font-medium text-slate-800 underline hover:no-underline" to="#0">Understanding Smart Layouts</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </article>
  );
}

export default BlogSingle;