import Gallery from "./Gallery";
import WebVideoDisplay from "./WebVideoDisplay";
import Card from "./Card";

export const RichTextComponents = {
  types: {
    myGallery: ({value}) => <div className="flex justify-center mx-auto py-4"><Gallery gallery={value} /></div>,
    blockWebVideo: ({value}) => <div className="flex justify-center mx-auto py-4"><WebVideoDisplay media={value}/></div>,
    blockCard: ({value}) => <div className="flex justify-center mx-auto py-4"><Card card={value}/></div>,
  },

  list: {
    bullet: ({ children }) => <ul className="max-w-5xl mx-auto list-disc leading-normal pl-8 mb-8 text-gray-900 dark:text-gray-100">{children}</ul>,
    number: ({ children }) => <ol className="max-w-5xl mx-auto leading-normal list-decimal pl-8 mb-8 text-gray-900 dark:text-gray-100">{children}</ol>,
  },

  block: {
    h1: ({children}) => <h1 className="max-w-5xl mx-auto text-6xl leading-tight mt-8 mb-4 font-sans text-gray-900 dark:text-white">{children}</h1>, 
    h2: ({children}) => <h2 className="max-w-5xl mx-auto text-5xl mt-8 mb-3 leading-normal font-sans text-gray-900 dark:text-gray-100">{children}</h2>,
    h3: ({children}) => <h3 className="max-w-5xl mx-auto text-4xl mt-8 mb-2 font-sans text-gray-900 dark:text-gray-200">{children}</h3>, 
    h4: ({children}) => <h4 className="max-w-5xl mx-auto text-3xl mt-8 mb-2 font-sans text-gray-900 dark:text-gray-300">{children}</h4>,
    h5: ({children}) => <h5 className="max-w-5xl mx-auto text-2xl mt-8 mb-1 font-sans text-gray-900 dark:text-gray-400">{children}</h5>,
    h6: ({children}) => <h6 className="max-w-5xl mx-auto text-xl mt-8 mb-1 font-sans text-gray-900 dark:text-gray-500">{children}</h6>,
    normal: ({children}) => <p className="max-w-5xl mx-auto mb-4 mt-2 text-gray-900 dark:text-gray-100">{children}</p>,
    blockquote: ({children}) => 
    <div className="max-w-5xl mx-auto flex justify-center py-4">
      <blockquote className="border-l-2 border-gray-300 px-8 my-4 text-center max-w-prose mx-auto dark:border-gray-600 dark:text-gray-100 font-sans">{children}</blockquote>
    </div>,  
  },

  marks: {
    em: ({children}) => <em className="text-gray-600 font-semibold dark:text-gray-400">{children}</em>,
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-300 ease-in-out dark:text-blue-500 dark:hover:text-blue-700" 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
  },
}
