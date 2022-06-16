import React from "react";
import '../styles/TodoItem.css'

function TodoItem(props) {
    const onCompleted=() => {
        alert('Ya completaste el Todo' + props.text);
    };

    const onDelete=() => {
        alert('Borraste el Todo' + props.text);
    }

    return (
    <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onCompleted}>
        √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
        X
        </span>
    </li>
    );
}


export { TodoItem };