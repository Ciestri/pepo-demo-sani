// ./sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {presentationTool} from 'sanity/presentation'
import { locate } from './presentation/locate'



export default defineConfig({
  name: 'default',
  title: 'Sanity Live Preview',

  projectId: 'fungdldg',
  dataset: 'production',

  plugins: [
    presentationTool({
      previewUrl: 'http://localhost:3000',
      locate
    }),
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
