import './Header.scss';
import useFetch from '../../hooks/useFetch';
import Navigation from '../../reusables/Navigation/Navigation';
import MobileNavigation from '../../reusables/Navigation/MobileNavigation';
import { HeaderProps } from '../../types';
import useWindowDimensions from '../../hooks/useWindowSize';

const Header = ({ handleRef, refs }: HeaderProps) => {
  const { data, loading, error } = useFetch('content', 'Home', ['navigation']);
  const { height, width } = useWindowDimensions();

  return (
    <div className="headerComponent">
      {data && data.navigation && (
        width > 400 && height
          ? <Navigation items={data} handleRef={handleRef} refs={refs} />
          : <MobileNavigation items={data} handleRef={handleRef} refs={refs} />
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
