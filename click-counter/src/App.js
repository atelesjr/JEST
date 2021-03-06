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
    <div datatest="component-app" className="App">
      <h1 datatest="counter-display">
        Counter:  <span datatest="count">{count}</span>
      </h1>
      <button 
        datatest="increment-button"
        onClick={ () => setCount(count + 1)}
      >
        Increment counter
      </button>

      <button 
        datatest="decrement-button"
        onClick={ () => setCount(count - 1)}
      >
        Decrement counter
      </button>
      <p datatest="error-message">{errorMessage}</p>
    </div>
  );
}

export default App;
