import './SpotifyProject.scss';
import Title from '../../../reusables/Title/Title';
import SpotifyPD from './SpotifyPD';
import SpotifyPI from './SpotifyPI';

const SpotifyProject = () => (
  <div className="spotifyProjectComponent">
    <Title title="PROJECTS" />
    <div className="spotifyProjectContainer">
      <SpotifyPD />
      <SpotifyPI />
    </div>
  </div>
);

export default SpotifyProject;
