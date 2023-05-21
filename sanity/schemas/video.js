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
    {
      name: 'isLooping',
      title: 'Is Looping?',
      description: 'Check this if the video should loop, autoplay and have no controls',
      type: 'boolean',
    },
  ],
};
