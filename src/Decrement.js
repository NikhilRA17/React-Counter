import React, { useState } from 'react';

export default function Increment(props) {

  return (
    <div>
      <button onClick={props.decrement}>Increment</button>
    </div>
  );
}
