import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './src/css/style.scss';

import AOS from 'aos';

import Home from './src/pages/Home';
import Pricing from './src/pages/Pricing';
import About from './src/pages/About';
import Blog from './src/pages/Blog';
import BlogPost from './src/pages/BlogPost';
import WallOfLove from './src/pages/WallOfLove';
import WallOfLoveSingle from './src/pages/WallOfLoveSingle';
import Support from './src/pages/Support';
import SignIn from './src/pages/SignIn';
import ResetPassword from './src/pages/ResetPassword';
import RequestDemo from './src/pages/RequestDemo';
import PageNotFound from './src/pages/PageNotFound';

const App = (): JSX.Element => {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/wall-of-love" element={<WallOfLove />} />
        <Route path="/wall-of-love-single" element={<WallOfLoveSingle />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
