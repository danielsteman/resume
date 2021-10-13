import './Title.scss'
import Waves from '../../../src/svg/layered-waves-haikei.svg'

const Title = () => {
  return (
    <div className="page">
      <div className="title">
        <h1>Hi, I'm Daniel</h1>
        <h4>and I like coding.</h4>
      </div>
      <img className="pageDivider" src={Waves} alt="PageDivider"/>
    </div>
  )
}

export default Title