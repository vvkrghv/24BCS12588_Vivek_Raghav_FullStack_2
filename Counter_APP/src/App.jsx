import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {

  const {count ,increment , decrement} = useCounter(0);

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h3>Counter Value : {count}</h3>
        <div>
          <button onClick={increment}>Increase </button>
          <button onClick={decrement}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
