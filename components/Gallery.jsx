import React from 'react'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const Gallery = ({gallery}) => {

     const {row1, row2, row3, caption} = gallery

  return (
    <section>
        {
<div>
  {caption && (<h1 className="text-2xl font-bold mb-4">{caption}</h1>)}
  {row1 && (
    <div className="flex flex-wrap bg-gray-100 p-4 mb-4">
      {row1.map(image => (
        <div key={image._id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <Image
            className="w-full rounded-lg shadow-lg"
            alt={image.alt}
            width="500"
            height="500"
            src={urlForImage(image).url()}
          />
        </div>
      ))}
    </div>
  )}
  {row2 && (
    <div className="flex flex-wrap bg-gray-200 p-4 mb-4">
      {row2.map(image => (
        <div key={image._id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <Image
            className="w-full rounded-lg shadow-lg"
            alt={image.alt}
            width="500"
            height="500"
            src={urlForImage(image).url()}
          />
        </div>
      ))}
    </div>
  )}
  {row3 && (
    <div className="flex flex-wrap bg-gray-300 p-4 mb-4">
      {row3.map(image => (
        <div key={image._id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <Image
            className="w-full rounded-lg shadow-lg"
            alt={image.alt}
            width="500"
            height="500"
            src={urlForImage(image).url()}
          />
        </div>
      ))}
    </div>
  )}
</div>

    }
  

    </section>
  )
}

export default Gallery

