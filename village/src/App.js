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
      error: '',
      smurf: {
        name: '',
        age: '',
        height: ''
      }
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

  addSmurf = (event) => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.smurf.name,
      age: this.state.smurf.age,
      height: this.state.smurf.height
    }
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        // console.log(res);
        this.setState({ smurfs: res.data })
        console.log(this.props);
        this.props.history.push('/');
      })
      .catch(err => {
        // console.log(err);
        this.setState({ error: err });
      })
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();    
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({list: res.data})
      })
      .catch(err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value 
      }
    })
  };
  
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
        <Route 
          exact 
          path="/" 
          render={props => 
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf} 
            /> 
          } 
        />        
        <Route 
          path="/smurf-form" 
          render={props => 
            <SmurfForm 
              {...props} 
              smurfs={this.state.smurfs} 
              smurf={this.state.smurf}
              addSmurf={this.addSmurf} 
              handleInputChange={this.handleInputChange} 
            /> 
          } 
        />
      </div>
    );
  }
}

export default App;
