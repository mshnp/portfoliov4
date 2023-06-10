import React from 'react'
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
import Gallery from '@/components/Gallery';
import VideoDisplay from '@/components/VideoDisplay';
import PostBanner from '@/components/PostBanner';
import WebVideoDisplay from '@/components/WebVideoDisplay';

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
    <article className="p-4 sm:p-8">
      <PostBanner media={post.bannerimageOrVideo} />
      <h3 className="text-3xl my-4 text-gray-900 dark:text-white">
        {post.title}
      </h3>
      <div className="text-gray-600 dark:text-gray-400">
        <section className="my-4">{post.summary}</section>
        <section className="my-4">
          <div>
            {post.streaminglinks?.map((link) => (
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
        <div className="w-full my-8 bg-gray-200 dark:bg-gray-800">
  <div className="container mx-auto">
    <section className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-4">
      {post.duration && (
        <article className="p-2 flex-auto">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Duration
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {post.duration}
          </p>
        </article>
      )}
      {post.tools.length > 0 && (
        <article className="p-4 flex-auto">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Tools
          </h3>
          {post.tools.map((tool, index) => (
            <p
              key={index}
              className="text-gray-600 dark:text-gray-400"
            >
              {tool}
            </p>
          ))}
        </article>
      )}
      {post.deliverables.length > 0 && (
        <article className="p-4 flex-auto">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Deliverables
          </h3>
          {post.deliverables.map((deliverable, index) => (
            <p
              key={index}
              className="text-gray-600 dark:text-gray-400"
            >
              {deliverable}
            </p>
          ))}
        </article>
      )}
      {post.teamMembers.length > 0 && (
        <article className="p-4 flex-auto">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Team Members
          </h3>
          {post.teamMembers.map((member) => (
            <a
              key={member._key}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:text-blue-700 hover:underline"
            >
              {member.name}
            </a>
          ))}
        </article>
      )}
    </section>
  </div>
</div>


        <section className="my-8">
          {post.myGallery && <Gallery gallery={post.myGallery} />}
        </section>
      </div>
      <section className="my-8">
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  );
};

export default Post;