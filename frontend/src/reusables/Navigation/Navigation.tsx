import './Navigation.scss';

interface NavigationItemProps {
  navigation: Array<string | undefined>
}

interface NavigationProps {
  items: NavigationItemProps
  handleRef: (ref: any) => void
  experienceRef: any
}

const Navigation = ({ items, handleRef, experienceRef }: NavigationProps) => (
  <div className="nav">
    <ul className="item">
      {items.navigation.map(((item) => (
        <li key={item}>
          <div
            className="navigationItem"
            onClick={() => {
              handleRef(experienceRef);
            }}
            onKeyDown={() => {
              handleRef(experienceRef);
            }}
            role="button"
            tabIndex={0}
          >
            {item}
          </div>
        </li>
      )))}
    </ul>
  </div>
);

export default Navigation;
