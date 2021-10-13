import "./SpotifyPD.scss";
import Skills from "../../../reusables/Skills/Skills"

const SpotifyPD = () => {

  const skills: string[] = ['CELERY', 'RABBITMQ', 'SCIKIT-LEARN', 'PLOTLY.JS']
  const columns: number = 1

  return (
    <div className="container">
      <div className="title">PROJECTS</div>
      <div className="underline"></div>
      <div className="card">
        <div className="text">
          Using Spotify’s <a 
          href="https://developer.spotify.com/documentation/web-api/reference/#category-tracks"
          > API </a> to get feature data about songs and creating playlists based on
          cluster analysis. The web app allows users to login with a Spotify
          account, select a playlist, see the songs it contains in 3D feature
          space and create new playlists. <br/><br/>By building this I learned how the use
          new technologies such as but not limited to:
        </div>
        <Skills 
          skills={skills}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default SpotifyPD;
