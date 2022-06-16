import React from "react";
import '../styles/CreateTodoButton.css';

function CreateTodoButtom(props){

    const onClickButton = (msg) => {
        alert(msg);
    };


    return(
        <button className="CreateTodoButton" onClick={() =>onClickButton('')}>
        +
        </button>
    );
}

export { CreateTodoButtom};