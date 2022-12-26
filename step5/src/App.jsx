import { useState } from 'react'
import List from './components/List'
import './App.css'

function App() {
  const [value, setValue] = useState([])
  const [check, setCheck] = useState(false)

  return (
    <List value={value} setValue={setValue}
          check={check} setCheck={setCheck}
    ></List>
  )
}

export default App
