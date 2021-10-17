import './Experience.scss'
import { useState, FC } from 'react'

const Experience: FC = () => {

  const title: string = "EXPERIENCES"
  const employers: string[] = ["A.S.R.", "A.S.R.", "VIRTUAGYM", "MSC. FIN-TECH", "BSC. INT. BUS."]

  const [index, setIndex] = useState(0)

  return (
    <div>
      <div className="title">{title}</div>
      <div className="underline"/>
      <div className="container">
        <div className="employerContainer">
          <div className="scrollBar">
            <div className={`slider moveSlider${index}`} />
          </div>
          <div className="employerList">
            {employers.map((employer, index) => (
              <div 
                className="employer"
                onClick={() => setIndex(index)}
                key={index}
              >
                {employer}
              </div>
            ))}
          </div>
        </div>
        <div className="jobContainer">
          <div className="jobTitleContainer">
            <div className="jobTitle">
              Developer @ a.s.r.
            </div>
            <div className="jobDuration">
              May 2021 - August 2021
            </div>
          </div>
          <div className="jobDescription">
            Your move may vary as far as how things are organized: it could have more directories, less directories, or even further nesting into components, styling, and testing.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience