import "./Card.scss"
import { ReactElement } from "react";

interface CardProps {
  title: string,
  text: string | (string|ReactElement)[],
  children: React.ReactNode
}

const Card  = ({ title, text, children }:CardProps) => {
  return (
    <div>
      <div className="container">
        <div className="title">{title}</div>
        <div className="underline"></div>
        <div className="card">
          <div className="text">
            {text}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card