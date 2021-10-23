import './Card.scss';
import { ReactElement } from 'react';

interface CardProps {
  title: string,
  // eslint-disable-next-line react/require-default-props
  text?: string | (string|ReactElement)[],
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
}

const Card = ({ title, text = '', children = null }: CardProps) => (
  <div className="container">
    <div className="title">{title}</div>
    <div className="underline" />
    <div className="card">
      <div className="text">
        {text}
        {children}
      </div>
    </div>
  </div>
);

export default Card;
