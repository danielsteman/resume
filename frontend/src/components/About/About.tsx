import "./About.scss";

const About = () => {
  return (
    <div className="container">
      <div className="title">ABOUT</div>
      <div className="underline"></div>
      <div className="card">
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br/><br/>It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="skillsContainer">
          <div className="row">
            <div className="column">
              <div className="skill">PYTHON</div>
            </div>
            <div className="column">
              <div className="skill">DJANGO</div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="skill">JAVASCRIPT</div>
            </div>
            <div className="column">
              <div className="skill">TYPESCRIPT</div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="skill">NODE.JS</div>
            </div>
            <div className="column">
              <div className="skill">REACT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
