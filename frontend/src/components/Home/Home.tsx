import './Home.scss';
import Waves from '../../svg/layered-waves-haikei.svg';
import MobileWaves from '../../svg/mobile-waves.svg';
import useFetch from '../../hooks/useFetch';
import Banner from '../../reusables/Banner/Banner';

const Home = () => {
  const { data, loading, error } = useFetch('Home', ['custom_title']);

  return (
    <div className="titleComponent">
      {data && data.custom_title && (
        <div>
          {window.innerWidth > 400
            && (
            <div className="mainTitle">
              <Banner title={data.custom_title} />
            </div>
            )}
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
