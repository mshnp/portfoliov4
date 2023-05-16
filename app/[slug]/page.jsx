import React from 'react'
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
import Gallery from '@/components/Gallery';

const Post = async ({params: {slug}}) => {
    const query = groq`
 *[_type in ["post", "projects"] && slug.current == $slug][0] {
  ...,  myGallery{
    row1[]{alt, asset->{url}}, 
    row2[]{alt, asset->{url}}, 
    row3[]{alt, asset->{url}}, 
    caption
  },
  mainImages {
    images[]{
      alt, 
      asset->{
        url
      }
    }
  }
}
`
const post = await client.fetch(query, {slug})

console.log(post)

  return (
    <article>
      <section>
        <h3>
          {post.title}
        </h3>
      </section>
      <div>
            <p className='text-center'>
            {`${new Date(post.publishedAt).getDate()} ${new Date(post.publishedAt).toLocaleString('default', { month: 'long' })} ${new Date(post.publishedAt).getFullYear()}`}
    </p>
      </div>
      <section>
  <div>
    {post.streaminglinks?.map((link) => (
      <a
        key={link._key}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.service}
      </a>
    ))}
  </div>
</section>

      <section>
        <div className='flex gap-2 flex-wrap justify-center'>
         {post.mainImages.images.map((image, index) => (
              <Image
                key={index}
                alt={image.alt}
                width="500"
                height="500"
                src={urlForImage(image).url()}
              />
            ))}
        </div>
      </section>
      <div>
      <section>
       {post.gallery &&
  <Gallery gallery={post.gallery} />
}
</section>
     {post.youtube && post.youtube.url && (
  <iframe
    src={`${post.youtube.url}`}
    title="Media Player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
)}

    </div>
      <section>
        {post.summary}
      </section>
       <section className="bg-pink-100">
        <PortableText value={post.body} components={RichTextComponents}/>
      </section>
       <section className="bg-orange-100">
        <PortableText value={post.credits} components={RichTextComponents}/>
      </section>
    </article>
  )
}

export default Post