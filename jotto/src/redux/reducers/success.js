import { CORRECT_GUESS } from '../actions'

const success = ( state = false , action ) => {
    switch(action.type) {
        case (CORRECT_GUESS): 
            return true;
        default: 
            return state
    }
}

export default success