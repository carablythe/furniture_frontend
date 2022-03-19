import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer} from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : []

const middleware = [thunk]

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
