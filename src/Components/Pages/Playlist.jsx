import React,{useState} from 'react'

function Playlist() {
     const[Cart, setCart]= useState(0)
  return (
    <div>
      <p>{Cart}</p>
      <h1>playlist</h1>
    </div>
  )
}

export default Playlist
