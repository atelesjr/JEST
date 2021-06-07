import React, { useEffect } from 'react'

import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
import { getSecretWord } from './Redux/actions'

const reducer = (state, action) => {
  const { type, payload } = action
  switch(type) {
    case 'setSecretWord' :
      return { ...state, secreatWord: payload }
    default: throw new Error(`Invalid type: ${ type } `)
  } 
}

function App() {
  //const [ secreatWord, setSecretWord ] = useState('') 
  const [ state, dispatch ] = React.useReducer(
    reducer,
    { secreatWord: null }
  )

  const success = false
  const guessedWords = []
  
  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord })
  }

  useEffect(() => {
    getSecretWord(setSecretWord)

  }, [])

  if(state.secretWord === null){
    return (
      <div className="container" data-test="spinner" >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>

    )
  }

  return (
    <div data-test="app" className="container">
      <h1>Jotto</h1>

      <Congrats success={true} />

      <GuessedWords 
        guessedWords={ guessedWords } 

      />

      <Input 
        success={ success } 
        secretWord={ state.secreatWord }
      />

    </div>
  );
}

export default App;
