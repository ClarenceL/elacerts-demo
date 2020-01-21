
const initialState = {
  filter: {},
  students: []
}

export default {

  student: (state = initialState, action) => {

    switch (action.type) {
      case 'ACT1':
        return {
          ...state,
          filter: {
            act: 1
          }
        }

      case 'ACT2':
        return {
          ...state,
          filter: {
            act: 3
          }
        }
    }

    return state
  }
}





