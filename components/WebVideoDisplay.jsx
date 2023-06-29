import React from 'react'

const WebVideoDisplay = ({media}) => {
  console.log(media)
  return (
    <div>
  <iframe
    src={`${media.url}`}
    title="Media Player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
    </div>
  )
}

export default WebVideoDisplay