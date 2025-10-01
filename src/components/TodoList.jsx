import React from 'react'
import { AddTodo } from './AddTodo'
import { DisplayTodo } from './DisplayTodo'

export const TodoList = () => {
    return (
        <div className='flex flex-col items-center'>
            <AddTodo />
            <DisplayTodo />
        </div>
    )
}
