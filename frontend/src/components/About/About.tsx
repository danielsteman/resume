import './About.scss';
import Card from '../../reusables/Card/Card';
import Skills from '../../reusables/Skills/Skills';

const About = () => {
  const skills: string[] = ['PYTHON', 'DJANGO', 'JAVASCRIPT', 'TYPESCRIPT', 'NODE.JS', 'REACT'];
  const columns: number = 2;
  const title: string = 'ABOUT';
  const text: string = ('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');

  return (
    <div className="aboutComponent">
      <Card
        text={text}
        title={title}
      >
        <Skills skills={skills} columns={columns}/>
      </Card>
    </div>
  );
};

export default About;
