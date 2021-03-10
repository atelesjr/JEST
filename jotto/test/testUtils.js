import checkPropTypes from "check-prop-types"
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../src/redux/reducers'
import { middlewares } from '../src/redux/store'


/**
* @function findByTestAttr
* @params {string} value
* @returns {ShallowWrapper}
*/

export const storeFactory = (initialState) => {
    //console.log('initialState', initialState)
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[datatest='${value}']`)
    
}

export const checkProps = (component, props) => {
    //console.log('commp', component)
    //console.log('props', props.debug())
    const propError = checkPropTypes(
        component.propTypes, 
        props,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}