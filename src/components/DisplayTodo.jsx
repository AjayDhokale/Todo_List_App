import React from 'react'
import { Todo } from './Todo'
import { useSelector } from 'react-redux'

// export const DisplayTodo = () => {

//     let allTodos = useSelector((state) => state.todo.todos)
//     console.log(allTodos);


//     return (
//         <div>
//             {
//                 allTodos.map(todo => {
//                     return (
//                         <Todo key={todo.id} id={todo.id} todoText={todo.todoText} status={todo.status} />
//                     )
//                 })
//             }

//         </div>
//     )
// }


export const DisplayTodo = () => {
    const allTodos = useSelector((state) => state.todo.todos)

    return (
        <div className="w-full max-w-2xl flex flex-col gap-4">
            {allTodos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    )
}
