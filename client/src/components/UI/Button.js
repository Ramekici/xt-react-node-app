import React from 'react';

export default function Button(props) {
    return (
        <button 
        onClick={props.onClickHandler} 
        type={props.type} 
        className={props.className}
        style={{...props}}>
            {props.name}
        </button>
    )
}
