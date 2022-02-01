import './Header.scss';
import useFetch from '../../hooks/useFetch';
import Navigation from '../../reusables/Navigation/Navigation';
import MobileNavigation from '../../reusables/Navigation/MobileNavigation';
import { HeaderProps } from '../../types';

const Header = ({ handleRef, refs }: HeaderProps) => {
  const { data, loading, error } = useFetch('content', 'Home', ['navigation']);

  return (
    <div className="headerComponent">
      {data && data.navigation && (
        window.innerWidth > 400
          ? <Navigation items={data} handleRef={handleRef} refs={refs} />
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
