import React from 'react';

const AdventureCard = ({ adventure }) => (
  <div key={adventure.id} className="AdventureCard">
    <a href={`adventures/${adventure.id}`}>
        <h1 className="card-title">{adventure.title}</h1>
    </a>
    <p>Location:<br/>
     {adventure.location}</p>
    <img className="AdventureImage" src={adventure.img_url} alt={adventure.title} /><br/><br/>
    <p>{adventure.description} </p>
    <p>Date:<br/>
     {adventure.date}</p>
  </div>
)

export default AdventureCard;
