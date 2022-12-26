import { useState } from 'react'
import AddList from './components/addList'
import './App.css'

function App() {
  const [value, setValue] = useState([])

  return (
    <AddList value={value} setValue={setValue}></AddList>
  )
}

export default App
