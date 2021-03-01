import { storeFactory } from '../../../test/testUtils'
import { guessWord } from '../../redux/actions'

describe('guessWord action dispatcher', () => {
    const secretWord = 'party'
    const unsuccessfulGuess = 'train'

    describe('no guessed words', () => {
        let store
        const initialState = { secretWord }

        beforeEach(()=>{
            store = storeFactory(initialState)
        })

        test('updates state correctly for unsucessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guesseWords: [{
                    guesseWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            }
            
            expect(newState).toEqual(expectedState)
        });

        test('updates state correctly for sucessful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guesseWords: [{
                    guesseWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            
            expect(newState).toEqual(expectedState)
            
        });
    
    });

    describe('some guessed words', () => {
        test('updates state correctly for unsucessful guess', () => {
            
        });

        test('updates state correctly for sucessful guess', () => {
            
        });
    
    })
    
});