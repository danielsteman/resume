import './Title.scss';
import Waves from '../../svg/layered-waves-haikei.svg';

const Title = () => (
  <div className="titleComponent">
    <div className="mainTitle">
      <h1>Project title.</h1>
    </div>
    <img className="pageDivider" src={Waves} alt="PageDivider" />
  </div>
);

export default Title;
