import { ProgressBar } from './ProgressBar';
import { Task } from './Task';
import { AddTask } from './AddTask';


function TaskList(props) {
  let {items, setItems, current, setCurrent} = props;

  function changeTaskStatus(id) {
    const itemsCpy = [...items];

    itemsCpy[id].isDone = !items[id].isDone;
    setItems(itemsCpy);

    if (id === current) {
      setCurrent(null);
    }
  }

  function deleteItem(id) {
    const itemsCpy = [...items];

    itemsCpy.splice(id, 1);
    setItems(itemsCpy);

    if (id === current) {
      setCurrent(null);
    }
  }

  return (
    <div className="col-6 pb-4 px-4">

      <ProgressBar 
        items={items}
      />

      <h4 className="mb-4">My tasks</h4>

      <ul className="TodoList list-unstyled text-left">  
        {items.map((item, id) => {
          return (
            <Task 
              key={item.task}
              item={item}
              id={id} 
              changeTaskStatus={changeTaskStatus}
              deleteItem={deleteItem}
              setCurrent={setCurrent} 
            />
          )
        })}
      </ul>
      <AddTask 
        items={items} 
        setItems={setItems} 
      />

    </div>
  );
}


export { TaskList };