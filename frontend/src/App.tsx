import './App.scss';
import Header from './components/Header/Header'
import Title from './components/Title/Title'

// Response grid example:
// https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480

const App = () => {
  return (
    <div className="grid">
      <div className="header">
        <Header/>
      </div>
      <div className="titlePage">
        <Title/>
      </div>
      <div className="about">about</div>
      <div className="projectDescription">projectDescription</div>
      <div className="projectImage">projectImage</div>
      <div className="experience">experience</div>
      <div className="socials">socials</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
