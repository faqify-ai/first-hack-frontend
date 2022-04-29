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
import SignIn from './src/pages/SignIn';
import ResetPassword from './src/pages/ResetPassword';
import RequestDemo from './src/pages/RequestDemo';
import PageNotFound from './src/pages/PageNotFound';
import Dashboard from './src/pages/Dashboard';

import UnauthenticatedRoute from './src/utils/UnauthenticatedRoute';
import AuthenticatedRoute from './src/utils/AuthenticatedRoute';
import { AuthContextProvider } from './src/firebase/context';

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
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<UnauthenticatedRoute component={Home} />} />
        <Route path="/pricing" element={<UnauthenticatedRoute component={Pricing} />} />
        <Route path="/signin" element={<UnauthenticatedRoute component={SignIn} />} />
        <Route path="/reset-password" element={<UnauthenticatedRoute component={ResetPassword} />} />
        <Route path="/dashboard" element={<AuthenticatedRoute component={Dashboard} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
