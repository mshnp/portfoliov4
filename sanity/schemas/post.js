import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  description: 'Use this document to create pages for client related work',
   fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Project',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:'Appends to /work for link creation',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
     defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Personal', value: 'personal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
    name: 'postWebVideo',
    title: 'Web Video',
    type: 'webVideo',
}),
// schema.js
defineField({
  name:'postVideo',
  title: 'Video',
  type: 'video',
}),
defineField({
  name: 'duration',
  title: 'Duration',
  type: 'string',
}),
defineField({
  name: 'tools',
  title: 'Tools',
  type: 'array',
  of: [{type: 'string'}],
}),
defineField({
  name: 'deliverables',
  title: 'Deliverables',
  type: 'array',
  of: [{type: 'string'}],
}),
defineField ({
  name: 'teamMembers',
  title: 'Team Members',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
        {
          name: 'Link',
          title: 'link',
          type: 'url',
          description:'link to their portfolio',
        },
      ],
    },
  ],
}),
   defineField({
  name: 'mainImages', 
  title: 'Main Images', 
  type: 'object',
  description: 'Select up to two main images only',
  validation: Rule => Rule.required(),
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      validation: Rule => Rule.required().max(2).warning('Please select up to two images only.'),
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'flex',
              type: 'string',
              title: 'Flex Property',
              description: 'Specifies the width of the image. Please use the format "flex-#" where # is a number from 1 to 12 (e.g. flex-6).',
              validation: Rule => Rule.regex(/^flex-(1[0-2]|[1-9])$/).warning('Please use the format "flex-#" where # is a number from 1 to 12 (e.g. flex-6).')
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Add a caption to the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Add alternative text to the image for accessibility purposes.',
              validation: Rule => Rule.required()
            },
          ],
        },
      ], 
    }, 
  ], 
}),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
      description: 'Project release date',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description:'Here is where you put paragraphs, videos, images, image gallery, quotes, etc. (everything here will be like a blog post)'
    }),
     defineField({
      name: 'summary',
      title: 'Summary',
      validation: Rule => Rule.required(),
      type: 'text',
      description: 'Quick summary of what you did',
    }),
     defineField({
  name: 'myGallery',
  title: 'My Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'row1',
      title: 'Row 1',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Alternative text for the image',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'row2',
      title: 'Row 2',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Alternative text for the image',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'row3',
      title: 'Row 3',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Alternative text for the image',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Caption for the entire gallery'
    })
  ]
})
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImages.images.0.asset',
    },
  },
})

