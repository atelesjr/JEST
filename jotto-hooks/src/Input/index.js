import React, { useState, useContext } from 'react'
import languageContext from '../contexts/language'
import getStringByLanguage from '../helpers/strings'

function Input({ success, secretWord })  {
    const language = useContext(languageContext)
    const [ currentGuess, setCurrentGuess ] = useState('')

    if (success) return <div data-test="input" /> 

    return (
        <div data-test="input">       
            <form className="form-inline">
               <input
                    data-test="input-box"
                    className="mb-2 mx sm-3"
                    type="text"
                    placeholder={getStringByLanguage(language, 'guessInputPlaceholder')}
                    value={ currentGuess }
                    onChange={(e) => setCurrentGuess(e.target.value)}
                ></input>
                <button
                    data-test="submit-button"
                    onClick={ (e) => { 
                        e.preventDefault()
                        setCurrentGuess("") 
                    }}
                    className="btn btn-primary mb-2"
                >
                    { getStringByLanguage(language, 'submit') }
                </button>
            </form>     
        </div>
    )
}

export default Input