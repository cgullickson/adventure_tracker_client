import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdventureCard from '../components/AdventureCard';
import AdventureForm from './AdventureForm';
import { getAdventures } from '../actions/adventures';
import './Adventures.css';

class Adventures extends Component {

  componentDidMount() {
    this.props.getAdventures()
  }

  render() {
    return (
      <div>
        <div className="AdventuresContainer">
          {this.props.adventures.map(adventure => <AdventureCard key={adventure.id} adventure={adventure} />)}
          <div className="AdventureCard">
            <AdventureForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    adventures: state.adventures
  })
}

export default connect(mapStateToProps, { getAdventures })(Adventures);
