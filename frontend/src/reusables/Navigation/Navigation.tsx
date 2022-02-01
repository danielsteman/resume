import './Navigation.scss';
import { RefMap } from '../../types';

interface NavigationItemProps {
  navigation: Array<string | undefined>
}

interface NavigationProps {
  items: NavigationItemProps
  handleRef: (ref: any) => void
  refs: RefMap
}

const Navigation = ({ items, handleRef, refs }: NavigationProps) => (
  <div className="nav">
    <ul className="item">
      {items.navigation.map(((item) => (
        <li key={item}>
          <div
            className="navigationItem"
            onClick={() => {
              handleRef(refs[item!]);
            }}
            onKeyDown={() => {
              handleRef(refs[item!]);
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
