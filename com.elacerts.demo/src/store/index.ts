import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

/*
 * Auto-scroll to top on page change
 */
history.listen((e, type) => {
  if (type === 'PUSH' && window.scrollTo) {
    window.scrollTo({left: 0, top: 0})
  }
})

const persistConfig = {
  key: 'root',
  storage: storage,
}

const pReducer = persistReducer(persistConfig, createRootReducer(history))


export const store: any  = createStore(
  pReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({})),
    applyMiddleware(routerMiddleware(history))
  )
)

export const persistor = persistStore(store)

/*
// We used to have a helper to fetch the actions
store.getRedux = (name) => {
  try {
    const redux = require(`./redux/${name}`)
    return redux.default
  } catch (e) {
    throw e
  }
}
*/
