import React from "react";


const List = (props) => {
    const {value, setValue, check, setCheck} = props
    const inputCopy = [...value]

    const eventCheck = (id) => {
        inputCopy[id].Check = !inputCopy[id].Check
        setCheck(inputCopy)
    }
    
    const eventAddList = (event) => {
        event.preventDefault()
        inputCopy.push({name : event.target.elements.valueInInput.value, Check: check})
        setValue(inputCopy)
        event.target.reset()
    }

    const eventDeleteList = (id) => {
        inputCopy.splice(id, 1)
        setValue(inputCopy)
        console.log(value[id].Check)
    }

    return (
        <div>
            {value.map((OnlyOneValue, id) => {
                return (
                    <ul key={id}>
                        <input type="checkbox" checked={value[id].Check} onChange={() => eventCheck(id)}/>
                        <li>{OnlyOneValue.name}</li>
                        <button className="remove" onClick={() => eventDeleteList(id)}>X</button>
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