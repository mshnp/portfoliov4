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
      <h3>
          {post.title}
        </h3>
      <div>
      <section>
        {post.summary}
      </section>
      <section>
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

<div className="bg-gray-200 w-screen">
  <div className="container mx-auto flex justify-center">
    <section className="flex justify-center">
      {post.duration && (
        <article className="w-1/4 p-4">
          <h3 className="text-lg font-bold">Duration</h3>
          <p>{post.duration}</p>
        </article>
      )}

      {post.tools.length > 0 && (
        <article className="w-1/4 p-4">
          <h3 className="text-lg font-bold">Tools</h3>
          {post.tools.map((tool, index) => (
            <p key={index}>{tool}</p>
          ))}
        </article>
      )}

      {post.deliverables.length > 0 && (
        <article className="w-1/4 p-4">
          <h3 className="text-lg font-bold">Deliverables</h3>
          {post.deliverables.map((deliverable, index) => (
            <p key={index}>{deliverable}</p>
          ))}
        </article>
      )}

      {post.teamMembers.length > 0 && (
        <article className="w-1/4 p-4">
          <h3 className="text-lg font-bold">Team Members</h3>
          {post.teamMembers.map((member) => (
            <a
              key={member._key}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {member.name}
            </a>
          ))}
        </article>
      )}
    </section>
  </div>
</div>





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