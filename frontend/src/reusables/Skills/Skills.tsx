import { FC, useEffect, useState } from 'react';
import './Skills.scss';
import sliceArray from '../../utils/sliceArray';
import arrayToMap from '../../utils/arrayToMap';

export interface SkillsProps {
  skills_: never[],
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
  const [active, setActive] = useState<SkillsActiveMap>(arrayToMap(skills_, false));

  useEffect(() => {
    if (skills_.length !== 0) {
      setActive(arrayToMap(skills_, false));
    }
  }, []);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: string[]) => (
        <div className="row" key={skillRow[0]}>
          {skillRow.map((skill: string) => (
            <div className="column" key={skill}>
              <div
                className="skill"
                key={skill}
                onClick={() => {
                  console.log(active);
                  // const tempActive = active;
                  // tempActive[skill] = true;
                  // setActive(tempActive);
                }}
                onKeyDown={() => console.log(skillRatings_)}
                role="button"
                tabIndex={0}
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
