import { FC } from 'react';
import './Skills.scss';
import sliceArray from '../../utils/sliceArray';
import { SkillProps } from '../../components/About/About';

export interface SkillsProps {
  skills: SkillProps[],
  columns: number
}

const Skills: FC<SkillsProps> = ({ skills, columns }): JSX.Element => {
  const skillsTable: any = sliceArray(skills, columns);

  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: SkillProps[]) => (
        <div className="row" key={skillRow[0].id}>
          {skillRow.map((skill: SkillProps) => (
            <div className="column" key={skill.id + 100}>
              <div className="skill" key={skill.id + 200}>{skill.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
