import type { CollectionConfig } from 'payload'

export const Quotes: CollectionConfig = {
  slug: 'quotes',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'institution', 'type', 'status', 'createdAt'],
  },
  access: {
    // Only admins can read/update quotes
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Public can create via API
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Equipment Quote', value: 'school' },
        { label: 'Repair Request', value: 'repair' },
        { label: 'Partnership', value: 'partner' },
        { label: 'General', value: 'general' },
        { label: 'Training', value: 'training' },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Quoted', value: 'quoted' },
        { label: 'Won', value: 'won' },
        { label: 'Lost', value: 'lost' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
