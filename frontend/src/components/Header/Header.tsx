import './Header.scss';
import { useState, useEffect } from 'react';
import getFields from '../../api/utils';

const Header = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    (async function getHeaderContent() {
      const data = await getFields('Home', ['navigation']);
      setNavItems(data.navigation);
    }());
  }, []);

  return (
    <div className="headerComponent">
      <div className="nav">
        <ul className="item">
          {navItems.map((item: string) => (
            <li key={item}><a href="/">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Header;
