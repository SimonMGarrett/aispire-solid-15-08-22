import './assets/css/tailwind.css';
import { createEffect, createSignal, lazy, onCleanup, DEV } from 'solid-js';
import { isServer } from 'solid-js/web';
import { Routes, Route, useLocation } from '@solidjs/router';
import Plausible from 'plausible-tracker';

import Header from './partials/TheHeader';
import Footer from './partials/TheFooter';
const About = lazy(() => import('/src/pages/About'));
const Contact = lazy(() => import('/src/pages/Contact'));
const Test = lazy(() => import('/src/pages/Test'));
const Home = lazy(() => import('/src/pages/Home'));

function App() {
  // Tracking
  const plausible = Plausible({
    domain: 'simonmjgarrett.com',
  });
  const { enableAutoPageviews } = plausible;
  const cleanup = enableAutoPageviews();
  onCleanup(() => {
    cleanup();
  });

  // Don't currently know how to pass data to Routes
  window.globalData = {};
  window.globalData.canonicalBase = 'https://aispire.co.uk';
  window.clog = (text, argsArr) => {
    if (DEV && !isServer) {
      console.log(text, ...argsArr);
    }
  };

  // Setting the canonical link
  const lcn = useLocation();
  createEffect(() => {
    clog('LOCATION', [lcn.pathname]);
    document.querySelector('link[rel=canonical]').href = globalData.canonicalBase + lcn.pathname;
  });

  return (
    <div class="bg-[#F9F8F7] min-h-screen">
      <Header />

      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/test" component={Test}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
