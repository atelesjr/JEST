import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducers'

export const middleWares = [Thunk]

const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore)

export default createStoreWithMiddleware(rootReducer)