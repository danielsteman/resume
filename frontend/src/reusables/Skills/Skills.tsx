import { FC } from "react"; 
import "./Skills.scss"
import { sliceArray } from "../../utils/sliceArray"

export interface SkillsProps {
  skills: string[],
  columns: number
}

const Skills: FC<SkillsProps> = ({ skills, columns }): JSX.Element => {

  const skillsTable: any = sliceArray(skills, columns)

  return (
    <div className="skillsContainer">
      {skillsTable.map((skillRow: string[][], i: number) => (
        <div className="row" key={i}>
          {skillRow.map((skill: string[], j: number) => (
            <div className="column" key={j}>
              <div className="skill" key={j}>{skill}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Skills