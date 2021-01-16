import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [ count, setCount ] = useState(0)
  const [ errorMessage, setErrorMessage ] = useState()

  useEffect(() => {
    if(count < 0){
      setCount(0)
      setErrorMessage("The counter can't go bellow zero")
    } else if(count > 0) {
      setErrorMessage()
    }
  }, [count])

  return (
    <div dataTest="component-app" className="App">
      <h1 dataTest="counter-display">
        Counter:  <span dataTest="count">{count}</span>
      </h1>
      <button 
        dataTest="increment-button"
        onClick={ () => setCount(count + 1)}
      >
        Increment counter
      </button>

      <button 
        dataTest="decrement-button"
        onClick={ () => setCount(count - 1)}
      >
        Decrement counter
      </button>
      <p>{ errorMessage }</p>
    </div>
  );
}

export default App;
