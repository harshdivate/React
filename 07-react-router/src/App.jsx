import { useState } from 'react'
import './App.css'
import * as ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    Route,
    RouterProvider
} from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='h-screen bg-cyan-500'>Hello world!</div>,
    },
  ]);

function App() {
  

  return (
    <>
      
    </>
  )
}

export default App
