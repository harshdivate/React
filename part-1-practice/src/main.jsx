import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" elemenent={<Layout/>}>
      <Route path="" element={<Header/>}></Route>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
