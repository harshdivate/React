import React,{useEffect, useState} from "react";


// async function getMovies(){
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZkMzRhZWQ5MGVlZDU4MjI4NTFkZDFjNGIyOTA3MCIsInN1YiI6IjY1NDg3YjhhOTI0Y2U2MDEwMWY1MzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXa14BGj3_FUJLeWvvi0XQ1ZSuqS_LSHC0e03NwoUrs'
//     }
//   };
//     const result  = await fetch(`https://api.themoviedb.org/3/movie/popular`,options)
//     const resultJSON = result.json();
//     return resultJSON

// }
function useMovieData (d) {
    const [movies,setMovies] = useState(false)
    useEffect(()=>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZkMzRhZWQ5MGVlZDU4MjI4NTFkZDFjNGIyOTA3MCIsInN1YiI6IjY1NDg3YjhhOTI0Y2U2MDEwMWY1MzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXa14BGj3_FUJLeWvvi0XQ1ZSuqS_LSHC0e03NwoUrs'
        }
      }
      let url = `https://api.themoviedb.org/3/movie/popular`
      fetch(url,options).then(response=>response.json()).then(response =>setMovies(response.results))
        
    },[d])
    if(movies !==false){
      console.log(movies);
      return movies
    } 
   
}

export default useMovieData;
