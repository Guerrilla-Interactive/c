// Theme customization, desk structure here
// Add plugins in the sanity.config.ts(x) file
// NGO: DO NOT REMOVE: MAGIC_STRING_CUSTOM_IMPORT

import type { CustomDeskGroupType } from '@/sanity/api.desk-structure.ts'
import { rootIndexSchema, settings } from '@/sanity/schemas/documents'

// Edit for desired title (appears in the top left of the studio)
export const studioTitle = 'Studio'

// HOW TO CUSTOMIZE?
// See: https://github.com/Guerrilla-Interactive/c/issues/4
export const customDeskStructure: CustomDeskGroupType = {
  title: 'Schemas',
  type: 'group',
  items: [
    // ADD DESK STRUCTURES AFTER THIS COMMENT
    // DO NOT REMOVE: MAGIC_STRING_LINE_DESK_STRUCTURES
    { type: 'singleton', doc: settings },
    { type: 'singleton', doc: rootIndexSchema },
  ],
}
