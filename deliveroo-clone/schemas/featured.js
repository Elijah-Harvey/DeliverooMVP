export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Menu Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: Rule => Rule.max(200),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
};
