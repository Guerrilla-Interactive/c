/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */
import { visionTool } from '@sanity/vision'

import { clientEnv } from '@/lib/env/client'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
//
const title =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Studio'

export default defineConfig({
	basePath: '/studio',
	projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
	title,
	schema: {
		types: []
	},
	plugins: [
		structureTool(),
		visionTool({ defaultApiVersion: clientEnv.NEXT_PUBLIC_SANITY_API_VERSION }), // Add GROQ query playground
	]
})
