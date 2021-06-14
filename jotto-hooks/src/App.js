import React, { useEffect } from 'react'

import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
import { getSecretWord } from './Redux/actions'
import LanguagePicker from './LanguagePicker'
//context
import languageContext from './contexts/language'


const reducer = (state, action) => {
  const { type, payload } = action
  switch(type) {
    case 'setSecretWord' :
      return { ...state, secretWord: payload }
    case 'setLanguage':
      return {...state, language: payload }
    default: throw new Error(`Invalid type: ${ type } `)
  } 
}

function App() {
  //const [ secreatWord, setSecretWord ] = useState('') 
  const [ state, dispatch ] = React.useReducer(
    reducer,
    { secretWord: null, language: 'en' }
  )
  const { language } = state
  const success = false
  const guessedWords = []
  
  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord })
  }

  const setLanguage = (leng) => {
    //console.log('setLanguage', leng)
    dispatch({ type: 'setLanguage', payload: leng })
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
    <languageContext.Provider value={ language }>
      <div data-test="app" className="container">
        <h1>Jotto</h1>

        <LanguagePicker setLanguage={ setLanguage } />

        <Congrats success={ true } />

        <GuessedWords 
          guessedWords={ guessedWords } 

        />

        <Input 
          success={ success } 
          secretWord={ state.secretWord }
        />

      </div>
    </languageContext.Provider>
  );
}

export default App;
