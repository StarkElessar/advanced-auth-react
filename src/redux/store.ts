import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
//! не забудь потом переместить это отдельно в типы:
export type AppDispatch = typeof store.dispatch