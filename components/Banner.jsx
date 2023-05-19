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
    <section>
    <h4>
    <PortableText value={personal.summary} components={RichTextComponents}/>
    </h4>
    </section>
    </>
  )
}

export default Banner