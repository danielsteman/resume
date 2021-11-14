import './Header.scss';
import useFetch from '../../hooks/useFetch';

const Header = () => {
  const { data, loading, error } = useFetch('Home', ['navigation']);

  return (
    <div className="headerComponent">
      {data && data.navigation && (
      <div className="nav">
        <ul className="item">
          {data.navigation.map((item: string) => (
            <li key={item}><a href="/">{item}</a></li>
          ))}
        </ul>
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

export default Header;
