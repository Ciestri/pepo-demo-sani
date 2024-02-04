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
     // previewUrl: {
     //   origin: typeof location === 'undefined' ? '<http://localhost:3000>' : location.origin,
        //draftMode: {
         // enable: '/api/draft',
    //    },
     // previewUrl: 'http://localhost:3000',
     previewUrl: 'https://demo-pepo-remi.onrender.com',

      locate
    }),
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
