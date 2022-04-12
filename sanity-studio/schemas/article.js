export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required().max(80),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required().min(10).max(115),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      // codegen: { required: true },
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readingDuration',
      title: 'Reading duration (minutes)',
      type: 'number',
      codegen: { required: true },
      validation: (Rule) => Rule.required().min(1).max(60),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },
}
