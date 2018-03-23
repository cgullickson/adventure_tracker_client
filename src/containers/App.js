import React, { Component } from 'react';
import './App.css';
import Adventures from './Adventures';

// const adventures = [
//   {
//     title: "Dude",
//     description: "Sweet",
//     date: 2018-3-16,
//     location: "Denver",
//     img_url: "http://www.electrowow.net/wp-content/uploads/2017/06/golfing.jpg"
//   },
//   {
//     title: "Whoa",
//     description: "Man",
//     date: 2018-1-22,
//     location: "Denver",
//     img_url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Snowboarding.jpg"
//   }
// ]

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      adventures: []
    }
  }

  componentDidMount () {
    fetch("http://localhost:3001/api/adventures")
    .then(response => response.json())
    .then(adventures => this.setState({ adventures }))
  }

  render() {
    return (
      <div className="App">
        <Adventures adventures={this.state.adventures}/>
      </div>
    );
  }
}

export default App;
