import './Experience.scss'
import Card from '../../reusables/Card/Card'
// import { FC } from 'react'

const Experience = () => {

  const title: string = "EXPERIENCES"
  const employers: string[] = ["A.S.R.", "A.S.R.", "VIRTUAGYM", "MSC. FIN-TECH", "BSC. INT. BUS."]

  return (
    <Card title={title}>
      <div className="employerList">
        {employers.map(employer => (
          <div>
            {employer}
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Experience