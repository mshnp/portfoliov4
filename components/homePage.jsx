import Image from 'next/image';
import { groq } from 'next-sanity';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';


const query= groq`*[_type == "post"]{
  _id, title, slug, summary, mainImages{images[]{
       alt, asset->{url}
     }}, publishedAt
 } | order(publishedAt desc)`

const Homepage = async () => {
  const posts = await client.fetch(query);

  const getColumnWidth = (images) => {
    const imageCount = images.length;
    return `w-full sm:w-full md:w-1/${imageCount}`;
  };

  return (
    <section className='pt-8 pb-16'>
    <div className="flex flex-col justify-center mx-auto">
      {posts.map(({ _id, slug: {current: slug}, title, summary, mainImages }) => {
        const columnWidth = getColumnWidth(mainImages.images);
        
        return (
          <div key={_id}>
            <Link href={`/${slug}`}>
            <div className="flex sm:flex-wrap lg:flex-nowrap">
    {mainImages.images.map((image, index) => (
 <div key={index} className={columnWidth}>
   <Image
            className="w-full rounded-lg shadow-lg"
            alt={image.alt}
            width="9999"
            height="9999"
            src={urlForImage(image).url()}
          />
</div>         
))}
</div>
            </Link>
            <section>
              <h6 className="mt-4 text-left">
              {title}
            </h6>
            <p className="text-left">
            {summary}
            </p>
          </section>
          </div>
        )
      })}
    </div>
    </section>
  );
}

export default Homepage;
