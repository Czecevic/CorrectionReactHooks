import { Checkbox } from "./Checkbox";

export const List = ({ value, setValue }) => {
  const removeList = (id) => {
    console.log(id);
    // value.filter((_ : la valeur, idx: index par defaut) => idx !== id;
    //
    setValue(value.filter((_, idx) => idx !== id));
  };

  return (
    <ul>
      {/* on a besoin de value en tableau pour manipuler 
        map donc si value = [] good sinon ca march pa :( */}
      {value.map((elem, id) => {
        return (
          <div
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox value={value} elem={elem} id={id} setValue={setValue} />
            <li style={{ listStyleType: "none" }}>{elem.name}</li>
            <button onClick={() => removeList(id)}>x</button>
          </div>
        );
      })}
    </ul>
  );
};
