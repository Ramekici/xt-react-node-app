import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNode, selectText, fetchTextItem } from '../redux/textSlice';
import Button from './UI/Button';

export default function Sidebar() {

    const dispatch = useDispatch();
    const textNames = useSelector(selectText);
    const { texts } = textNames;

    useEffect(() => {
        dispatch(fetchNode());
    }, [dispatch])

    const onSelectHandler = (name) => {
        dispatch(fetchTextItem(name));
    }

    return (
        <div className="sidebar">
            <div className="upper-part">
                <h3 className="text-metin"> Sistemdeki Dosyalar </h3>
                {texts.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="onselect"
                            type="button"
                            onClick={() => onSelectHandler(item)}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <Button
                className="button-yeni button-text"
                name="Yeni Notebook"
                type="submit"
            />
        </div>
    )
}
