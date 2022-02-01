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
import { RefMap } from './types';

const App = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<any>(true);

  const handleRef = (ref: any) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refMap: RefMap = {
    experience: experienceRef,
    projects: projectsRef,
  };

  return (
    <div>
      {loading && <LoadingScreen />}
      <div className="grid">
        <Header setLoading={setLoading} handleRef={handleRef} refs={refMap} />
        <Home setLoading={setLoading} />
        <About setLoading={setLoading} />
        <SpotifyProject setLoading={setLoading} projectsRef={projectsRef} />
        <Experience setLoading={setLoading} ref={experienceRef} />
        <Socials />
        <Footer setLoading={setLoading} />
      </div>
    </div>
  );
};

export default App;
