// import useWindowDimensions from '../../hooks/useWindowSize';
// import './TypeWriter.scss';

// const TypeWriter = () => {
//   const { height, width } = useWindowDimensions();
//   const text = width > 414 && height
//     ? 'Hi there, I can help you out with stuff'
//     : 'Hi there';

//   return (
//     <div className="typewriter">
//       <div className="typewriter-text">{text}</div>
//     </div>
//   );
// };

// export default TypeWriter;

import './TypeWriter.scss';

const TypeWriter = () => (
  <div className="typewriter">
    {/* <div className="typewriter-text">Hi there, I can help you out with stuff</div> */}
  </div>
);

export default TypeWriter;
