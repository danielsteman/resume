import './SpotifyProject.scss';
import { forwardRef } from 'react';
import Title from '../../../reusables/Title/Title';
import SpotifyPD from './SpotifyPD';
import SpotifyPI from './SpotifyPI';
import { SpotifyProjectProps } from '../../../types';

const SpotifyProject = forwardRef((
  { setLoading, projectRef }: SpotifyProjectProps,
) => (
  <div className="spotifyProjectComponent" ref={projectRef}>
    <Title title="PROJECTS" />
    <div className="spotifyProjectContainer">
      <SpotifyPD setLoading={setLoading} />
      <SpotifyPI setLoading={setLoading} />
    </div>
  </div>
));

export default SpotifyProject;
