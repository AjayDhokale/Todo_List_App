import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../features/todoSlice'

export const AddTodo = () => {
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (userInput.trim() !== '') {
            dispatch(addNewTodo(userInput))
            setUserInput('')
        }
    }

    return (
        <div className="flex items-center gap-4 w-full max-w-2xl p-4 rounded-2xl 
                        bg-white/10 backdrop-blur-md shadow-xl border border-white/20 mb-6">

            <input
                type="text"
                className="flex-1 p-3 rounded-xl outline-none text-black placeholder-gray-500
                           bg-white shadow-inner focus:ring-2 focus:ring-[#00d9ff]"
                placeholder="Enter todo..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />

            <button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00d9ff] to-[#409eaf] 
                           font-semibold text-white shadow-md hover:scale-105 transition-all"
                onClick={handleSubmit}
            >
                + Add
            </button>
        </div>
    )
}
