import './Experience.scss';
import { forwardRef, useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import useFetch from '../../hooks/useFetch';
import Title from '../../reusables/Title/Title';
import { ExperienceProps } from '../../types';

const Experience = forwardRef((
  { setLoading }:ExperienceProps,
  ref: any,
) => {
  const fields = [
    'custom_title',
    'employer_ids',
    'employers',
    'employment_title',
    'employment_duration',
    'employment_description',
  ];

  const { data, loading, error } = useFetch('content', 'Experience', fields);

  useEffect(() => setLoading(loading), [loading]);

  const [index, setIndex] = useState(0);

  return (
    <div className="experienceComponent" ref={ref}>
      {data && data.employers && (
        <div>
          <Title title={data.custom_title} />
          <div className="experienceContainer">
            <div className="employerContainer">
              <div className="scrollBar">
                <div className={`slider moveSlider${index}`} />
              </div>
              <div className={`employerList moveList${index}`}>
                {data.employers.map((employer: string, i: number) => (
                  <div
                    className="employer"
                    onClick={() => setIndex(i)}
                    key={data.employer_ids[i]}
                    role="button"
                    tabIndex={0}
                  >
                    {employer}
                  </div>
                ))}
              </div>
            </div>
            <div className="jobContainer">
              <div className="jobTitleContainer">
                <div className="jobTitle">
                  <TransitionGroup>
                    {data.employment_title[index]}
                  </TransitionGroup>
                </div>
                <div className="jobDuration">
                  {data.employment_duration[index]}
                </div>
              </div>
              <div className="jobDescription">
                {data.employment_description[index]}
              </div>
            </div>
          </div>
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
});

export default Experience;
