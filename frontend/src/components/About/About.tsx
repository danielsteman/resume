import './About.scss';
import Card from '../../reusables/Card/Card';
import Skills from '../../reusables/Skills/Skills';
import Title from '../../reusables/Title/Title';
import useFetch from '../../hooks/useFetch';

export interface SkillProps {
  name: string,
  id: number
}

const About = () => {
  const fields = [
    'custom_title',
    'body',
    'skills',
    'n_skills_columns',
  ];
  const { data, loading, error } = useFetch('About', fields);

  return (
    <div className="aboutComponent">
      {data && (
        <div>
          <Title title={data.custom_title} />
          <Card
            text={data.body}
          >
            <Skills skills_={data.skills} columns_={data.n_skills_columns} />
          </Card>
        </div>
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

export default About;
