import './Banner.scss';

const Banner = ({ title }: any) => (
  <div className="container">
    <p className="glitch">
      <span aria-hidden="true">{title}</span>
      {title}
      <span aria-hidden="true">{title}</span>
    </p>
  </div>
);

export default Banner;
