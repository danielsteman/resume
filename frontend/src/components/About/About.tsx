import './About.scss';
import { useEffect } from 'react';
import Card from '../../reusables/Card/Card';
import Skills from '../../reusables/Skills/Skills';
import Title from '../../reusables/Title/Title';
import useFetch from '../../hooks/useFetch';
import { AboutProps } from '../../types';
import Terminal from '../../animations/terminal.svg';
import MobileTerminal from '../../animations/mobile-terminal.svg';
import useWindowDimensions from '../../hooks/useWindowSize';

const About = ({ setLoading }:AboutProps) => {
  const fields = [
    'custom_title',
    'body',
    'skills',
    'skill_years',
    'n_skills_columns',
  ];

  const { data, loading, error } = useFetch('content', 'About', fields);
  const { height, width } = useWindowDimensions();

  useEffect(() => setLoading(loading), [loading]);

  return (
    <div className="aboutComponent">
      <Title title={data.custom_title} />
      <div className="aboutContainer">
        <div className="aboutAnimation">
          {width > 414 && height
            ? <img src={Terminal} alt="terminal" />
            : <img src={MobileTerminal} alt="terminal" />}
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
