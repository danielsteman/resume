import './Home.scss';
import { useEffect } from 'react';
import Waves from '../../svg/layered-waves-haikei.svg';
import getHomePage from '../../api/HomepageAPI';

const Home = () => {
  // const [title, setTitle] = useState('');
  // const [navBar, setNavBar] = useState('');

  useEffect(() => {
    const data = getHomePage(['Navbar', 'WebsiteTitle']);
    console.log(data);
  }, []);

  return (
    <div className="titleComponent">
      <div className="mainTitle">
        <h1>Project title.</h1>
      </div>
      <img className="pageDivider" src={Waves} alt="PageDivider" />
    </div>
  );
};

export default Home;
