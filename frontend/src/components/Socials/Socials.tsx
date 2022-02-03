import './Socials.scss';
import { useEffect } from 'react';
import LinkedIn from '../../images/socials/linkedin-icon.svg';
import Github from '../../images/socials/github-icon.svg';
import LastFm from '../../images/socials/lastfm-icon.svg';
import StackOverflow from '../../images/socials/stackoverflow-icon.svg';
import useFetch from '../../hooks/useFetch';
import { SocialsProps } from '../../types';

const Socials = ({ setLoading }:SocialsProps) => {
  const { data, loading, error } = useFetch('content', 'Socials', ['social_links']);

  useEffect(() => setLoading(loading), [loading]);

  return (
    <div className="socialsComponent">
      {data && data.social_links && (
      <div className="logoContainer">
        <a href={data.social_links[0]}>
          <img className="logo linkedin" src={LinkedIn} alt="LinkedIn Logo" />
        </a>
        <a href={data.social_links[1]}>
          <img className="logo github" src={Github} alt="Github Logo" />
        </a>
        <a href={data.social_links[2]}>
          <img className="logo lastfm" src={LastFm} alt="LastFm Logo" />
        </a>
        <a href={data.social_links[3]}>
          <img className="logo stackoverflow" src={StackOverflow} alt="StackOverflow Logo" />
        </a>
      </div>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Socials;
