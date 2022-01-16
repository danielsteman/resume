/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';
import './Card.scss';
import { ReactElement } from 'react';

interface CardProps {
  // eslint-disable-next-line react/require-default-props
  text?: string | (string|ReactElement)[],
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
}

const Card = ({ text = '', children = null }: CardProps) => {
  const santizer = DOMPurify.sanitize;
  return (
    <div className="container">
      <div className="card">
        <div className="text">
          <div dangerouslySetInnerHTML={{ __html: santizer(text.toString()) }} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
