import React from 'react';

const AdventureCard = ({ adventure }) => (
  <div key={adventure.id} className="AdventureCard">
    <h3>{adventure.title}</h3>
    <p>Location: {adventure.location}</p>
    <img className="AdventureImage" src={adventure.img_url} alt={adventure.title} />
    <p>Description: {adventure.description} </p>
    <p>Date: {adventure.date} </p>
  </div>
)

export default AdventureCard;
