import React from 'react'

export default function Input(props) {
    return (
        <div className="input">
            <label htmlFor="text" className="text-header"> Dosya Adı </label>
            <input id="text" type="text" onChange={props.onChangeHandler}  value={props.value}/>
        </div>
    )
}
