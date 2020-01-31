import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { promiseReducer} from './reducers/promiseReducer'
import { loginReducer } from './reducers/loginReducer'
import { authorization } from './reducers/actions'
import { synchroReducer } from './reducers/synchroReducer'
import { readItemFromStorage } from '../functions'

const reducers = combineReducers({
  promise: promiseReducer,
  authorization: loginReducer,
  synchro: synchroReducer
})

const store = createStore(reducers, composeWithDevTools (applyMiddleware(thunk)))

readItemFromStorage().then (res => {
  if (res !== null ) {
    store.dispatch(authorization(res.password, res.tel))
  }
})

store.subscribe(() => console.log(store.getState()))


export default store
