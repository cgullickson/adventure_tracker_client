import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAdventureFormData } from "../actions/adventureForm";
import { editAdventure } from "../actions/adventures";
import { fetchAdventure } from "../actions/adventures";

class AdventureEdit extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentAdventureFormData = Object.assign(
      {},
      this.props.adventureFormData,
      {
        [name]: value
      }
    );
    this.props.updateAdventureFormData(currentAdventureFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.editAdventure(
      this.props.adventure.id,
      this.props.adventureFormData
    );
  };

  render() {
    const {
      title,
      location,
      description,
      date,
      img_url
    } = this.props.adventureFormData;

    return (
      <div className="addAdventure">
        <h1>Edit This Adventure</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">
              Title:<br />
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="title"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="location">
              Location:<br />
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="location"
              value={location}
            />
          </div>
          <div>
            <label htmlFor="img_url">
              Image Url:<br />
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>
          <div>
            <label htmlFor="description">
              Description:<br />
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>
          <div>
            <label htmlFor="date">
              Date:<br />
            </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="date"
              value={date}
            />
          </div>
          <br />
          <button type="submit">Update Adventure</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adventureFormData: state.adventureFormData,
    adventure: state.adventures[0]
  };
};

export default connect(mapStateToProps, {
  updateAdventureFormData,
  editAdventure,
  fetchAdventure
})(AdventureEdit);
