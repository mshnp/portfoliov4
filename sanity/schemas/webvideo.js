import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'webVideo',
  title: 'Web Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      description: 'Insert Embedded Video URL'
      
    }),
  ],
   preview: {
    select: {
      title: 'title',
    }
  }
})
