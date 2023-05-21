// video.js
export default {
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'videoFile',
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*',
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'videoFile',
      },
    },
  };
  