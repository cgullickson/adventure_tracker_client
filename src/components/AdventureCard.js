import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { likeAdventure } from "../actions/adventures";

class AdventureCard extends React.Component {
  render() {
    let adventure = this.props.adventure;
    return (
      <div key={adventure.id} className="AdventureCard">
        <Link to={`adventures/${adventure.id}`}>
          <h1 className="card-title">{adventure.title}</h1>
        </Link>
        <p>
          Location:<br />
          {adventure.location}
        </p>
        <img
          className="AdventureImage"
          src={adventure.img_url}
          alt={adventure.title}
        />
        <br />
        <br />
        <p>{adventure.description} </p>
        <p>
          Date:<br />
          {adventure.date}
        </p>
        <div>
          <button
            type="submit"
            onClick={() => {
              this.props.likeAdventure(adventure);
            }}
          >
            Like
          </button>{" "}
          <p>Likes: {adventure.likes}</p>
        </div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adventures: state.adventures
  };
};

export default connect(mapStateToProps, { likeAdventure })(AdventureCard);
