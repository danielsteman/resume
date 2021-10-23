import './App.scss';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import SpotifyPD from './components/Projects/SpotifyProject/SpotifyPD';
import Experience from './components/Experience/Experience';

const App = () => (
  <div className="grid">
    <Header />
    <Title />
    <About />
    <SpotifyPD />
    <Experience />
    <Socials />
  </div>
);

export default App;
