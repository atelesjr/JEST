import React from 'react'
import { mount } from 'enzyme'
import { findByTestAttr } from './utils'
import App from './App'

//activate global mock to make sure getSecretWrold doesn't make natwork call
import { getSecretWord as mockGetSecretWrold } from './Redux/actions'

jest.mock('./Redux/actions')


let wrapper

const setup = () => {
    return mount(
        <App />
    )
}

describe.each([
    [ null, true, false ],
    ['party', false, true ]

]) ('renders with secretWord as %s', (secretWord, loadingShows, appShows) => {
        let wrapper
        let originalUseReducer
        
        beforeEach(() => {
            originalUseReducer = React.useReducer

            const mockUseReducer = jest.fn()
                .mockReturnValue( [
                    { secretWord },
                    jest.fn()
                ])
            React.useReducer = mockUseReducer
            wrapper = setup()
        })

        afterEach(() => {
            React.useReducer = originalUseReducer
        })

        test(`renders loading spinner: ${loadingShows}`, () => {
            const spinner = findByTestAttr(wrapper, 'spinner')
            expect(spinner.exists()).toBe(loadingShows)
        }) 
        
        test(`renders app: ${appShows}`, () => {
            const spinner = findByTestAttr(wrapper, 'app')
            expect(spinner.exists()).toBe(appShows)
        }) 
    }
)

// test('renders without error', () => {
//     wrapper = setup()
//     const component = findByTestAttr(wrapper, 'app')
//     expect(component.length).toBe(1)
// })  

describe('get secret word', () => { 

    beforeEach(() => {
      mockGetSecretWrold.mockClear()
    })

    test('getSecretWord on app mount', () => {
        wrapper = setup()
        expect(mockGetSecretWrold).toHaveBeenCalledTimes(1)
    })  

    test('getSecretWord does not run on app update', () => {
        wrapper = setup()
        mockGetSecretWrold.mockClear()
        
        //using setProps beacause .update() doesn't trigger useEffect
        wrapper.setProps()

        expect(mockGetSecretWrold).toHaveBeenCalledTimes(0)
    })  

})