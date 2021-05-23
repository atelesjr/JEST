// import { createStore, applyMiddleware } from 'redux'

// import rootReducer from '../src/redux/reducers'
//import { middlewares } from '../src/redux/store'

// export const storeFactory = (initialState) => {
//     //console.log('initialState', initialState)
//     const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
//     return createStoreWithMiddleware(rootReducer, initialState)
// }

export const findByTestAttr = (wrapper, value) =>{ 
    return wrapper.find(`[data-test='${value}']`)
}

