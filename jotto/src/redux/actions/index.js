import axios from 'axios'
import { getLetterMatchCount } from '../../helpers'

export const CORRECT_GUESS = 'CORRECT_GUESS'
export const GUESS_WORD = 'GUESS_WORD'
export const SET_SECRET_WORD = 'SET_SECRET_WORD'

export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
        
        dispatch({
            type: GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        })

        if( guessedWord === secretWord ) {
            dispatch({ type: CORRECT_GUESS })
        }
        
    }
}

export const getSecretWord = () => {
    return dispatch => {
        return axios.get('http://localhost:3030')
        .then( response => {
            dispatch({
                type: SET_SECRET_WORD,
                payload: response.data
            })
        })
    }
}