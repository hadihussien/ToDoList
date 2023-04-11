import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import Todoform from '../Components/todoform.js'
import Link from 'next/link.js'

function todoList({ todos, completeToDo, updateYoDo, removeTodo }) {
    const [edit, setEdit] = useState({ id: null, value: '' });
    const submitupdate = value => {
        updateYoDo(edit.id, value)
        setEdit({ id: null, value: '' })
    }
    if (edit.id) {
        return <Todoform edit={edit} onSubmit={submitupdate} />
    }
    return (
        todos.map((todo, index) =>
            <div className='todo_item flex justify-between w-full px-3 py-2 rounded my-3 ' key={index} id={todo.id}>
                <p onClick={() => completeToDo(todo.id)}
                    className={todo.isComplete?'text-white line-through select-none':'text-white select-none'}>{todo.text}</p>
                <div>
                    <Link href='#' className='inline-block text-white mr-3' onClick={() => setEdit({ id: todo.id, value: todo.text })}>
                        <FontAwesomeIcon icon={faEdit} className='w-3' />
                    </Link>
                    <Link href='#' className='inline-block text-white' onClick={() => removeTodo(todo.id)}>
                        <FontAwesomeIcon icon={faTrash} className='w-3' />
                    </Link>
                </div>
            </div>
        )
    )
}
export default todoList;
