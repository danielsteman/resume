import './SpotifyPD.scss';
import { ReactElement } from 'react';
import Skills from '../../../reusables/Skills/Skills';
import Card from '../../../reusables/Card/Card';
import { SkillProps } from '../../About/About';

const SpotifyPD = () => {
  const title: string = 'PROJECTS';
  const skills: SkillProps[] = [
    {
      name: 'CELERY',
      id: 1,
    },
    {
      name: 'RABBITMQ',
      id: 2,
    },
    {
      name: 'SCIKIT-LEARN',
      id: 3,
    },
    {
      name: 'PLOTLY.JS',
      id: 4,
    },
  ];
  const columns: number = 1;
  const text: (string|ReactElement)[] = ['Using Spotify’s ', <a key={Math.PI} href="https://developer.spotify.com/documentation/web-api/reference/#category-tracks"> API </a>, 'to get feature data about songs and creating playlists based on cluster analysis. The web app allows users to login with a Spotify account, select a playlist, see the songs it contains in 3D feature space and create new playlists.\nBy building this I learned how the use new technologies such as but not limited to:'];

  return (
    <div className="spotifyProjectComponent">
      <Card
        text={text}
        title={title}
      >
        <Skills skills={skills} columns={columns} />
      </Card>
    </div>
  );
};

export default SpotifyPD;
