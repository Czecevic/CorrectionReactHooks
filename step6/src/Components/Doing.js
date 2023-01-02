function Doing(props) {
  const { items, current } = props;
  const task = current !== null ? items[current].task : null;
  console.log(task)

  return (
    <div className="col-6 bg-light text-center">
      <h2 className="mt-4 mb-5">
        Currently doing
      </h2>
      <div className="d-flex flex-column">
        {task === null ? "Not currently doing anything" : task}
        </div>
      </div>
  )
}

export { Doing };