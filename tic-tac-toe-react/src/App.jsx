import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>X & O</h1>
      <Grid />
    </div>
  )
}

export default App
