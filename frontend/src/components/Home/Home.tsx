import './Home.scss';
import { useEffect } from 'react';
import Waves from '../../images/layered-waves-haikei.svg';
import MobileWaves from '../../images/mobile-waves.svg';
import useFetch from '../../hooks/useFetch';
import Memoji from '../../images/memoji.png';
import { HomeProps } from '../../types';
import TypeWriter from '../../reusables/TypeWriter/TypeWriter';
import useWindowDimensions from '../../hooks/useWindowSize';

const Home = ({ setLoading }:HomeProps) => {
  const { data, loading, error } = useFetch('content', 'Home', ['custom_title']);
  const { height, width } = useWindowDimensions();

  useEffect(() => setLoading(loading), [loading]);

  return (
    <div className="titleComponent">
      {data && data.custom_title && (
        <div>
          <img src={Memoji} alt="memoji" className="memoji" />
          <TypeWriter />
            {width > 414 && height
              ? <img className="pageDivider" src={Waves} alt="waves" />
              : <img className="pageDivider" src={MobileWaves} alt="mobilewaves" />}
        </div>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Home;

// https://tympanus.net/Development/DistortedPixels/index.html
// https://codepen.io/yaclive/pen/EayLYO
