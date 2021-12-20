import { FC, useState } from 'react';
import './Skills.scss';
import sliceArray from '../../utils/sliceArray';
import arrayToMap from '../../utils/arrayToMap';

export interface SkillsProps {
  skills_: string[],
  skillRatings_?: never[],
  columns_: number
}

interface SkillsActiveMap {
  [key: string]: boolean
}

const Skills: FC<SkillsProps> = ({
  skills_ = [], skillRatings_ = [], columns_ = 1,
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
      {skillsTable.map((skillRow: string[]) => (
        <div className="row" key={skillRow[0]}>
          {skillRow.map((skill: string, index: number) => (
            <div className="column" key={skill}>
              <div
                className="skill"
                key={skill}
                onClick={() => handleClick(skill)}
                onKeyDown={() => handleClick(skill)}
                role="button"
                tabIndex={0}
              >
                {active[skill]
                  ? <div>{skillRatings_[index]}</div>
                  : <div>{skill}</div>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
