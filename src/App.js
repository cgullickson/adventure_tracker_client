import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Adventures from "./containers/Adventures";
import AdventureForm from "./containers/AdventureForm";
import AdventureShow from "./containers/AdventureShow";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/adventures" component={Adventures} />
                <Route exact path="/adventures/new" component={AdventureForm} />
                <Route
                  path="/adventures/:adventureId"
                  component={AdventureShow}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
