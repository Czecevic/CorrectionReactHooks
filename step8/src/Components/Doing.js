
function Doing(props) {

  const { items, setItems, current, setCurrent } = props;
  const task = current !== null ? items[current].task : null;

  function completeTask() {
    const itemsList = [...items];
    
    itemsList[current].isDone = true;
    setItems(itemsList);
    setCurrent(null);
  }

  return (
    <div className="col-6 bg-light text-center">
      <h2 className="mt-4 mb-5">
        Currently doing
      </h2>
      <div className="d-flex flex-column">
        {task === null ? "Not currently doing anything" : task}
        <div className="mt-5 d-flex" style={spaceEvenly}>

          <button 
            className="btn btn-primary" 
            onClick={() => completeTask()} 
            disabled={!task}
          >
            <b>I'm done</b> 🚀
          </button>
        </div>
      </div>
    </div>

  )
}

const spaceEvenly = {
  'justifyContent': 'space-evenly'
};


export { Doing };