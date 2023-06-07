import Image from 'next/image'
import { groq } from 'next-sanity'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const query= groq`*[_type == "post"]{
  _id, title, slug, summary, mainImages{images[]{
       alt, asset->{url}
     }}, publishedAt
 } | order(publishedAt desc)`

const Homepage = async () => {
  const posts = await client.fetch(query)
  
  const getColumnWidth = (images) => {
    const imageCount = images.length;
    return `w-full sm:w-full md:w-1/${imageCount} p-2`;
  };

  return (
    <>
    <h4>Work</h4>
    <div className="flex flex-col justify-center px-4 md:px-8 max-w-4xl mx-auto">
      {posts.map(({ _id, _type, slug: {current: slug}, title, summary, publishedAt, mainImages }) => {
        const columnWidth = getColumnWidth(mainImages.images);
        
        return (
          <div key={_id}>
            <Link href={`/${slug}`}>
            <div className="flex sm: flex-wrap lg:flex-nowrap bg-yellow-100 p-4 mb-4">
    {mainImages.images.map((image, index) => (
 <div key={index} className={columnWidth}>
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
            </Link>
            <p className="text-center">
              {`${title} - ${summary}`}
            </p>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default Homepage


