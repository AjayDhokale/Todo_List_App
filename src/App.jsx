import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoList } from './components/TodoList'

function App() {
    return (
        <div className="min-h-screen w-full bg-[#0f172a] text-white flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold my-12 drop-shadow-lg tracking-wide">
                ✨ Todo App
            </h1>
            <TodoList />
        </div>
    )
}


export default App