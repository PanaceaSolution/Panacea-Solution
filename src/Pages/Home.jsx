import React, { Suspense, lazy } from 'react';
import FluidCursor from '../Components/FluidCursor';
import Loading from './Loading';
import StandOut from './StandOut';
import Testimonials from './Testimonials';

const NavBar = lazy(() => import('../Components/NavBar'));
const Hero = lazy(() => import('./Hero'));
const AboutCompany = lazy(() => import('./AboutCompany'));
const Services = lazy(() => import('./Services'));
const Team = lazy(() => import('./Team'));
const Footer = lazy(() => import('./Footer'));

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-[#000a29] from-5% via-[#002f69] via-50% to-[#429ebd] to-80% cursor-none overflow-x-hidden' id='container'>
      <FluidCursor />
      <Suspense fallback={<Loading/>}>
        <NavBar />
        <Hero />
        <AboutCompany />
        <Services />
        <Team />
        <StandOut/>
        <Testimonials/>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
