import { combineReducers } from 'redux'
import routing from 'ion-router/reducer'
import { connectRouter } from 'connected-react-router'

const default_state = {
  init: false,
}

const appReducer = (state = default_state) => {
  // switch (action.type) {}

  return state
}

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer
})

export default createRootReducer
