import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../features/todoSlice'


// export const AddTodo = () => {

// 	const [userInput, setUserInput] = useState('')
// 	const dispatch = useDispatch()

// 	const handleSubmit = (e) => {
// 		if (userInput != '') {
// 			dispatch(addNewTodo(userInput))
// 			console.log("todo addeed");
// 			setUserInput('')
// 		}
// 	}

// 	return (
// 		<div className='p-4 bg-[#409eaf] w-130 flex justify-center gap-4 text-xl border-2 rounded-2xl  '>

// 			<input
// 				type="text"
// 				className=' w-[70%] p-2 px-4 outline-none rounded-lg bg-white text-black'
// 				placeholder='Enter todo'
// 				value={userInput}
// 				onChange={(e) => setUserInput(e.target.value)}

// 			/>

// 			<button
// 				className='border bg-[#122] text-[#00d9ff] font-bold w-[30%] h-14 cursor-pointer hover:text-[#f3f3f3]  hover:border-2  rounded-md  '
// 				onClick={handleSubmit}
// 			>Add Todo</button>

// 		</div>
// 	)
// }



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
