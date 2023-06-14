import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the author\'s name here.',
    }),
    defineField({
  name: 'mainImages', 
  title: 'Main Images', 
  type: 'object',
  description: 'Select up to two main images only',
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
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Enter some context about yourself.',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      validation: Rule => Rule.required(),
      description: 'The date and time this document was last updated.',
    }),
    defineField( {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email().error('A valid email is required')
}),
defineField({
  name: 'summary',
  title: 'Summary',
  type: 'blockContent',
  description: 'Add some copy about yourself',
}),
    defineField({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'array',
  description: 'Links to the socials (must start with https://)',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'service',
          title: 'Service',
          type: 'string',
          options: {
            list: [
              { title: 'Read.cv', value: 'read.cv' },
              { title: 'LinkedIn', value: 'linkedIn' },
              { title: 'GitHub', value: 'gitHub' },
            ],
          },
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
      ],
    }, 
  ],
}),

  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
