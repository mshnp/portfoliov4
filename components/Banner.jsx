import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from './RichTextComponents';


const query= groq`*[_type == "author"][0]{
  ..., socialLinks
}`

const Banner = async () => {

  const personal = await client.fetch(query)

  return (
    <>
    <section className='max-w-7xl mx-auto text-justify px-8'>
    <PortableText value={personal.summary} components={RichTextComponents}/>
    </section>
    </>
  )
}

export default Banner