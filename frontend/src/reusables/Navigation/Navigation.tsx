import './Navigation.scss';
import { NavigationProps } from '../../types';

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
