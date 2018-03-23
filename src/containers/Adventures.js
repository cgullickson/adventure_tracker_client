import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdventureCard from '../components/AdventureCard';
import AdventureForm from './AdventureForm';
import './Adventures.css';

class Adventures extends Component {

  // componentDidMount() {
  //   this.props.getAdventures()
  // }

  render() {
    return (
      <div className="AdventuresContainer">
        <h1>Adventures</h1>
        {this.props.adventures.map(adventure => <AdventureCard key={adventure.id} adventure={adventure} />)}
        <AdventureForm />
      </div>
    );
  }
}

export default Adventures
