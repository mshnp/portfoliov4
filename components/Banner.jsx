import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const query= groq`*[_type == "author"][0]{
  ..., socialLinks
}`

const Banner = async () => {

  const personal = await client.fetch(query)

  return (
    <>
    <section>
    <h3>{personal.description}</h3>
    <h3>Currently Digital Analyst @ Adidas</h3>
    <h6>{`Last Update: ${new Date(personal.updatedAt).getDate()} ${new Date(personal.updatedAt).toLocaleString('default', { month: 'long' })} ${new Date(personal.updatedAt).getFullYear()}`}</h6>
    </section>
    <section>
      <a href='mailto:{personal.email}'>{personal.email}</a>
    </section>
    <section>
    {personal.socialLinks.map((link, key) => (
        <a key={key} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.service}
        </a>
      ))}
    <Link href="/subscribe">Subscribe</Link>
    </section>
    </>
  )
}

export default Banner