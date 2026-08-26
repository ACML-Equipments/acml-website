import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Physics', value: 'physics' },
        { label: 'Chemistry', value: 'chemistry' },
        { label: 'Tools & Apparatus', value: 'tools' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        description: 'Optional. Leave blank if price varies or requires a custom quote.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'specSheet',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional PDF specification sheet.',
      },
    },
  ],
}
