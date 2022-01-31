import './Header.scss';
import useFetch from '../../hooks/useFetch';
import Navigation from '../../reusables/Navigation/Navigation';
import MobileNavigation from '../../reusables/Navigation/MobileNavigation';

const Header = ({ handleRef }: any) => {
  const { data, loading, error } = useFetch('content', 'Home', ['navigation']);

  return (
    <div className="headerComponent">
      {data && data.navigation && (
        window.innerWidth > 400
          ? <Navigation items={data} handleRef={handleRef} />
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
