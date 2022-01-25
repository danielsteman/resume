import './SpotifyProject.scss';
import Title from '../../../reusables/Title/Title';
import SpotifyPD from './SpotifyPD';
import SpotifyPI from './SpotifyPI';
import { SpotifyPIProps } from '../../../types';

const SpotifyProject = ({ setLoading }: SpotifyPIProps) => (
  <div className="spotifyProjectComponent">
    <Title title="PROJECTS" />
    <div className="spotifyProjectContainer">
      <SpotifyPD setLoading={setLoading} />
      <SpotifyPI setLoading={setLoading} />
    </div>
  </div>
);

export default SpotifyProject;
