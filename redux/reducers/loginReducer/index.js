const loginReducer = (state, action) => {
  const actions = {
    LOGIN() {
      const {status, payload, error} = action
      return {
        status, payload, error
      }
    },
    LOGOUT() {
      localStorage.removeItem('RBTauth')
      return {}
    }
  }
  if(state === undefined) {
    return {}
  }
  if(action.type in actions) {
    return actions[action.type]()
  }
  return state
}

function  actionLogin (promise) {
  const actionPending = () => ({type: 'LOGIN', status: 'PENDING', payload: null, error: null})
  const actionResolved = payload => ({type: 'LOGIN', status: 'RESOLVED', payload, error: null})
  const actionError = error => ({type: 'LOGIN', status: 'ERROR', payload: null, error})

  return async dispatch => {
    dispatch(actionPending())
    try {
      let payload = await promise
      dispatch(actionResolved(payload))
    } catch (error) {
      dispatch(actionError(error))
    }
  }
}

export { loginReducer, actionLogin }
