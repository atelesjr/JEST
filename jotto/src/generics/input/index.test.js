import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import Input from './index'
import { guessWord } from '../../redux/actions'

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
            const submitButton = findByTestAttr(wrapper, 'submit-box')
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
            const submitButton = findByTestAttr(wrapper, 'submit-box')
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

