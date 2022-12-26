import React from "react";


const List = (props) => {
    const {value, setValue} = props
    const inputCopy = [...value]
    
    const eventAddList = (event) => {
        event.preventDefault()
        console.log(inputCopy)
        inputCopy.push({name : event.target.elements.valueInInput.value})
        console.log(inputCopy)
        setValue(inputCopy)

        event.target.reset()
    }

    const eventDeleteList = (id) => {
        console.log(id)
        inputCopy.splice(id, 1)
        setValue(inputCopy)
    }

    return (
        <div>
            {value.map((OnlyOneValue, id) => {
                return (
                    <ul key={id}>
                        <li>{OnlyOneValue.name}</li>
                        <button onClick={() => eventDeleteList(id)}>X</button>
                    </ul>
                )
            })}
            <form onSubmit={eventAddList}>
                <input type="text" id="valueInInput"/>
            </form>
        </div>
    )
}

export default List