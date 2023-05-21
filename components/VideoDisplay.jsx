import React from 'react'

const VideoDisplay = ({videoData}) => {

    const {videoFile: {asset}} = videoData;
  return (
    <div className="aspect-video">
      <video className="w-full h-full" src={asset.url} autoPlay loop muted controls={false} />
    </div>
  )
}

export default VideoDisplay
