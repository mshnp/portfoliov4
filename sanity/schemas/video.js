import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
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
