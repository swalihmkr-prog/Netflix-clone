import React, { useEffect, useRef, useState } from 'react'
import cards_data from '../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

function TitleCards({title,category}) {
  const [apidata,setapidata]=useState([])
  const cardsRef = useRef()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTEyYzk5ZmQ1Mzk1ZWQ4ZjMwOWVkODE0ZGQyYjYxNiIsIm5iZiI6MTc5MjMxNDAyNi42OTkwMDAxLCJzdWIiOiI2YWQ0OGFhYTQ2NGE5MjhlYzgzZGE3N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-YkYJlPmpg9OlJnK-nN79c7TUj96b2QtlVuqLwjDWIM'
  }
};



const handlewheel = (event)=>{
  event.preventDefault()
cardsRef.current.scrollLeft += event.deltaY  
}


  useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results))
  .catch(err => console.error(err));

    
    cardsRef.current.addEventListener('wheel',handlewheel)
    
  },[])
  return (
    <div className='titleCards mt-[50px] mb-[30px]'>
       <h2 className='mb-3 text-lg font-semibold text-white'>{title? title: "Popular On Netflix"}</h2>
      <div className='card-list flex gap-[10px] overflow-x-auto [&::-webkit-scrollbar]:hidden'ref={cardsRef}>
        {apidata.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className='card relative shrink-0 group cursor-pointer'key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} className='w-[240px] h-[135px] md:w-[280px] md:h-[158px] object-cover rounded-[4px] transition-transform duration-300 group-hover:scale-105'/>
            <p className='absolute bottom-[8px] left-[8px] right-[8px] text-white text-sm font-medium drop-shadow-lg'>{card.original_title}</p>
          </Link> 
        })}
      </div>

    </div>
  )
}

export default TitleCards


