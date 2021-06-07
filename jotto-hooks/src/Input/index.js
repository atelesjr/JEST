import React, { useState } from 'react'

function Input({ success, secretWord })  {
    const [ currentGuess, setCurrentGuess ] = useState('')

    if (success) return <div data-test="input" /> 

    return (
        <div data-test="input">       
            <form className="form-inline">
               <input
                    data-test="input-box"
                    className="mb-2 mx sm-3"
                    type="text"
                    placeholder="enter guess"
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
                    Submit
                </button>
            </form>     
        </div>
    )
}

export default Input