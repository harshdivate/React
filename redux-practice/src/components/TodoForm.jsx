import React,{useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { addTodo } from '../features/todoSlice.js';

function TodoForm() {
    
    const todos = useSelector((state)=>state.todos)
    const [todo,setTodo] = useState('');
    const dispatch = useDispatch();

    const addToUI = () => {
            localStorage.setItem('todos',JSON.stringify(todos))
    }
    useEffect(()=>{
        addToUI()
    },[todos])

    const addHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo('')
    }
  return (
    <>
    <div className='w-full  flex justify-center items-start p-10  bg-[#2f3e46]'>
    <form 
    className='w-full border items-center flex justify-center p-4 bg-[#84a98c]'
    onSubmit={addHandler}
    >
        <input 
        className='px-4 py-2 m-2 rounded-lg'
        type="text"
        placeholder='Enter Todo'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button 
        type="submit"
        className='bg-green-300 px-4 py-2 rounded-lg '
        >
        Enter</button>
    </form>
    </div>
    </>
  )
}

export default TodoForm