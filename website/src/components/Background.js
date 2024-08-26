import React from 'react'
import sample from '../assets/videos/bgVideo.mp4'

function Background() {
  return (
    <div className='fixed w-screen h-screen'>
     <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
    </div>
  )
}

export default Background
