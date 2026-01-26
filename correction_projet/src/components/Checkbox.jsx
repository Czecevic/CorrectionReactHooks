export const Checkbox = ({ value, setValue, elem, id }) => {
  const changeStatus = (id) => {
    console.log(id);
    const input = [...value];
    input[id].isDone = !input[id].isDone;
    setValue(input);
  };
  return (
    <input
      type="checkbox"
      checked={elem.isDone}
      onChange={(e) => changeStatus(id)}
    />
  );
};
