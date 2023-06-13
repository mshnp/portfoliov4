import React from 'react';

const Article = ({ title, content, isLink = false }) => (
  <article className="p-4 flex-initial">
    <h3 className="text-lg mt-0 font-bold text-gray-900 dark:text-white">
      {title}
    </h3>
    {content.map((item, index) => (
      isLink
        ? <a
            key={item._key}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 hover:text-blue-700 hover:underline"
          >
            {item.name}
          </a>
        : <p key={index} className="text-gray-600 dark:text-gray-400">
            {item}
          </p>
    ))}
  </article>
);

const SummaryInformation = ({ post }) => {
  return (
    <div className="w-full rounded-md bg-gray-200 dark:bg-gray-800 my-8">
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="lg:flex lg:justify-center lg:items-start lg:max-w-4xl mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-4">
            {post.duration && <Article title='Duration' content={[post.duration]} />}
            {post.tools.length > 0 && <Article title='Tools' content={post.tools} />}
            {post.deliverables.length > 0 && <Article title='Deliverables' content={post.deliverables} />}
            {post.teamMembers.length > 0 && <Article title='Team Members' content={post.teamMembers} isLink />}
          </section>
        </div>
      </div>
    </div>
  )
}

export default SummaryInformation;
