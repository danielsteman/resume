import './Navigation.scss';

interface NavigationItemProps {
  navigation: Array<string | undefined>
}

interface NavigationProps {
  items: NavigationItemProps
  handleRef: () => void
}

const Navigation = ({ items, handleRef }: NavigationProps) => (
  <div className="nav">
    <ul className="item">
      {items.navigation.map(((item) => (
        <li key={item}>
          <div
            className="navigationItem"
            onClick={() => {
              handleRef();
            }}
            onKeyDown={handleRef}
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
