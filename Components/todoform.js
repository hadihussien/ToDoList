import React, { useState } from 'react'

function todoform(props) {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('');
    }
    return (
        <form className='flex mb-4 items-center rounded justify-betwee border-slate-300 border shadow-[0_35px_60px_-15px_rgba(203,213,225,1)]' onSubmit={handleSubmit}>
            <input
                type='text'
                value={input}
                onChange={handleChange}
                placeholder='Add To Do'
                className='bg-slate-950 basis-[80%] text-white py-[.3rem] px-4 outline-none'></input>
            <input
                type='submit'
                value='CreateToDo'
                className='bg-slate-300 h-full py-[.4rem] px-4 select-none'></input>
        </form>
    )
}

export default todoform