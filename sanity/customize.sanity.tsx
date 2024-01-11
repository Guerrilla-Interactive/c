// Theme customization, desk structure here 
// Add plugins in the sanity.config.ts(x) file
import { CustomDeskGroupType } from "./api.desk-structure.ts"

// Edit for desired title (appears in the top left of the studio)  
export const studioTitle = 'Studio'

// Customization for the desk structure
export const customDeskStructure: CustomDeskGroupType = {
	title: 'Schemas',
	items: [

		// Uncomment the  objects below and replace with the
		// desk structure you desire.

		// {
		// 	title: 'Site Settings', items: []
		// },

		// {
		// 	icon: () => <div>Settings </div>,
		// 	title: 'Article',
		// 	type: 'article',
		// 	isSingleton: true,
		// }

	],
}
