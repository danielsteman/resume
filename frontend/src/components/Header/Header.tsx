import './Header.scss';
import useFetch from '../../hooks/useFetch';
import Navigation from '../../reusables/Navigation/Navigation';
import MobileNavigation from '../../reusables/Navigation/MobileNavigation';

const Header: React.FC = () => {
  const { data, loading, error } = useFetch('Home', ['navigation']);

  return (
    <div className="headerComponent">
      {data && data.navigation && (
        window.innerWidth > 400
          ? <Navigation items={data} />
          : <MobileNavigation items={data} />
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
