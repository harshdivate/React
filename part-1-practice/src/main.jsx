import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Search from './components/Search/Search';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="/movie" element={<Movie/>}>
    
      </Route>
      <Route path="/movie/:id" element={<MovieDetails/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
