// schemas/video.js
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'video',
  type: 'object',
  title: 'Video',
  description: 'Use for video files uploaded directly from device',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
        name: 'alt',
        type: 'string',
        title: 'Alternative Text',
        description: 'Alternative text for the video',
        validation: Rule => Rule.required(),
      }),
    defineField({
      name: 'videoFile',
      type: 'file',
      title: 'Video File',
      description: 'Upload the video file here',
      options: {
        accept: 'video/*', // Limit the accepted file types to video files
      },
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true, // If you want to define a hotspot for the thumbnail
      },
    }),
    // Add more fields as needed (e.g., duration, tags, etc.)
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
});
