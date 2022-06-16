import React from 'react';
import {TodoCounter} from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';
import { CreateTodoButtom } from './Componentes/CreateTodoButton';
import './styles/App.css';

const defaultTodos=[
  { text:'Cortar cebolla', completed:false},
  { text:'Tormar el curso de intro a react', completed:false},
  { text:'Llorar con la llorona', completed:true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = [];

  if (!searchValue >=1) {
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  return (
  <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed= {completedTodos}

        />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(<TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />))}
      </TodoList>
      <CreateTodoButtom />
  </React.Fragment>
  );
}

export default App;
