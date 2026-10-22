import React, { useEffect, useState } from 'react'
import  back_arrow from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';
function Player () {
  const {id} =useParams()
  const navigate= useNavigate()
  const [apidata,setApidata]=useState({
    name:"",
    key:"",
    published_at:"",
    type:"",
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTEyYzk5ZmQ1Mzk1ZWQ4ZjMwOWVkODE0ZGQyYjYxNiIsIm5iZiI6MTc5MjMxNDAyNi42OTkwMDAxLCJzdWIiOiI2YWQ0OGFhYTQ2NGE5MjhlYzgzZGE3N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-YkYJlPmpg9OlJnK-nN79c7TUj96b2QtlVuqLwjDWIM'
  }
};


useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApidata(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className='player flex h-screen flex-col items-center justify-center'>
<img src={back_arrow} alt="" className='absolute top-5 left-5 w-[50px] cursor-pointer' onClick={()=>{navigate(-2)}}/>
<iframe className='rounded-[10px]'   width="90%"
    height="90%"
src={`https://www.youtube.com/embed/${apidata.key}`}
title='trailer' frameBorder='0' allowFullScreen></iframe>
<div className="player_info flex align-middle justify-between w-[90%]">
  <p>{apidata.published_at.slice(0,10)}</p>
  <p>{apidata.name}</p>
  <p>{apidata.type}</p>
</div>
    </div>
  )
}

export default Player