import React from 'react';

const Event = ({ name, description, imgSrc, link, bgColor }) => {
  return (
    <div className="Card">
      <div className={`img-container ${bgColor}`}>
        <img className="event-image" src={imgSrc} alt={`${name} logo`} />
      </div>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <a href={link}>
        <button className={bgColor}>{name}</button>
      </a>
    </div>
  );
};

export default Event;
