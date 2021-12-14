import './Header.scss';
import useFetch from '../../hooks/useFetch';
import Navigation from '../../reusables/Navigation/Navigation';

// https://stackoverflow.com/questions/52616172/how-to-initialize-an-object-in-typescript

const Header: React.FC = () => {
  const { data, loading, error } = useFetch('Home', ['navigation']);

  return (
    <div className="headerComponent">
      {data && data.navigation && (
        <Navigation items={data} />
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

export default Header;
