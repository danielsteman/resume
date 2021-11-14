import useFetch from '../../hooks/useFetch';
import './Footer.scss';

const Footer = () => {
  const { data, loading, error } = useFetch('Footer', ['footer_text']);
  return (
    <div className="footerComponent">
      { data && (
        <div className="footerText">
          {data.footer_text}
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

export default Footer;
