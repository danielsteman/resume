import Spinner from '../../animations/spinner.svg';

const LoadingScreen = () => (
  <div>
    <img src={Spinner} alt="loading" className="loadingAnimation" />
  </div>
);

export default LoadingScreen;
