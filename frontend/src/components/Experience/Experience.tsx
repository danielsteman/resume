import './Experience.scss';
import { useState, FC } from 'react';

interface employerProps {
  name: string,
  id: number
}

const Experience: FC = () => {
  const title: string = 'EXPERIENCE';
  const employers: employerProps[] = [
    {
      name: 'A.S.R.',
      id: 1,
    },
    {
      name: 'A.S.R.',
      id: 2,
    },
    {
      name: 'VIRTUAGYM',
      id: 3,
    },
    {
      name: 'MSC. FIN-TECH',
      id: 4,
    },
    {
      name: 'BSC. INT. BUS.',
      id: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="experienceComponent">
      <div className="experienceTitle">{title}</div>
      <div className="underline" />
      <div className="experienceContainer">
        <div className="employerContainer">
          <div className="scrollBar">
            <div className={`slider moveSlider${index}`} />
          </div>
          <div className={`employerList moveList${index}`}>
            {employers.map((employer, i) => (
              <div
                className="employer"
                onClick={() => setIndex(i)}
                onKeyDown={() => setIndex(Math.min(0, i - 1))}
                onKeyUp={() => setIndex(Math.max(4, i + 1))}
                key={employer.id}
                role="button"
                tabIndex={0}
              >
                {employer.name}
              </div>
            ))}
          </div>
        </div>
        <div className="jobContainer">
          <div className="jobTitleContainer">
            <div className="jobTitle">
              Developer @ a.s.r.
            </div>
            <div className="jobDuration">
              May 2021 - August 2021
            </div>
          </div>
          <div className="jobDescription">
            Your move may vary as far as how things are organized:
            it could have more directories, less directories, or
            even further nesting into components, styling, and testing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
