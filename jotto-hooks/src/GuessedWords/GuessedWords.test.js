import { shallow } from 'enzyme'
import { findByTestAttr } from '../utils'
import GuessedWords from './index'

const defaultProps = [{
    guessedWords:   { guessedWord: 'train', letterMacthCount: 3 } 
}]

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords { ...setupProps } />)
}

describe('if there are no words guessed', () => {

})

describe('if there are words guessed', () => {
    
})

test('renders without error', () => {
    const wrapper = setup()
    console.log(wrapper.debug())
    //const component = findByTestAttr(wrapper, 'congrats')
    
});
