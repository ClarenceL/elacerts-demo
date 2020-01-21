/**
 * Redux - Profile
 */

export enum ProfileActionTypes {
  SET_DID = 'SET_DID',
  SET_INFO = 'SET_INFO',
  LOGGING_IN = 'LOGGING_IN',
  LOGOUT = 'LOGOUT'
}

export interface ProfileAction {
  type: ProfileActionTypes,
  did?: string | null,
  name?: string,
  country?: string
}

/*
*************************************************************************************
* Actions
*************************************************************************************
 */
export const ActionSetDID = (did): ProfileAction => ({
  type: ProfileActionTypes.SET_DID,
  did
})

export const ActionLoggingIn = (): ProfileAction => ({
  type: ProfileActionTypes.LOGGING_IN
})

export const ActionLogout = (): ProfileAction => ({
  type: ProfileActionTypes.LOGOUT
})

export const ActionSetInfo = ({name, country}): ProfileAction => ({
  type: ProfileActionTypes.SET_INFO,
  name,
  country
})


/*
*************************************************************************************
* Store Schema
*************************************************************************************
 */
export interface ProfileState {
  init: boolean,
  loading: boolean,
  did: string | null,
  name: string
}

const initialState: ProfileState = {
  init: false,
  loading: false,
  did: null,
  name: ''
}

/*
*************************************************************************************
* Reducer
*************************************************************************************
 */
export default {

  profile: (state: ProfileState = initialState, action: ProfileAction) => {

    switch (action.type) {
      case ProfileActionTypes.LOGOUT:
        return {
          ...state,
          did: null,
          loading: false
        }

      case ProfileActionTypes.LOGGING_IN:
        return {
          ...state,
          loading: true
        }

      case ProfileActionTypes.SET_DID:
        return {
          ...state,
          did: action.did,
          loading: false
        }

      case ProfileActionTypes.SET_INFO:
        return {
          ...state,
          name: action.name,
          country: action.country
        }
    }

    return state
  }
}
