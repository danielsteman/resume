import './Home.scss';
import Waves from '../../svg/layered-waves-haikei.svg';
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
          <img className="pageDivider" src={Waves} alt="PageDivider" />
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
