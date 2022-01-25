import { useEffect } from 'react';
import './SpotifyPD.scss';
import Skills from '../../../reusables/Skills/Skills';
import Card from '../../../reusables/Card/Card';
import useFetch from '../../../hooks/useFetch';
import { SpotifyPDProps } from '../../../types';

const SpotifyPD = ({ setLoading }: SpotifyPDProps) => {
  const { data, loading, error } = useFetch('content', 'Projects', ['custom_title', 'body', 'skills']);
  useEffect(() => setLoading(loading), [loading]);
  const columns: number = 2;

  return (
    <div className="spotifyProjectDescriptionComponent">
      {data && (
      <Card
        text={data.body}
      >
        <Skills skills_={data.skills} columns_={columns} />
      </Card>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default SpotifyPD;
