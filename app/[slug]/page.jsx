import React from 'react'
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
import PostBanner from '@/components/PostBanner';
import SummaryInformation from '@/components/SummaryInformation';

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']{
    slug
  }`

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => {
    console.log(slug.slug.current); // Log the slug
    return slug.slug.current;
  });

  return slugRoutes.map(slug => ({
    params: {
      slug,
    },
  }));
}

export async function hehe() {
  const query = groq`*[_type=='post']{
    slug
  }`

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => {
   // Log the slug
    return slug.slug.current;
  })
 console.log(slugRoutes);
}




const Post = async ({ params: { slug } }) => {
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
        caption,
        scopeToMaxWidth,
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
        bannerVideo{url}
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
        },
        _type == "blockWebVideo" => {
          url
        }
      }
    }
  `
  
  const post = await client.fetch(query, { slug });
  return (
    <article className='px-4 sm:px-8'>
      <div className='max-w-5xl mx-auto'>
         <PostBanner media={post?.bannerimageOrVideo} />
        <h3 className="text-4xl text-left -pt-8 text-gray-900 dark:text-white">
        {post?.title}
         </h3>
        <div className="text-gray-600 dark:text-gray-400">
        <section className="text-left">{post?.summary}</section>
        </div>
        </div>
        
        <section className="my-4">
          <div>
            {post?.streaminglinks?.map((link) => (
              <a
                key={link._key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                {link.service}
              </a>
            ))}
          </div>
        </section>
        <SummaryInformation post={post}/>
      <section className="mx-auto -pt-8">
      <PortableText value={post?.body} components={RichTextComponents} />
      </section>
    </article>
  );
};

export default Post;