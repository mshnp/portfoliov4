import {defineType, defineArrayMember, defineField} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          { title: 'Code', value: 'code' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineField ({
      title: 'blockVideo',
      name: 'blockVideo',
      type: 'video',
}),
defineField({
  title: 'Web Video',
  name: 'blockWebVideo',
  type: 'webVideo',
}),
defineField(
  {title: 'Block Card',
  name: 'blockCard',
  type: 'card'}
),      
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
    }),
    defineField({
      name: 'scopeToMaxWidth',
      title: 'Scope to max-width',
      type: 'boolean',
      description: 'Scope width to max-width of text'
    }),
  ]
}), 

  ],
})
