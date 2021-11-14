import './Title.scss';

interface TitleProps {
  title: String
}

const Title = ({ title }: TitleProps) => (
  <div className="titleContainer">
    <div className="title">{title}</div>
    <div className="underline" />
  </div>
);

export default Title;
