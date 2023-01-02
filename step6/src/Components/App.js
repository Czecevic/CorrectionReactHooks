import { TaskList } from './TaskList';
import { Doing } from './Doing';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState(getDataFromStorage());
  const [current, setCurrent] = useState(null);

  return (
    <div className={`container-fluid pb-5`}>
      <div className="container px-0">
        <h1 className="text-center pt-5 pb-4">My dashboard</h1>

        <div className="row bg-white shadow">

          <TaskList 
            items={items} 
            setItems={setItems} 
            current={current}
            setCurrent={setCurrent} 
          />

          <Doing 
            items={items}
            setItems={setItems} 
            current={current}           
            setCurrent={setCurrent} 
          />

        </div>
      </div>
    </div>
  )
}

function getDataFromStorage() {
  const stored = localStorage.getItem("items");

  return JSON.parse(stored) || [];
}


export default App;
