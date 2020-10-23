// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'
import reactDomTestUtilsProductionMin from 'react-dom/cjs/react-dom-test-utils.production.min'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(
    // refactor for computationally expensive calls
    () => window.localStorage.getItem('name') || initialName,
  )
  //
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    // useLocalStorageState()
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function useLocalStorageState() {}

function App() {
  return <Greeting initialName="bob" />
}

export default App
