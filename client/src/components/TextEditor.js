import React from 'react';
import TextArea from './UI/TextArea';
import Input from './UI/Input';

const TextEditor = (props) => {

    return (
        <div className="text-editor">
            <h3 className="text-metin"> Metin Girme </h3>
            <div className="inputs">
                <Input
                    value={props.title}
                    onChangeHandler={props.onChangeHandler('title')}
                />
                <TextArea
                    value={props.text}
                    onChangeHandler={props.onChangeHandler('text')}
                />
            </div>
        </div>
    )
}

export default TextEditor;