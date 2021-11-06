import './Home.scss';
import { useState, useEffect } from 'react';
import Waves from '../../svg/layered-waves-haikei.svg';
import getFields from '../../api/utils';

const Home = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    (async function getHomePageContent() {
      const data = await getFields('Home', ['custom_title']);
      setTitle(data.custom_title);
    }());
  }, []);

  return (
    <div className="titleComponent">
      <div className="mainTitle">
        <h1>{title}</h1>
      </div>
      <img className="pageDivider" src={Waves} alt="PageDivider" />
    </div>
  );
};

export default Home;
