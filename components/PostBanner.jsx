import React from 'react';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

const PostBanner = ({ media }) => {
    const getColumnWidth = (images) => {
      if (!images || images.length === 0) {
        // Return a default column width when no images are present
        return 'w-full p-2';
      }
  
      const imageCount = images.length;
      return `w-full sm:w-full md:w-1/${imageCount}`;
    };
  
    const columnWidth = getColumnWidth(media?.bannerImagesArray);
  
    return (
      <section className="max-w-5xl mb-8 mx-auto">
    <div className="flex sm:flex-wrap lg:flex-nowrap">
          {media?.bannerImagesArray?.map((image, key) => (
            <div key={key} className={columnWidth}>
              <Image
                className="w-full rounded-lg shadow-lg"
                alt={image.alt}
                width="9999"
                height="9999"
                src={urlForImage(image).url()}
              />
            </div>
          ))}
        </div>
  
        <div className="relative pb-[56.25%] h-0 overflow-hidden w-full">
        {media?.bannerVideo && (
            <iframe
            loading="lazy"
            className='rounded-lg'
              style={{ padding: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              src={media?.bannerVideo?.url}
              frameBorder="0"
              allowFullScreen
              webkitallowfullscreen
              mozallowfullscreen
            />
        )}
      </div>

      </section>
    );
  };
  
  export default PostBanner;
  