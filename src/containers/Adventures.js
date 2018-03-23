import React from 'react';
import './Adventures.css'

const Adventures = (props) => (
  <div>
    <h1>Adventures</h1>
      {props.adventures.map(adventure =>
        <div className="AdventureCard">
          <h3>{adventure.title}</h3>
          <p>Location:{adventure.location}</p>
          <p>Description:{adventure.description}</p>
          <p>Date:{adventure.date}</p>
          <img className="AdventureImage" src={adventure.img_url} alt={adventure.title} />
        </div>
      )}
  </div>
)

export default Adventures;
