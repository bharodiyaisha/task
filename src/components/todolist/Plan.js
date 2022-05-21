import React from 'react';

const Plan = (props) => {

  return (
    <>
      <li>
        {props.value}
      </li>

      <button onClick={() => {
        props.onDelete(props.id)
      }}>Delete</button>
      <button onClick={() => {
        props.onUpdate(props.id)
      }}>Edit</button>
      
    </>
  );
}

export default Plan;
