import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = ({initialState}) => {   

    const [todos, dispatch] = useReducer(todoReducer, initialState , init)
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));        
    }, [todos])
    

    const handleNewTodo = (todo) => {       
        const action = {
            type : 'ADD',
            payload : todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {       
        const action = {
            type : 'DELETE',
            payload : id
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {       
      
         const action = {
            type : 'TOGGLE',
            payload : id
        } 

        dispatch(action);
    }

      
    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,    
        todosCount : todos.length,
        todosPending : todos.filter(todo=>!todo.done).length
    }

}



