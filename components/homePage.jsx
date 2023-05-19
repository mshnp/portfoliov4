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

    return (
      <>
      <h4>Work</h4>
      <div className='flex flex-col justify-center'>
        {posts.map(({ _id, _type, slug: {current: slug}, title, summary, publishedAt, mainImages }) => (
          <div key={_id}>
            <Link href={`/${slug}`}>
            <div className='flex gap-2 flex-wrap justify-center'>
              {mainImages.images.map((image, index) => (
                <Image
                  key={index}
                  alt={image.alt}
                  width="500"
                  height="500"
                  src={urlForImage(image).url()}
                />
              ))}
            </div>
            <p className='text-center'>
              {`${title} - ${summary}`}
            </p>
            </Link>
          </div>
        ))}
      </div>
      </>
    );
}

export default Homepage