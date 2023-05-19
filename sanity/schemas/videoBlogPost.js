import { MuxVideoAsset } from 'sanity-plugin-mux-input';


export default {
    title: 'Video blog post',
    name: 'videoBlogPost',
    type: 'document',
    fields: [
      {title: 'Title', name: 'title', type: 'string'},
      {
        name: 'video',
        type: 'mux.video',
        title: 'Video',
        inputComponent: MuxVideoAsset,
        validation: (Rule) => Rule.required(),
      },
    ],
  }