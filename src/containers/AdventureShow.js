import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdventure } from "../actions/adventures";
import { deleteAdventure } from "../actions/adventures";
import logo from "../logo.svg";
import AdventureEdit from "./AdventureEdit";

class AdventureShow extends Component {
  componentDidMount() {
    this.props.fetchAdventure(this.props.match.params.adventureId);
  }

  render() {
    let adventure = this.props.adventure[0];
    const { deleteAdventure, history } = this.props;

    return (
      <div className="adventureShow">
        {adventure ? (
          <div>
            <h1 className="adventureName">{adventure.title}</h1>
            <h3>
              <p>
                Location: <br />
                {adventure.location}
              </p>
            </h3>
            <img
              className="AdventureShowImage"
              src={adventure.img_url}
              alt={adventure.title}
            />
            <h3>
              <p>
                Description: <br />
                {adventure.description}
              </p>
            </h3>
            <h3>
              <p>
                Date: <br />
                {adventure.date}
              </p>
            </h3>
          </div>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <br />
        <button
          type="submit"
          onClick={() => deleteAdventure(adventure.id, history)}
        >
          Delete Adventure
        </button>
        <br />
        <br />{" "}
        <div className="AdventureCardCenter">
          <AdventureEdit />{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adventure: state.adventures
  };
};

export default connect(mapStateToProps, { fetchAdventure, deleteAdventure })(
  AdventureShow
);
