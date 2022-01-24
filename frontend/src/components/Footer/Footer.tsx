import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { FooterProps } from '../../types';
import './Footer.scss';

const Footer = ({ setLoading }:FooterProps) => {
  const { data, loading, error } = useFetch('content', 'Footer', ['footer_text']);

  useEffect(() => setLoading(loading), [loading]);

  return (
    <div className="footerComponent">
      { data && (
        <div className="footerText">
          {data.footer_text}
        </div>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Footer;
