import Gallery from "./Gallery";
import Trying from "./trying";
import VideoDisplay from "./VideoDisplay";


export const RichTextComponents = {
  types: {

    myGallery: ({value}) => <Gallery  gallery={value} />,
    blockVideo: ({ value }) => <VideoDisplay videoData={value} />,
  },

    list: {
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    },

     block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-5xl">{children}</h1>,
    h2: ({children}) => <h2 className="text-4xl">{children}</h2>,
    h3: ({children}) => <h3 className="text-3xl">{children}</h3>,
    h4: ({children}) => <h4 className="text-2xl">{children}</h4>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
     },

     marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
          {children}
        </a>
      )
    },
  },
}