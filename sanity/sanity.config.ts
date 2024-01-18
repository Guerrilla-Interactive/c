import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { chapaiSlugSchema } from 'src/app/chapai/(index)/(chapai-index-core)/(chapai-index-server)/chapai.index-schema'
import { sumanIndexSchema } from 'src/app/suman/(index)/(suman-index-core)/(suman-index-server)/suman.index-schema'

import { clientEnv } from '@/lib/env/client'

import { structure } from './api.desk-structure.ts'
import { studioTitle } from './customize/desk.custom.sanity'
import { defaultDocumentNode } from './preview-document-node'
import { article, settings } from './schemas/documents'

export default defineConfig({
  basePath: '/studio',
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
  title: studioTitle,
  schema: {
    types: [article, settings, sumanIndexSchema, chapaiSlugSchema],
  },
  plugins: [
    structureTool({ structure: structure, defaultDocumentNode }),
    visionTool({ defaultApiVersion: clientEnv.NEXT_PUBLIC_SANITY_API_VERSION }), // Add GROQ query playground
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],
})
