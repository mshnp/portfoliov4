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
      return `w-full sm:w-full md:w-1/${imageCount} p-2`;
    };
  
    const columnWidth = getColumnWidth(media.bannerImagesArray);
  
    return (
      <section className="max-w-4xl mx-auto">
    <div className="flex sm:flex-wrap lg:flex-nowrap bg-yellow-100 p-4 mb-4">
          {media.bannerImagesArray?.map((image, key) => (
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
  
        <div>
  {/* Render the video if it exists */}
  {media.video && (
    <video autoPlay loop muted controls={false}>
      <source src={media.video.asset.url} autoPlay loop muted controls={false} />
    </video>
  )}
</div>

      </section>
    );
  };
  
  export default PostBanner;
  