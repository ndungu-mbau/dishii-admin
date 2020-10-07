import React, { useReducer, createContext, useContext } from "react"

export const constants = {
  SET_SESSION: "SET_SESSION",
  SET_ORDER: "SET_ORDER"
}

const Context = createContext({ session: "", order: "" })

export const Store = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, { session: "" })
  return (
    <Context.Provider value={[ state, dispatch ]}>
      {children}
    </Context.Provider>
  )
}

const reducer = (state, action) => {
  switch(action.type){
    case constants.SET_SESSION:
      return { ...state, session: action.payload.session }
    case constants.SET_ORDER:
      return { ...state, order: action.payload.order }
  }
}

const useGlobalState = () => {
  const [ state, dispatch ] = useContext(Context)
  return {
    state,
    dispatch
  }
}

export default useGlobalState