import { useState } from 'react'
import List from './components/List'
import './App.css'

function App() {
  const [value, setValue] = useState([])

  return (
    <List value={value} setValue={setValue}></List>
  )
}

export default App
