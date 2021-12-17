import { useState } from 'react';
import './MobileNavigation.scss';

const MobileNavigation = ({ items }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="iconPlaceHolder"
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        aria-label="Go to home page"
        tabIndex={0}
      />
      {open && (
        <div className="nav">
          <ul className="item">
            {items.navigation.map((item: string) => (
              <li key={item}>
                <a href="/">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
