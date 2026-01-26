export const SeeName = ({name, setName}) => {
    return (
        <div>
            {
          name.map((elemName, id) => {
            return (
              <div key={id}>
                <h1>{elemName}</h1>
                <button onClick={() => {
              setName(
                name.filter((a, index) =>
                  index !== id
                ))}}>x</button>
              </div>
            )
          })
        }
        </div>
    )
}