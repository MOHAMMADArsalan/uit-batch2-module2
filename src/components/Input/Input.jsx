// import React from 'react';

const Input = ({onInputChange}) => {
  return (
    // React Fragment;
    // <React.Fragment>
      <>
        <label>Add Input</label> <br />
        <input type="text" onChange={onInputChange} />
      </>
    // </React.Fragment>

  );
};

export default Input;