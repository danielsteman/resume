import './App.scss';
import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import Experience from './components/Experience/Experience';
import SpotifyProject from './components/Projects/SpotifyProject/SpotifyProject';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<any>(true);

  return (
    <div>
      {loading && <LoadingScreen />}
      <div className="grid">
        <Header ref={ref} />
        <Home setLoading={setLoading} />
        <About setLoading={setLoading} />
        <SpotifyProject />
        <Experience setLoading={setLoading} />
        <Socials />
        <Footer setLoading={setLoading} />
      </div>
    </div>
  );
};

export default App;
