// Theme customization, desk structure here
// Add plugins in the sanity.config.ts(x) file
import type { CustomDeskGroupType } from '@/sanity/api.desk-structure.ts'
import { article, settings } from '@/sanity/schemas/documents'

// Edit for desired title (appears in the top left of the studio)
export const studioTitle = 'Studio'

// Customization for the desk structure
export const customDeskStructure: CustomDeskGroupType = {
	title: 'Schemas',
	type: "group",
	items: [
		// Uncomment the  objects below and replace with the
		// desk structure you desire.
		{ type: "singleton", doc: settings },
		{ type: "doc", doc: article },
	],
}
