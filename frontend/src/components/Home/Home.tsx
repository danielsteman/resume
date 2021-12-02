import './Home.scss';
// import Waves from '../../svg/stretched-waves.svg';
import Waves from '../../svg/layered-waves-haikei.svg';
import useFetch from '../../hooks/useFetch';
import useWindowDimensions from '../../hooks/useWindowSize';

const Home = () => {
  const { data, loading, error } = useFetch('Home', ['custom_title']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { height, width } = useWindowDimensions();

  return (
    <div className="titleComponent">
      {data && (
        <div>
          <div className="mainTitle">
            <h1>{data.custom_title}</h1>
          </div>
          {width === 375
            ? <img className="pageDivider" src={Waves} alt="PageDivider" />
            : <img className="pageDivider" src={Waves} alt="PageDivider" />}
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
