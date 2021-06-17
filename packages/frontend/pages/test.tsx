import React from 'react'
import MessageBoard from '../components/MessageBoard'
import VideoBoard from '../components/VideoBoard'
import ImageBoard from '../components/ImageBoard'

export default function test() {
  return (
    <>
      <div>
        <MessageBoard />
      </div>
      <div>
        <VideoBoard />
      </div>
      <div>
        <ImageBoard />
      </div>
    </>
  )
}
