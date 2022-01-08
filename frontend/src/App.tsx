import './App.scss';
import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import Experience from './components/Experience/Experience';
import SpotifyProject from './components/Projects/SpotifyProject/SpotifyProject';
import Footer from './components/Footer/Footer';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<any>(false);

  return (
    <div className="grid">
      <Header ref={ref} />
      <Home />
      <About setLoading={setLoading} />
      <SpotifyProject />
      <Experience />
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
