import { FC, useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: string[]) => (
        <div className="row" key={skillRow[0]}>
          {skillRow.map((skill: string, index: number) => (
            <div className="column" key={skill}>
              <div
                className="skill"
                key={skill}
                onClick={() => {
                  console.log(active);
                  console.log(active[skill]);
                  const temp = Object.keys(active).length === 0
                    ? arrayToMap(skills_, false)
                    : active;
                  temp[skill] = !active.skill;
                  setActive(temp);
                }}
                onKeyDown={() => console.log(skillRatings_)}
                role="button"
                tabIndex={0}
              >
                {active[skill]
                  ? <div>{skill}</div>
                  : <div>{skillRatings_[index]}</div>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
