import React,{useEffect, useState} from "react";



const useMovieData =  (type) => {
  const [movies,setMovies] = useState({})
  useEffect(()=>{
      
      const options = {
          method: 'GET',
          headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZkMzRhZWQ5MGVlZDU4MjI4NTFkZDFjNGIyOTA3MCIsInN1YiI6IjY1NDg3YjhhOTI0Y2U2MDEwMWY1MzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXa14BGj3_FUJLeWvvi0XQ1ZSuqS_LSHC0e03NwoUrs'
          }
      };
      fetch(`https://api.themoviedb.org/3/movie/${type}`,options)
      .then(response=>response.json())
      .then(response=>{setMovies(response.results)
      })
    },[type])
    console.log(movies);
    return movies;
  }
 

export default useMovieData;
