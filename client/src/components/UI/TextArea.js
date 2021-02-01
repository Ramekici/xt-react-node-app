import React from 'react';


export default function TextArea(props) {
    return (
        <div className="text-box">
            <label htmlFor="text" className="text-header"> Metin </label>
            <textarea 
            onChange={props.onChangeHandler}
            value={props.value}
            style={{width:"100%"}}
            rows={16}/>
        </div>
    )
}
