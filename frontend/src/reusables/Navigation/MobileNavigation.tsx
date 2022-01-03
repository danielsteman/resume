import { useState } from 'react';
import './MobileNavigation.scss';
import { Rotate as Hamburger } from 'hamburger-react';

const MobileNavigation = ({ items }: any) => {
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
