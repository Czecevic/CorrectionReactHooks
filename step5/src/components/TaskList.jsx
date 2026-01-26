function TaskList(props) {
  let { items, setItems, current, setCurrent } = props;

  //change elem
  function changeTaskStatus(id) {
    const itemsCpy = [...items];

    itemsCpy[id].isDone = !items[id].isDone;
    setItems(itemsCpy);

    if (id === current) {
      setCurrent(null);
    }
  }

  // remove
  function deleteItem(id) {
    const itemsCpy = [...items];

    itemsCpy.splice(id, 1);
    setItems(itemsCpy);

    if (id === current) {
      setCurrent(null);
    }
  }

  // add elem
  function handleSubmit(e) {
    e.preventDefault();

    const itemsCpy = [...items];
    itemsCpy.push({ task: e.target.elements.newItem.value, isDone: false });
    setItems(itemsCpy);

    e.target.reset();
  }

  return (
    <div className="col-6 pb-4 px-4">
      <div className="d-flex mt-3 mb-4">
        <h6 className="mr-3">Progress:</h6>
        <div className="d-flex mb-3 w-100" style={styleBar}>
          <div className="h-100 align-self-end" style={progressWidth}></div>
        </div>
      </div>

      <h4 className="mb-4">My tasks</h4>

      <ul className="TodoList list-unstyled text-left">
        {items.map((item, id) => {
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
                <button
                  className="btn btn-danger btn-sm mr-2"
                  onClick={() => deleteItem(id)}
                >
                  X
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <h5 className="mt-5">New task:</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" id="newItem" className="w-100" />
        </form>
      </div>
    </div>
  );
}

export { TaskList };
