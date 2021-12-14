import './Home.scss';
import { useEffect, useState } from 'react';
import Waves from '../../svg/layered-waves-haikei.svg';
import MobileWaves from '../../svg/mobile-waves.svg';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('Home', ['custom_title']);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);
  }, []);

  return (
    <div className="titleComponent">
      {data && (
        <div>
          <div
            className="mainTitle"
            onClick={() => setToggle(!toggle)}
            onKeyDown={() => setToggle(!toggle)}
            role="button"
            tabIndex={0}
          >
            <h1>{data.custom_title}</h1>
          </div>
            {window.innerWidth > 400
              ? <img className="pageDivider" src={Waves} alt="waves" />
              : <img className="pageDivider" src={MobileWaves} alt="waves" />}
        </div>
      )}
      {loading && (
        <div>loading...</div>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Home;
