import React from 'react'
import PropTypes from 'prop-types'

/**
 * @function Congrats
 * @returns {JSX.Element}
 */

const GuessedWords = (props) => {
    let contents 
    
    if(props.guessedWords?.length === 0) {
        contents = (
            <span datatest="guess-instructions" >
                Try to guess the secret word!
            </span>
        )
    } else {
        const guessedWordRows = props.guessedWords?.map((word, index)=> (
            <tr datatest="guessed-word" key={ index }>
                <td>{ word.guessedWord }</td>
                <td>{ word.letterMatchCount }</td>
            </tr>
        ))

        contents = (
            <div datatest="guessed-words">
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Guess</th>
                            <th>Maatching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordRows }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
       <div datatest="component-guessed-words">
           { contents }
       </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
       PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
       })
   ).isRequired,
}

export default GuessedWords