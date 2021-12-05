import './Navigation.scss';

const Navigation = ({ items }: any) => (
  <div className="nav">
    <ul className="item">
      {items.map((item: string) => (
        <li key={item}>
          <a href="/">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
