import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import Input, { UnconnectedInput } from './index'


const setup = (ininitalState={}) => {
    const store = storeFactory(ininitalState)
    //.dive() to get child comp of (input)
    const wrapper = shallow(<Input store={ store } />).dive().dive()
    //console.log(wrapper.debug())
    return wrapper
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper
        
        beforeEach(() => {
            const initialState = { success: false }
            wrapper = setup(initialState)
        })

        test('renders compomnent without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
            
        });

        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(1)
        });

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(1)
            
        });

    });

    describe('word has been guessed', () => {
        let wrapper
        
        beforeEach(() => {
            const initialState = { success: true }
            wrapper = setup(initialState)
        })

        test('renders compomnent without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        });
    
        test('does not renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(0)
        });
    
        test('does not renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(0)
        });
    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () =>{
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })

    test('`guessWord` acttion creator is function prop',()=>{
        const wrapper = setup()
        const  guessWordProp = wrapper.instance().props.guessWord
        expect(guessWordProp).toBeInstanceOf(Function)
    })

});

describe('guessWord action creator call', () => {
    let guessWordMock
    let wrapper
    const guessedWord = 'train'

    beforeEach(()=>{
        guessWordMock = jest.fn()

        const props = {
            guessWord: guessWordMock
        }

        wrapper = shallow(<UnconnectedInput {...props} />)

        wrapper.setState({ currentGuess: guessedWord })

        const submitButton = findByTestAttr(wrapper, 'submit-button')

        submitButton.simulate('click', { preventDefault() {} })
    })

    test('calls guessWord when button is clicked', () => {        
        const gessWordCallcount = guessWordMock.mock.calls.length
        expect(gessWordCallcount).toBe(1)
    });

    test('calls guessWord with input value as argument', () => {
        const guessedWordArg = guessWordMock.mock.calls[0][0]
        expect(guessedWordArg).toBe(guessedWord)
        
    });

    test('input box clears on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('')
    });
});



