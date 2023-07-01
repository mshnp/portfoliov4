import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const query = groq`*[_type == "author"][0]{
  email, socialLinks, updatedAt
}`;

const Footer = () => {
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const fetchLinks = async () => {
    const links = await client.fetch(query);
    return links;
  };

  const renderSocialLinks = (links) => {
    return (
    
        <div className="flex flex-col items-start">
          {links.map((link, _key) => (
            <a
              key={_key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mb-2 inline-block"
              >
              {link.service.charAt(0).toUpperCase() + link.service.slice(1)}
            </a>
          ))}
        </div>
     
    );
  };

  const renderContent = async () => {
    const links = await fetchLinks();
    return (
      <footer className="w-full bg-gray-200 dark:bg-gray-800">
        <section className="pb-8 pt-16 max-w-5xl mx-auto px-4 sm:px-8">
        
            <a href={`mailto:${links.email}`} target="_blank" className="text-blue-500 inline-block mb-2">
              Email
            </a>
            {renderSocialLinks(links.socialLinks)}
          <p className="text-left">
            {`Last updated on ${formatDate(links.updatedAt)}`}
          </p>
        </section>
      </footer>
    );
  };

  return <div>{renderContent()}</div>;
};

export default Footer;

