import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import Experience from './components/Experience/Experience';
import SpotifyProject from './components/Projects/SpotifyProject/SpotifyProject';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="grid">
    <Header />
    <Home />
    <About />
    <SpotifyProject />
    <Experience />
    <Socials />
    <Footer />
  </div>
);

export default App;
