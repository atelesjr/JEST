import { shallow } from 'enzyme'
import React from 'react'
import { findByTestAttr } from '../utils'
import Input from './index'

const mockSetCurrentGuess = jest.fn()
jest.mock('react', ()=> ({
    ...jest.requireActual('react'),
    useState: (initialState) => [ initialState, mockSetCurrentGuess]
}))

const setup = (success, secretWorld='party') => {
    return shallow(
        <Input 
            secrectWorld={ secretWorld } 
            success={ success }
        />
    )
}
   
describe('render', () => {
    describe('success is true', () => {
        let wrapper

        beforeEach(()  =>{
            wrapper = setup(true)
        })
        

        test('renders without error', () => {
            const component = findByTestAttr(wrapper, 'input')
            expect(component.length).toBe(1)
        })  
        
        test('input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            //console.log('test', inputBox.debug())
            expect(inputBox.exists()).toBe(false)
        }) 
        
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.exists()).toBe(false)
        }) 
    })

    describe('success is false', () => {
        let wrapper
        
        beforeEach(()  =>{
            wrapper = setup(false)
        })
        
        test('renders without error', () => {
            const component = findByTestAttr(wrapper, 'input')
            expect(component.length).toBe(1)
        })  
        
        test('input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.exists()).toBe(true)
        }) 
        
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.exists()).toBe(true)
        }) 
    
    })


})

describe('state controlled input field', () => {
    let wrapper
    
    beforeEach(()  =>{
        wrapper = setup(false)
    })
    
    afterEach(() => {
        jest.unmock('react')
    })

    test('state updates with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box')
        const mockEvent = { target: { value: 'train'}}

        inputBox.simulate("change", mockEvent)
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")
    })   

    test('field is cleared upon submit button click', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        
        submitButton.simulate('click',{ preventDefault(){} })
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    })   


})

// describe('state', () => {
    
//     test('state updates with value of input box upon change', () => {
//         const wrapper = setup()
//         const inputBox = findByTestAttr(wrapper, 'input-box')
//         const mockEvent = { target: { value: 'train'}}

//         inputBox.simulate("change", mockEvent)
//         expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")
//     })   

// })
