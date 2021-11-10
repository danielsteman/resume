import './Experience.scss';
import { useState, FC } from 'react';
import useFetch from '../../hooks/useFetch';
import Title from '../../reusables/Title/Title';

const Experience: FC = () => {
  const { data, loading, error } = useFetch('Experience', [
    'custom_title',
    'employers',
    'employment_title',
    'employment_duration',
    'employment_description',
  ]);

  const [index, setIndex] = useState(0);

  return (
    <div className="experienceComponent">
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
                    onKeyDown={() => setIndex(Math.min(0, i - 1))}
                    onKeyUp={() => setIndex(Math.max(4, i + 1))}
                    key={employer}
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
                  {data.employment_title[index]}
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
};

export default Experience;
