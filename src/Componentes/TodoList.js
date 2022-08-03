import React from "react";
import '../styles/TodoList.css';

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
        <div>hola</div>
    );
}

export { TodoList};