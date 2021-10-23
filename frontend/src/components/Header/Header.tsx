import './Header.scss';

const Header = () => {
  const items: string[] = ['contact', 'experience', 'projects', 'resume'];

  return (
    <div className="headerComponent">
      <div className="nav">
        <ul className="item">
          {items.map((item: string) => (
            <li key={Math.PI}><a href="/">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Header;
