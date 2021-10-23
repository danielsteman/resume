import './Header.scss';

interface HeaderProps {
  id: number,
  name: string
}

const Header = () => {
  const items: HeaderProps[] = [
    {
      id: 1,
      name: 'contact',
    },
    {
      id: 2,
      name: 'experience',
    },
    {
      id: 3,
      name: 'projects',
    },
    {
      id: 4,
      name: 'resume',
    },
  ];

  return (
    <div className="headerComponent">
      <div className="nav">
        <ul className="item">
          {items.map((item: HeaderProps) => (
            <li key={item.id}><a href="/">{item.name}</a></li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Header;
