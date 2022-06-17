import React from 'react';
import {TodoCounter} from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';
import { CreateTodoButtom } from './Componentes/CreateTodoButton';
import './styles/App.css';

/*const defaultItem=[
  { text:'Cortar cebolla', completed:false},
  { text:'Tormar el curso de intro a react', completed:false},
  { text:'Llorar con la llorona', completed:true}
];*/

function useLocalStorage(itemName, initalValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initalValue));
    parsedItem = initalValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);


  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem );
    setItem(newItem);
  }
  return [
    item,
    saveItem,
  ]

}

function App() {
const [todos, saveTodos] = useLocalStorage('VERSION-1', []);


  const [searchValue, setSearchValue] = React.useState('');

  const completedItem = todos.filter(todo => !!todo.completed).length
  const totalItem = todos.length

  let searchedItem = [];

  if (!searchValue >=1) {
    searchedItem = todos;
  }else {
    searchedItem = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    });
  }



  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newItem = [...todos];
    newItem[todoIndex].completed = true;
    saveTodos(newItem);

  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newItem = [...todos];
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);

  }

  return (
  <React.Fragment>
      <TodoCounter
        total = {totalItem}
        completed= {completedItem}

        />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedItem.map(todo =>(<TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onCompleted={()=> completeTodo(todo.text)}
        onDelete={()=> deleteTodo(todo.text)}
        />))}
      </TodoList>
      <CreateTodoButtom />
  </React.Fragment>
  );
}

export default App;
