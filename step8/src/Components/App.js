import { TaskList } from './TaskList';
import { Doing } from './Doing';
import { ThemeContext } from './ThemeContext';
import { useState, useEffect, useContext } from 'react';


function App() {
  const [items, setItems] = useState(getDataFromStorage());
  const [current, setCurrent] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => { storeData(items) }, [items]);

  return (
    <div className={`container-fluid pb-5 ${theme.isDark? "theme-dark" : "bg-light"}`}>
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

function storeData(items) {
  localStorage.setItem("items", JSON.stringify(items));
}


export default App;
