import { useState } from 'react';
import './MobileNavigation.scss';
import { Rotate as Hamburger } from 'hamburger-react';
import { NavigationProps } from '../../types';

const MobileNavigation = ({ items, handleRef, refs }: NavigationProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="hamburgerContainer">
        <Hamburger
          color="#BC6FF1"
          toggled={open}
          toggle={handleOpen}
          size={48}
          rounded
        />
      </div>
      {open && (
        <div className="mobileNav">
          <ul className="mobileItem">
            {items.navigation.map((item) => (
              <li key={item}>
                <div
                  className="mobileNavigationItem"
                  onClick={() => {
                    handleRef(refs[item!]);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
