import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todosApp')) || [
        // {
        //     id: nanoid(),
        //     todoText: "",
        //     status: false
        // }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                todoText: action.payload,
                status: false
            }
            state.todos.push(todo)
            localStorage.setItem('todosApp', JSON.stringify(state.todos))
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => action.payload !== todo.id)
            console.log("todo removed");
            localStorage.setItem('todosApp', JSON.stringify(state.todos))
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id) {
                    return {
                        ...todo,
                        todoText: action.payload.currentValue
                    }
                } else {
                    return todo
                }
            })

            localStorage.setItem('todosApp', JSON.stringify(state.todos))

        },

        markCompleted: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload) {
                    return {
                        ...todo,
                        status: !todo.status
                    }
                } else {
                    return todo
                }
            })
        }
    }
})

export const { addNewTodo, removeTodo, updateTodo, markCompleted } = todoSlice.actions
export default todoSlice.reducer