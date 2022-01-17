import './About.scss';
import { useEffect } from 'react';
import Card from '../../reusables/Card/Card';
import Skills from '../../reusables/Skills/Skills';
import Title from '../../reusables/Title/Title';
import useFetch from '../../hooks/useFetch';
import { AboutProps } from '../../types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Terminal from '../../animations/terminal.svg';

const About = ({ setLoading }:AboutProps) => {
  const fields = [
    'custom_title',
    'body',
    'skills',
    'skill_years',
    'n_skills_columns',
  ];

  const { data, loading, error } = useFetch('About', fields);

  useEffect(() => setLoading(loading), [loading]);

  // customize terminal animation: https://github.com/marionebl/svg-term

  return (
    <div className="aboutComponent">
      <Title title={data.custom_title} />
      <div className="aboutContainer">
        <div className="aboutAnimation">
          <img src={Terminal} alt="terminal" />
        </div>
        <div className="aboutDescription">
          {data && (
          <div>
            <Card
              text={data.body}
            >
              <Skills
                skills_={data.skills}
                skillYears_={data.skill_years}
                columns_={data.n_skills_columns}
              />
            </Card>
          </div>
          )}
          {error && (
          <div>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
