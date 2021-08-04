import React, { useEffect, useCallback, useState } from "react";
import TodoList from "./todos/TodoList";
import Context from "./context"
import AddTodo from "./todos/AddTodo";
import {connect, useDispatch, useSelector} from "react-redux";
import {getTodos, addTodo, deleteTodo, toggleTodo} from "../actions/todos";
import todos from '../actions/todos'

const App = (props) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const dispatch = useDispatch();
  const selector = useSelector(state => state.todos.todos);

  useEffect(() =>{
    setTodos(checkFilter(selector));
  }, [selector])

  useEffect(() => {
    dispatch(getTodos())
  }, [filter])


  const toggleTodoFu = (id) => {

    const todo = {...todos.find(item => item.id === id)};
      todo.status = !todo.status;
      dispatch(toggleTodo(id, todo))
  }

  const checkFilter = (data) => {
      switch (filter) {
        case 'all':
          console.log('tut', data)
          return data;
        case 'work':
          return data.filter(todo => !todo.status);
        case 'compl':
          return data.filter(todo => todo.status);
        default:
          break;
      }
  }

  const removeTodo = (id) => {
  dispatch(deleteTodo(id));
  }

  const clearAll = () => {
    todos.forEach(e => {
      removeTodo(e.id)
    })
    setTodos([]);
    setFilter('all');
  }

  const showWork = () => {
    setFilter('work');
  }

  const showCompleted = () => {
    setFilter('compl');
  }

  const showAll = () => {
    setFilter('all');
  }

  const addTask = (text) => {
    dispatch(addTodo(text));
  }

  return (
    <>
      <Context.Provider value = {{removeTodo}}>
      <div>
          <div className = 'wrapper'>
            <h1>ToDo List</h1>
            <AddTodo onCreate = {(text) => addTask(text)}/>
            {todos.length ? <TodoList todos = {todos} onToggle = {toggleTodoFu}/> : <p>no Todo</p>}
          </div>
        <div id ='btnPress'>
          <button  type='submit' onClick = {clearAll} className = 'btnStates'>remove all</button>
          <button id = 'btnShowAll' type='submit' onClick = {showAll} className = {`btnStates ${filter === 'all' ? 'gradient-button' : ''}`}>show all</button>
          <button id = 'btnShowWork' type='submit' onClick = {showWork} className = {`btnStates ${filter === 'work' ? 'gradient-button' : ''}`}>show in work</button>
          <button id = 'btnShowComp' type='submit' onClick = {showCompleted} className = {`btnStates ${filter === 'compl' ? 'gradient-button' : ''}`}>show completed</button>
        </div>
      </div>
      </Context.Provider>
    </>
  );
}
export default connect()(App);
