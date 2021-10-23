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
  console.log(skillsTable);

  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: string[][]) => (
        <div className="row" key={Math.PI}>
          {skillRow.map((skill: string[]) => (
            <div className="column" key={Math.PI}>
              <div className="skill" key={Math.PI}>{skill}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
