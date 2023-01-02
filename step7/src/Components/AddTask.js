function AddTask(props) {
  const { items, setItems } = props;

  function handleSubmit(e) {
    e.preventDefault();

    const itemsCpy = [...items];
    itemsCpy.push({ task: e.target.elements.newItem.value, isDone: false});
    setItems(itemsCpy);

    e.target.reset();
  }  

  return (
    <div>
      <h5 className="mt-5">New task:</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" id="newItem" className="w-100" />
      </form>
    </div>
  )
}

export { AddTask };