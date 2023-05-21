import React from 'react'

const VideoDisplay = ({videoData}) => {

    const {videoFile: {asset}, isLooping} = videoData;
    
    return (
      <div className="aspect-video">
        {isLooping
          ? <video className="w-full h-full" src={asset.url} autoPlay loop muted controls={false} />
          : <video className="w-full h-full" src={asset.url} controls={true} />
        }
      </div>
    )
}

export default VideoDisplay

