import { FC, useState } from 'react';
import './Skills.scss';
import sliceArray from '../../utils/sliceArray';
import arrayToMap from '../../utils/arrayToMap';

export interface SkillsProps {
  skills_: string[],
  skillYears_?: never[],
  columns_: number
}

interface SkillsActiveMap {
  [key: string]: boolean
}

const Skills: FC<SkillsProps> = ({
  skills_ = [], skillYears_ = [], columns_ = 1,
}): JSX.Element => {
  const skillsTable = sliceArray(skills_, columns_);
  const [active, setActive] = useState<SkillsActiveMap>({});

  const handleClick = (skill: string) => {
    const temp = Object.keys(active).length === 0
      ? arrayToMap(skills_, false)
      : active;
    temp[skill] = !active[skill];
    setActive({ ...temp });
  };

  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: string[], i: number) => (
        <div className="row" key={skillRow[0]}>
          {skillRow.map((skill: string, j: number) => (
            <div className="column" key={skill}>
              <div
                className={`skill ${active[skill]}`}
                key={skill}
                onClick={() => handleClick(skill)}
                role="button"
                tabIndex={0}
              >
                {active[skill] && skillYears_.length !== 0
                  ? <div>{skillYears_[i * columns_ + j]}</div>
                  : <div>{skill}</div>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Skills.defaultProps = {
  skillYears_: [],
};

export default Skills;
