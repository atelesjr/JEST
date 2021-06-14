import { useContext } from 'react'
import languageContext from '../contexts/language'
import getStringByLanguage from '../helpers/strings'

const GuessedWords = ({ guessedWords }) => {
    let contents
    const language = useContext(languageContext)

    const guessedWordsRows = guessedWords.map((word, i) => (
        <tr data-test="guessed-word" key={i}>
            <td>{ word.guessedWord }</td>
            <td>{ word.letterMacthCount }</td>
        </tr>
    ))

    if(guessedWords.length === 0){
        contents = (
            <span data-test="guess-instructions">
                { getStringByLanguage(language, 'guessPrompt') }
            </span>
        )
    } else {
        contents = (
            <div data-test="guessed-words">
                <h3>{ getStringByLanguage(language, 'guessColumnHeader') }</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
    }

    return(
        <div data-test="comp-guessed-words">
            { contents }
        </div>
    )
}

export default GuessedWords