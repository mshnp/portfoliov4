import Gallery from "./Gallery";
import VideoDisplay from "./VideoDisplay";
import WebVideoDisplay from "./WebVideoDisplay";

export const RichTextComponents = {
  types: {
    myGallery: ({value}) => <div className="flex justify-center"><Gallery  gallery={value} /></div>,
    blockVideo: ({ value }) => <div className="flex justify-center"><VideoDisplay videoData={value} /></div>,
    blockWebVideo: ({value}) => <div className="flex justify-center"><WebVideoDisplay media={value}/></div>,
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc pl-8">{children}</ul>, // adjusted to 8x grid (pl-8 = 32px)
    number: ({ children }) => <ol className="list-decimal pl-8">{children}</ol>, // adjusted to 8x grid (pl-8 = 32px)
  },

  block: {
    h1: ({children}) => <h1 className="text-6xl mt-8 mb-8">{children}</h1>, // larger and with bottom margin for hierarchy
    h2: ({children}) => <h2 className="text-5xl mt-6 mb-6">{children}</h2>, // slightly smaller and less margin than h1
    h3: ({children}) => <h3 className="text-4xl mt-6 mb-6">{children}</h3>, // smaller and same margin as h2
    h4: ({children}) => <h4 className="text-3xl mt-4 mb-4">{children}</h4>, // smaller and less margin than h3
    h5: ({children}) => <h5 className="text-2xl mt-4 mb-4">{children}</h5>, // smaller and same margin as h4
    normal: ({children}) => <p className="mb-2">{children}</p>, // smallest margin for normal text
    blockquote: ({children}) => 
    <div className="flex justify-center">
      <blockquote className="border-l-purple-500 mt-4 mb-4 text-center max-w-prose mx-auto">{children}</blockquote>
    </div>,  },

  marks: {
    em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
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
