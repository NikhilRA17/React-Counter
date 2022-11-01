import React, { useState } from 'react';
import './style.css';
import Increment from './Increment';
import Decrement from './Decrement';

export default function App() {
  const [state, setState] = useState(15);

  const increment = () =>{
    setState(state+1)
  }

  const decrement = ()=>{
    setState(state-1)
  }

  return (
    <div>
      <h1>{state}</h1>
      <Increment increment={increment} />

      <Decrement decrement={decrement}/>
    </div>
  );
}
