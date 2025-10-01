import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { markCompleted, removeTodo, updateTodo } from '../features/todoSlice';



// export const Todo = ({ id, todoText, status }) => {

// 	const dispatch = useDispatch()

// 	const [isEditing, setIsEditing] = useState(false)
// 	const [currentValue, setCurrentValue] = useState(todoText)

// 	const handleUpdateTodo = () => {
// 		dispatch(updateTodo({ id, currentValue }))
// 		setIsEditing(false)
// 	}


// 	return (
// 		<div key={id} className={`flex justify-between items-center border-2 w-200 p-3 px-4 m-4 rounded-lg  ${status === true ? 'bg-[#3cd300]' : 'bg-[#409eaf]'} `}>

// 			<div className='flex justify-center items-center text-2xl font-bold gap-4' >

// 				<input type="checkbox" className='w-4 h-4 rounded-xl' onChange={() => dispatch(markCompleted(id))} />

// 				{isEditing ?
// 					<input
// 						type="text"
// 						className='border'
// 						value={currentValue}
// 						onChange={(e) => setCurrentValue(e.target.value)}
// 					/>
// 					:
// 					<div className={`w-150 text-2xl capitalize ${status === true ? 'line-through' : ''}`}>{todoText}</div>
// 				}

// 			</div>

// 			<div className='flex text-lg gap-2'>

// 				{
// 					isEditing ?
// 						<button
// 							className='flex justify-center items-center w-14 h-10 bg-[#122] hover:scale-[0.9] cursor-pointer rounded-lg '
// 							onClick={handleUpdateTodo}
// 						>
// 							<FaSave className='text-[#ff0] ' />
// 						</button>
// 						:
// 						<button
// 							className='flex justify-center items-center w-14 h-10 bg-[#122] hover:scale-[0.9] cursor-pointer rounded-lg '
// 							onClick={(e) => setIsEditing(true)}
// 						>
// 							<FaEdit className='text-[#ff0] ' />
// 						</button>
// 				}

// 				<button
// 					className='flex justify-center items-center w-14 h-10 bg-[#122] hover:scale-[0.9] cursor-pointer rounded-lg'
// 					onClick={() => dispatch(removeTodo(id))}
// 				>  		<FaTrashAlt className='text-[#f00] ' />
// 				</button>

// 			</div>

// 		</div >
// 	)
// }

export const Todo = ({ id, todoText, status }) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [currentValue, setCurrentValue] = useState(todoText)

    const handleUpdateTodo = () => {
        dispatch(updateTodo({ id, currentValue }))
        setIsEditing(false)
    }

    return (
        <div
            className={`flex justify-between items-center p-4 rounded-xl shadow-lg transition-all
                       ${status ? 'bg-gradient-to-r from-green-500 to-green-400' : 'bg-gradient-to-r from-[#409eaf] to-[#1f7e8a]'}
                       hover:scale-[1.02]`}
        >
            <div className="flex items-center gap-4 w-full">
                <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#00d9ff]"
                    checked={status}
                    onChange={() => dispatch(markCompleted(id))}
                />

                {isEditing ? (
                    <input
                        type="text"
                        className="flex-1 p-2 rounded-md border text-black"
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                    />
                ) : (
                    <span className={`flex-1 text-lg font-semibold capitalize ${status ? 'line-through text-gray-200' : ''}`}>
                        {todoText}
                    </span>
                )}
            </div>

            <div className="flex gap-2">
                {isEditing ? (
                    <button
                        className="p-2 rounded-lg bg-[#122] hover:bg-[#1d1d1d] transition"
                        onClick={handleUpdateTodo}
                    >
                        <FaSave className="text-yellow-400" />
                    </button>
                ) : (
                    <button
                        className="p-2 rounded-lg bg-[#122] hover:bg-[#1d1d1d] transition"
                        onClick={() => setIsEditing(true)}
                    >
                        <FaEdit className="text-yellow-400" />
                    </button>
                )}

                <button
                    className="p-2 rounded-lg bg-[#122] hover:bg-[#1d1d1d] transition"
                    onClick={() => dispatch(removeTodo(id))}
                >
                    <FaTrashAlt className="text-red-500" />
                </button>
            </div>
        </div>
    )
}
