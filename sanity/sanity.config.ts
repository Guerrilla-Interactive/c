import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { sumanIndexSchema } from 'src/app/suman/(index)/(suman-index-core)/(suman-index-server)/suman.index-schema'

import { clientEnv } from '@/lib/env/client'

import { structure } from './api.desk-structure.ts'
import { studioTitle } from './customize/desk.custom.sanity'
import { article, settings } from './schemas/documents'

export default defineConfig({
  basePath: '/studio',
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
  title: studioTitle,
  schema: {
    types: [article, settings, sumanIndexSchema],
  },
  plugins: [
    structureTool({ structure: structure }),
    visionTool({ defaultApiVersion: clientEnv.NEXT_PUBLIC_SANITY_API_VERSION }), // Add GROQ query playground
  ],
})
