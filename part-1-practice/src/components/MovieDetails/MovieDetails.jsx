import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails() {
    const [movieDetails,setMovieDetails] = useState({});
    const {id} = useParams()
    const movieid = Number(id);

    const getMovieDetails = (id) =>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZkMzRhZWQ5MGVlZDU4MjI4NTFkZDFjNGIyOTA3MCIsInN1YiI6IjY1NDg3YjhhOTI0Y2U2MDEwMWY1MzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXa14BGj3_FUJLeWvvi0XQ1ZSuqS_LSHC0e03NwoUrs'
            }
        }
        fetch(`https://api.themoviedb.org/3/movie/${movieid}`,options)
        .then(response => response.json())
        .then(response =>{
            setMovieDetails(response)
            console.log(response);
        })
    }
    useEffect(()=>{
        getMovieDetails()
    },[id])

    // const {original_title,backdrop_path,budget,homepage,overview,release_date} = movieDetails;

  return (
    <div className='h-screen border border-green p-4 m-4'>
            <div className='text-center font-bold text-4xl my-4'>Movie Details</div>
           <div className='w-full  flex justify-around border border-black bg-[#001524]'>
                <div className='m-6 p-4 bg-[#84a98c] h-fit'>
                    {/* Photo */}
                    <div>
                        <img src={'https://image.tmdb.org/t/p/w400'+movieDetails.poster_path} ></img>
                    </div>
                </div>
                <div className='border text-white  border-black max-w-lg flex flex-col justify-evenly '>
                    {/* Detaisl */}
                    <p className='text-3xl font-bold font-mono'>{movieDetails.title}</p>
                    <p><span className='font-bold text-xl'>Overview:</span>{movieDetails.overview}</p>
                    <p><span className='font-bold text-xl'>Release Date:</span>{movieDetails.release_date}</p>
                    <p><span className='font-bold text-xl'>Budget:</span>{movieDetails.budget}</p>
                    <p><span className='font-bold text-xl'>Revenue:</span>{movieDetails.revenue}</p>
                </div>
           </div>

          
    </div>
  )
}

export default MovieDetails