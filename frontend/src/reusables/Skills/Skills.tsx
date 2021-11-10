import { FC } from 'react';
import './Skills.scss';
import sliceArray from '../../utils/sliceArray';

export interface SkillsProps {
  skills_: never[],
  columns_: number
}

const Skills: FC<SkillsProps> = ({ skills_ = [], columns_ = 1 }): JSX.Element => {
  const skillsTable = sliceArray(skills_, columns_);
  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: string[]) => (
        <div className="row" key={skillRow[0]}>
          {skillRow.map((skill: string) => (
            <div className="column" key={skill}>
              <div className="skill" key={skill}>{skill}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
