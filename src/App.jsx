import React, { useContext } from 'react'
import { AppContext } from './Context'

const App = () => {

  const { num, Increament } = useContext(AppContext);

  return (
    <div>App {num}

      <button onClick={Increament}>click</button>
      {/* 
    <Form />
    <List /> */}
    </div>
  )
}

export default App