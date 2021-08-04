import axios from 'axios';
import * as tyAc from './types';
import {TOGLE_TODO} from "./types";


export const getTodos = () => async dispatch => {
  const res = await axios.get('/todos/todos/');
  dispatch({
    type: tyAc.GET_TODOS,
    payload: res.data
  });
};
export const addTodo = (text) =>
    async dispatch => {
      let data = {
        text,
        status: false
      }
        const res = await axios
            .post('/todos/todos/', data)
        dispatch({
            type: tyAc.ADD_TODO,
            payload: res.data
        })
    }
export const deleteTodo = (id) => async dispatch => {
    const res = await axios
        .delete(`/todos/todos/${id}/`)

    dispatch({
            type: tyAc.DELETE_TODO,
            payload: id
    })
}
// export const deleteTodos = (id) => async dispatch => {
//     const res = await axios
//         .delete(`/todos/todos/${id}/`)
//     dispatch({
//             type: tyAc.DELETE_TODOS,
//     })
// }
export const toggleTodo = (id, todo) => async dispatch => {
    const res = await axios
        .put(`/todos/todos/${id}/`, todo )
    console.log(res.data,"res.data")
    dispatch({
            type: tyAc.TOGGLE_TODO,
            payload: res.data
    })
}