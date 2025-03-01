import React from 'react';

// class SmurfForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       age: '',
//       height: ''
//     };
//   }
const SmurfForm = props => {


  return (
    <div className="SmurfForm">
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.handleInputChange}
          placeholder="name"
          value={props.smurf.name}
          name="name"
          required
        />
        <input
          onChange={props.handleInputChange}
          placeholder="age"
          value={props.smurf.age}
          name="age"
          required
        />
        <input
          onChange={props.handleInputChange}
          placeholder="height"
          value={props.smurf.height}
          name="height"
          required
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}


export default SmurfForm;
