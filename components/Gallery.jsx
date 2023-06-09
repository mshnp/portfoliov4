import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const Gallery = ({ gallery }) => {
  const { row1, row2, row3, caption } = gallery;

  const getColumnWidth = (row) => {
    const imageCount = row?.length;
    return `w-full md:w-1/${imageCount} p-2`;
  };

  const columnWidth1 = getColumnWidth(row1);
  const columnWidth2 = row2 ? getColumnWidth(row2) : null;
  const columnWidth3 = row3 ? getColumnWidth(row3) : null;

  return (
    <section>
      {row1 && (
        <div className="flex flex-wrap bg-yellow-100 p-4 mb-4 md:flex-nowrap">
          {row1.map((image) => (
            <div key={image._id} className={`${columnWidth1}`}>
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
      )}

      {row2 && (
        <div className="flex flex-wrap bg-yellow-100 p-4 mb-4 md:flex-nowrap">
          {row2.map((image) => (
            <div key={image._id} className={`${columnWidth2}`}>
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
      )}

      {row3 && (
        <div className="flex flex-wrap bg-yellow-100 p-4 mb-4 md:flex-nowrap">
          {row3.map((image) => (
            <div key={image._id} className={`${columnWidth3}`}>
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
      )}
    </section>
  );
};

export default Gallery;
