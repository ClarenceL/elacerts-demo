import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'

import profile from './redux/profile'
import student from './redux/student'
import certificate from './redux/certificate'


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
    ...profile,
    ...student,
    ...certificate
})

export default createRootReducer
