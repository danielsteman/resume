import './App.scss';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import Experience from './components/Experience/Experience';
import SpotifyProject from './components/Projects/SpotifyProject/SpotifyProject';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="grid">
    <Header />
    <Title />
    <About />
    <SpotifyProject />
    <Experience />
    <Socials />
    <Footer />
  </div>
);

export default App;
