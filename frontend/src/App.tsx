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
  // <SpotifyPD/>
  // <div className="grid">
  //   <div className="header">
  //     <Header/>
  //   </div>
  //   <div className="titlePage">
  //     <Title/>
  //   </div>
  //   <div className="about">about</div>
  //   <div className="projectDescription">projectDescription</div>
  //   <div className="projectImage">projectImage</div>
  //   <div className="experience">experience</div>
  //   <div className="socials">socials</div>
  //   <div className="footer">footer</div>
  // </div>
);

export default App;
