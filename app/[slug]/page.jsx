import React from 'react'
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
import Gallery from '@/components/Gallery';
import VideoDisplay from '@/components/VideoDisplay';
import Gallery2 from '@/components/Gallery 2';
import Gallery3 from '@/components/Gallery 3';
import PostBanner from '@/components/PostBanner';

const Post = async ({params: {slug}}) => {
    const query = groq`
    *[_type in ["post"] && slug.current == $slug][0] {
      ...,
      myGallery {
        row1[] {
          alt,
          flex,
          asset-> {
            url
          }
        },
        row2[] {
          alt,
          asset-> {
            url
          }
        },
        row3[] {
          alt,
          asset-> {
            url
          }
        },
        caption
      },
      mainImages {
        images[] {
          alt,
          asset-> {
            url
          }
        }
      },
      bannerimageOrVideo {
        bannerImagesArray[] {
          alt,
          _key,
          asset-> {
            url
          }
        },
        video {
          asset-> {
            url
          }
        }
      },
      postVideo {
        isLooping,
        videoFile {
          asset-> {
            url
          }
        }
      },
      body[] {
        ...,
        _type == "blockVideo" => {
          isLooping,
          videoFile {
            asset-> {
              url
            }
          }
        }
      }
    }
`    
const post = await client.fetch(query, {slug})

  return (
    <article>
     <PostBanner media={post.bannerimageOrVideo} />      
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
{post.postVideo &&
  <VideoDisplay videoData={post.postVideo} />
}

<div className="bg-gray-200 w-full">
  <div className="container mx-auto">
    <section className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-4">
      {post.duration && (
        <article className="p-4 bg-orange-300 flex-auto">
          <h3 className="text-lg font-bold">Duration</h3>
          <p>{post.duration}</p>
        </article>
      )}

      {post.tools.length > 0 && (
        <article className="p-4 bg-orange-300 flex-auto">
          <h3 className="text-lg font-bold">Tools</h3>
          {post.tools.map((tool, index) => (
            <p key={index}>{tool}</p>
          ))}
        </article>
      )}

      {post.deliverables.length > 0 && (
        <article className="p-4 bg-orange-300 flex-auto">
          <h3 className="text-lg font-bold">Deliverables</h3>
          {post.deliverables.map((deliverable, index) => (
            <p key={index}>{deliverable}</p>
          ))}
        </article>
      )}

      {post.teamMembers.length > 0 && (
        <article className="p-4 bg-orange-300 flex-auto">
          <h3 className="text-lg font-bold">Team Members</h3>
          {post.teamMembers.map((member) => (
            <a
              key={member._key}
              href={member.link}
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
<section>
</section>
<section>
</section>
<section>
       {post.myGallery &&
  <Gallery3 gallery={post.myGallery} />
}
</section>
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
    </article>
  )

    
}

export default Post