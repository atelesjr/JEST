import { shallow } from 'enzyme'
import { findByTestAttr } from '../utils'
import GuessedWords from './index'

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMacthCount: 3 }] 
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords { ...setupProps } />)
}

describe('if there are no words guessed', () => {
    let wrapper

    beforeEach(()=>{
        wrapper = setup({ guessedWords:[] })
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'comp-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
        
    })
    

})

describe('if there are words guessed', () => {
    let wrapper
    const guessedWords = [
        { guessedWord: 'train', letterMacthCount: 3 },
        { guessedWord: 'agile', letterMacthCount: 1 },
        { guessedWord: 'party', letterMacthCount: 5 }
    ]

    beforeEach(()=>{
        wrapper = setup({ guessedWords })
    })

    test('renders without error', () => {
        //console.log('t3', wrapper.debug())
        const component = findByTestAttr(wrapper, 'comp-guessed-words')
        expect(component.length).toBe(1)
        
    });

    test('renders "guessed words" section' , () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1)
        
    });

    test('correct number of guessed words', () => {
        //console.log('t3', wrapper.debug())
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsNode.length).toBe(guessedWords.length)
        
    });
    
    
    
})

test('correct number of guessed word', () => {
    
});
