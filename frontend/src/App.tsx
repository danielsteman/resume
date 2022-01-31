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
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<any>(true);

  const handleRef = () => {
    if (experienceRef.current !== null) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {loading && <LoadingScreen />}
      <div className="grid">
        <Header handleRef={handleRef} />
        <Home setLoading={setLoading} />
        <About setLoading={setLoading} />
        <SpotifyProject
          setLoading={setLoading}
          projectRef={projectRef}
        />
        <Experience
          setLoading={setLoading}
          ref={experienceRef}
        />
        <Socials />
        <Footer setLoading={setLoading} />
      </div>
    </div>
  );
};

export default App;
