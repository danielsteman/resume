import './Title.scss'
import Waves from '../../../src/svg/layered-waves-haikei.svg'

const Title = () => {
  return (
    <div className="titleComponent">
      <div className="mainTitle">
        <h1>Hi, I'm Daniel</h1>
      </div>
      <img className="pageDivider" src={Waves} alt="PageDivider"/>
    </div>
  )
}

export default Title