import {createContext, useContext} from 'react'

export const todoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "Todo message",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (todoId, todoData) => {},
    deleteTodo : (todoId) => {},
    toggleComplete : (todoId) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider;

