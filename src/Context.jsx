import React, { createContext, useReducer, useState } from 'react'
import reducer from './Reducer'

export const AppContext = createContext()

var initialState = {
  num: 0,
  array: [],

}

const Context = ({ children }) => {


  const [name, setName] = useState("ahmad")
  const [cart, setCart] = useState([])

  const [state, dispatch] = useReducer(reducer, initialState)

  const Increament = () => {
    dispatch({ type: "INC" })
  }

  return (
    <AppContext.Provider value={{ ...state, Increament }} >
      {children}
    </AppContext.Provider>
  )
}

export default Context