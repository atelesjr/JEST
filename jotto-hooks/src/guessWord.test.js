import { mount } from 'enzyme'
import { findByTestAttr } from './utils'
import App from './App'

const setup = (state = {}) => {
    const wrapper =  mount(<App />)

    const inputBox = findByTestAttr(wrapper, 'input-box')
    inputBox.simulate('change', { target: { value: 'train' } })

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault(){} })

    return wrapper
}

//describe.only
//describe.skip
//test.todo
describe('invalid word guessed', () => {
    test.todo('gueessedWords table does not get another row')

})


describe.skip('no words guessed', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        })
    })



    test('creates guessedWords table with one row', () => {
        
        const GuessedWords = findByTestAttr(wrapper, 'guessed-word' )
        expect(GuessedWords).toHaveLength(1)
    })  
    

})


describe.skip('some words guessed', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        })
    })

    test('adds row to guessedWords table', () => {
        const GuessedWordsNodes = findByTestAttr(wrapper, 'guessed-word' )
        expect(GuessedWordsNodes).toHaveLength(2)
    })  

    

})

describe.skip('guess secret word', () => {
    let wrapper

    beforeEach(() => {

        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        })

        const inputBox = findByTestAttr(wrapper, 'input-box')
        const mockEvent = { target: { value: 'party' } }
        inputBox.simulate('change', mockEvent)

        const submitButton = findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate('click', { preventDefault(){} })
    })
    
    test('adds row to guessedWords table', () => {
        console.log('wrapper', wrapper)
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes).toHaveLength(3)

    })  

    test('display congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'congrats')
        expect(congrats.text().length).toBeGreaterThan(0)

    })  

    test('does not display input compponent contents', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box')
        expect(inputBox.exists()).toBe(false)

        const submitButton = findByTestAttr('wrapper', 'submit-button')
        expect(submitButton.exists()).toBe(false)

    })  

})



test('some words guessed', () => {
    

})  