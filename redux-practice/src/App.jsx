import { useState } from 'react'
import store from './app/store'
import { Provider } from 'react-redux'
import TodoForm from './components/TodoForm.jsx'
import AddTodo from './components/AddTodo.jsx'

function App() {
  

  return (
    <Provider store={store}>
    <div className='w-full h-screen bg-slate-600'>
    <TodoForm/>
    <AddTodo/>
    </div>
    </Provider>
  )
}

export default App
