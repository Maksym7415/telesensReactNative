import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { promiseReducer} from './reducers/promiseReducer'
import { loginReducer } from './reducers/loginReducer'
import { authorization } from './reducers/actions'
import { synchroReducer } from './reducers/synchroReducer'

const reducers = combineReducers({
  promise: promiseReducer,
  authorization: loginReducer,
  synchro: synchroReducer
})

const store = createStore(reducers, composeWithDevTools (applyMiddleware(thunk)))


store.subscribe(() => console.log(store.getState()))


export default store
