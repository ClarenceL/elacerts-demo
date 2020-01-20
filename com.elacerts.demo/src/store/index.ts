import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState?) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({})),
      applyMiddleware(routerMiddleware(history))
    )
  )

  return store
}
