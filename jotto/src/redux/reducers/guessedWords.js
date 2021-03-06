import { GUESS_WORD } from '../actions'

const guessedWord = ( state=[] , action ) => {
    switch(action.type) {
        case GUESS_WORD: 
            return [ ...state, action.payload ]
        default: 
            return state
    }
}

export default guessedWord