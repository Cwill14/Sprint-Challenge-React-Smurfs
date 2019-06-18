import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              {...props}
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              deleteSmurf={props.deleteSmurf}
            />
          );
        })}
      </ul>
    </div>
  );
}


Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
