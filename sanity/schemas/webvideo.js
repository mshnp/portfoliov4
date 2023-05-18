import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'webvideo',
  title: 'Web Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      description: 'Insert Embedded Video URL'
      
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Alternative text for the video',
      validation: Rule => Rule.required(),
    }) 
  ],
   preview: {
    select: {
      title: 'title',
    }
  }
})
