import { FC } from "react"; 
import "./ListItem.scss"

interface SkillProp {
  itemDescription: string
}

const Skill: FC<SkillProp> = ({ itemDescription }): JSX.Element => {
  return (
    <div className="itemBox">
      {itemDescription}
    </div>
  )
}

export default Skill