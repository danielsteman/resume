import './Home.scss';
// import Waves from '../../svg/stretched-waves.svg';
import Waves from '../../svg/layered-waves-haikei.svg';
import MobileWaves from '../../svg/mobile-waves.svg';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('Home', ['custom_title']);

  return (
    <div className="titleComponent">
      {data && (
        <div>
          <div className="mainTitle">
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
