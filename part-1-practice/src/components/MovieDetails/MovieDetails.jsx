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
    <div>MovieDetails:{id}
           <div>
                <div>Title : {movieDetails.original_title}</div>
                <div>Release Date : {movieDetails.release_date}</div>
           </div>
    </div>
  )
}

export default MovieDetails