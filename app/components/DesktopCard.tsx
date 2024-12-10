import React from 'react'

const DesktopCard = ({ title, icon, content, classNameProp } : IDesktopCard) => {
  return (
    <div className={`card ${classNameProp}`}>
        <div className="card__header">
            <h4 className="card__title">{title}</h4>
            <span className="card__icon">{icon}</span>
        </div>
        <div className="card__content">
            {content}
        </div>
    </div>
  )
}

export default DesktopCard