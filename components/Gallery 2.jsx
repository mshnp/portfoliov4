import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const Gallery2 = ({ gallery }) => {
  const { row1, row2, caption } = gallery;

  const getColumnWidth = (row) => {
    const imageCount = row.length;
    return `w-full sm:w-full md:w-1/${imageCount}`;
  };

  const columnWidth1 = getColumnWidth(row1);
  const columnWidth2 = row2 ? getColumnWidth(row2) : null;

  return (
    <section>
      {caption && <h1 className="text-2xl font-bold mb-4">{caption}</h1>}
      {row1 && (
        <div className="flex flex-wrap my-2">
          {row1.map((image) => (
            <div
              key={image._id}
              className={`relative ${columnWidth1} flex-auto px-2 my-2`}
              style={{ minHeight: '250px' }}
            >
              <div style={{ position: 'relative', paddingBottom: '100%', width: '100%' }}>
                <Image
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  src={urlForImage(image).url()}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {row2 && (
        <div className="flex flex-wrap -my-2">
          {row2.map((image) => (
            <div
              key={image._id}
              className={`relative ${columnWidth2} flex-auto px-2 my-2`}
              style={{ minHeight: '250px' }}
            >
              <div style={{ position: 'relative', paddingBottom: '100%', width: '100%' }}>
                <Image
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  src={urlForImage(image).url()}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery2;
