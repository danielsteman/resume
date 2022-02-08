import useWindowDimensions from '../../hooks/useWindowSize';
import './TypeWriter.scss';

const TypeWriter = () => {
  const { height, width } = useWindowDimensions();
  const text = width > 414 && height
    ? 'Hi there, I can help you out with stuff'
    : 'Hi there, I can help \n you out with stuff';
  const splitText = text.split(/\r?\n/);

  if (splitText.length === 1) {
    return (
      <div className="typewriter">
        <div className="typewriter-text">{text}</div>
      </div>
    );
  }
  return (
    <div className="typewriter">
      <div className="typewriter-text-container">
        {splitText.map((sent) => (
          <div className="typewriter-text">{sent}</div>
        ))}
      </div>
    </div>
  );
};

export default TypeWriter;
