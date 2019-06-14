import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        // console.log(err);
        this.setState({ error: err });
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink className="nav-link" exact to="/">Smurfs</NavLink>
          <NavLink className="nav-link" to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />        
        <Route path="/smurf-form" render={props => <SmurfForm {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
