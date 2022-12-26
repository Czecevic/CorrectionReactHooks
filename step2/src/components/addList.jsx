import React from "react";


const addList = (props) => {
    const {value, setValue} = props

    const eventAddList = (event) => {
        event.preventDefault()
        const inputCopy = [...value]
        // console.log(inputCopy)
        inputCopy.push({name : event.target.elements.valueInInput.value})
        // console.log(inputCopy)
        setValue(inputCopy)

        event.target.reset()
    }
    return (
        <div>
            <ul>
                {value.map((OnlyOneValue, id) => {
                    return (
                        <li key={id}>{OnlyOneValue.name}</li>
                    )
                })}
            </ul>
            <form onSubmit={eventAddList}>
                <input type="text" id="valueInInput"/>
            </form>
        </div>
    )
}

export default addList