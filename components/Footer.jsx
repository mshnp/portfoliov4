import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const query= groq`*[_type == "author"][0]{
  email, socialLinks, updatedAt
}`

const Footer = async () => {

  const links = await client.fetch(query)

  return (
    <>

    <section>
      <a href={`mailto:${links.email}`}>email</a>
    </section>
    <section>
    {links.socialLinks.map((link, key) => (
        <a key={key} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.service}
        </a>
      ))}
    <Link href="/subscribe">Subscribe</Link>
    </section>
    <h6>{`Last Update: ${new Date(links.updatedAt).getDate()} ${new Date(links.updatedAt).toLocaleString('default', { month: 'long' })} ${new Date(links.updatedAt).getFullYear()}`}</h6>
    </>
  )
}

export default Footer