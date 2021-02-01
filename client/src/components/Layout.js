import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendTextNode, selectText } from '../redux/textSlice';
import TextEditor from './TextEditor'
import Sidebar from './Sidebar'

export default function Layout() {

    const [data, setData] = useState({ title: '', text: '' });
    const { title, text } = data;
    const textNames = useSelector(selectText);
    const { textItem } = textNames;

    const dispatch = useDispatch();

    useEffect(() => {
        setData(textItem)
    }, [textItem]);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const payload = { title: title.toLowerCase(), text: text }
        dispatch(sendTextNode(payload));
    }

    const onChangeHandler = (name) => (event) => {
        setData({ ...data, [name]: event.target.value });
    }

    return (
        <div>
            <h1 className="serverside-title"> Serverside Notebook</h1>
            <form className="layout" onSubmit={onSubmitHandler}>
                <Sidebar />
                <TextEditor 
                    title={title}
                    text={text}
                    onChangeHandler={onChangeHandler}
                />
            </form>
        </div>
    )
}
