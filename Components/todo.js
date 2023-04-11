import React, { useState } from 'react'
import Todoform from './todoform'
import Todoitems from './todoitems'

function todo() {
    const [todos, settodo] = useState([])
    const addToDo = (todo) => {
        if(!todo.text){
            return
        }
        const newToDo = [todo, ...todos]
        settodo(newToDo)
    }
    const updateYoDo = (id, newvalue) => {
        console.log(todos)
        settodo(prev => prev.map(item => item.id === id ? newvalue : item))
    }
    const completeToDo = id => {
        let updatedtodo = todos.map(todo => {
            if (todo.id == id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        settodo(updatedtodo);
    }
    const removeTodo = (id) => {
        const removearr = [...todos].filter(todo => {
            if (todo.id != id) {
                return todo
            }
        })
        settodo(removearr)
    }
    return (
        <div className='bg-gradient-to-b from-slate-400  to-slate-800 min-h-screen py-28'>
            <div className='bg-slate-950 px-10 py-10 rounded-lg  w-[480px] relative left-1/2 -translate-x-1/2'>
                <h1 className='text-white text-2xl text-center mb-10'>Whats the Plan For Today?</h1>
                <Todoform onSubmit={addToDo}></Todoform>
                <Todoitems todos={todos} completeToDo={completeToDo} removeTodo={removeTodo} updateYoDo={updateYoDo}></Todoitems>
            </div>
        </div>
    )
}

export default todo
