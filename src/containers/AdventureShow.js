import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdventure } from '../actions/adventures';
import { deleteAdventure } from '../actions/adventures';




class AdventureShow extends Component {

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
        <h1 className="adventureName">{adventure.title}</h1>
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
