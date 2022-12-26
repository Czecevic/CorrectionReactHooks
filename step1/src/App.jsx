import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <div>
      <input onChange={e => setValue(e.target.value)}></input>
      <p>{value}</p>
    </div>
  )
}

export default App
