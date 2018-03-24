import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdventure } from '../actions/adventures';
import { deleteAdventure } from '../actions/adventures';
import AdventureForm from './AdventureForm';
import AdventureCard from '../components/AdventureCard';
import Adventures from './Adventures';




class AdventureShow extends Component {


  handleOnClick = () => {
    this.props.likeAdventure(this.props.adventure[0])
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.match.params.adventureId);
	}

  render() {
    let adventure = this.props.adventure[0];
    const {deleteAdventure, history} = this.props;

    return (
    <div className='adventureShow'>
      {adventure ? (
      <div>
        <h1 className="adventureName">{adventure.name}</h1>
        <h3><p>Location: <br></br>{adventure.location}</p></h3>
        <img className="AdventureImage" src={adventure.img_url} alt={adventure.title} />
        <h3><p>Description: <br></br>{adventure.description}</p></h3>
        <h3><p>Date:  {adventure.date}</p></h3>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <br></br>
    <button onClick={() => deleteAdventure(adventure.id, history)}>
      Delete
    </button>
    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    adventure: state.adventures
  })
}

export default connect(mapStateToProps, {fetchAdventure, deleteAdventure})(AdventureShow);
