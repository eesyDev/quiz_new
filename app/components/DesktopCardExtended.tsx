import React from 'react'

const DesktopCard = ({ title, icon, content, classNameProp, totalLessons, completedLessons } : DesktopCardExtended) => {

    const percentProgress = (completedLessons / totalLessons) * 100;
  return (
    <div className={`card ${classNameProp}`}>
        <span className="card__icon">{icon}</span>
        <div className="card__header mt-2">
            <h4 className="card__title">{title}</h4>
        </div>
        <div className="card__content flex gap-4 items-center mt-4">
        <div className="progress-container w-4/5">
            <div className="progress-bar" id="progress-bar" style={{width: percentProgress + '%'}}></div>
        </div>
        <p id="progress-text w-1/5">{`${completedLessons}/${totalLessons}`}</p>
        </div>
    </div>
  )
}

export default DesktopCard