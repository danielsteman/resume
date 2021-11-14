import './SpotifyPD.scss';
import Skills from '../../../reusables/Skills/Skills';
import Card from '../../../reusables/Card/Card';
import useFetch from '../../../hooks/useFetch';

const SpotifyPD = () => {
  const { data, loading, error } = useFetch('Projects', ['custom_title', 'body', 'skills']);

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
      {loading && (
        <div>loading...</div>
      )}
      {error && (
        <div>{error}</div>
      )}
    </div>
  );
};

export default SpotifyPD;
