import React, { useEffect, useState } from 'react'

function Search() {
    const [search,setSearch] = useState('')
    const [data,setData] = useState([])
    const [imageURL,setimageURL] = useState('/no-image.jpg')

    const getSearchResult = () => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZkMzRhZWQ5MGVlZDU4MjI4NTFkZDFjNGIyOTA3MCIsInN1YiI6IjY1NDg3YjhhOTI0Y2U2MDEwMWY1MzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXa14BGj3_FUJLeWvvi0XQ1ZSuqS_LSHC0e03NwoUrs'
            }
        }
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`,options)
        .then(response=>response.json())
        .then(response=>setData(response.results))
    }
    useEffect(()=>{
        getSearchResult();
    },[search])
    console.log(data);
    
  return (
    <div>
        <div className='w-full border border-black flex justify-center items-center'>
            
            <input 
            type="text"
            placeholder='Search'
            className='border border-black p-2 m-4 rounded-full'
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            ></input>
        </div>
        <div className='flex flex-wrap m-2 p-3'>

            {
                data.map((movie)=>{
                    // if(movie.poster_path !== null){
                    //         setimageURL(movie.poster_path)
                    // }
                    return(
                        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border" key={movie.id}>
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                                    <img
                                    src={movie.poster_path?'https://image.tmdb.org/t/p/w400'+movie.poster_path:'/no-image.jpg'}
                                    className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {movie.title}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {movie.vote_average}
                                    </p>
                                    </div>
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                        {movie.overview}
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <button
                                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    >
                                    Add to Cart
                                    </button>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Search