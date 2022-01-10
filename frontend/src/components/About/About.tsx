import './About.scss';
import { useEffect } from 'react';
import Card from '../../reusables/Card/Card';
import Skills from '../../reusables/Skills/Skills';
import Title from '../../reusables/Title/Title';
import useFetch from '../../hooks/useFetch';
import { AboutProps } from '../../types';

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

  return (
    <div className="aboutComponent">
      {data && (
        <div>
          <Title title={data.custom_title} />
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
  );
};

export default About;
