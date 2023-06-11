
export default{
    title: 'Card',
    name: 'card',
    type: 'object',
    fields: [
      {
        title: 'Items',
        name: 'items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                title: 'Title',
                name: 'title',
                type: 'string',
              },
              {
                title: 'Text',
                name: 'text',
                type: 'text',
              },
              {
                title: 'Colour',
                name: 'colour',
                description: 'colour for card',
                type:'string',
              },
            ],
          },
        ],
      },
    ],
  }

