import './Socials.scss';
import LinkedIn from '../../svg/socials/linkedin-icon.svg';
import Github from '../../svg/socials/github-icon.svg';
import LastFm from '../../svg/socials/lastfm-icon.svg';
import StackOverflow from '../../svg/socials/stackoverflow-icon.svg';

const Socials = () => (
  <div className="socialsComponent">
    <div className="logoContainer">
      <img className="logo linkedin" src={LinkedIn} alt="LinkedIn Logo" />
      <img className="logo github" src={Github} alt="Github Logo" />
      <img className="logo lastfm" src={LastFm} alt="LastFm Logo" />
      <img className="logo stackoverflow" src={StackOverflow} alt="StackOverflow Logo" />
    </div>
  </div>

);

export default Socials;
