function Task(props) {
  const {item, id, changeTaskStatus, deleteItem, setCurrent} = props;

  return (    
    <li className="d-flex justify-content-between mb-2">
      <div>
        <input 
          type="checkbox" 
          checked={item.isDone} 
          onChange={() => changeTaskStatus(id)}
        /> 
        <span className="ml-3">{item.task}</span>
      </div>

      <div>
        {!item.isDone &&
          <button 
            className="btn btn-primary btn-sm mr-2" 
            onClick={() => setCurrent(id)}
          >
            do now
          </button>
        }
        <button
          className="btn btn-danger btn-sm mr-2"
          onClick={() => deleteItem(id)}
          >
          X
        </button>
      </div>
    </li>
  )
}


export { Task };