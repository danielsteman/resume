import React from 'react';
import './Header.scss'

const Header = () => {

  const items: string[] = ['contact', 'experience', 'projects', 'resume']

  return (
    <div className="nav">
      <ul className="item">
        {items.map((item: string, index: number) => {
          return(
            <li key={index}><a href="/">{item}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header