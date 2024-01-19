// Theme customization, desk structure here
// Add plugins in the sanity.config.ts(x) file
import { chapaiIndexSchema } from 'src/app/chapai/(index)/(chapai-index-core)/(chapai-index-server)/chapai.index-schema'
import { sumanIndexSchema } from 'src/app/suman/(index)/(suman-index-core)/(suman-index-server)/suman.index-schema'

import type { CustomDeskGroupType } from '@/sanity/api.desk-structure.ts'
import { article, settings } from '@/sanity/schemas/documents'

// Edit for desired title (appears in the top left of the studio)
export const studioTitle = 'Studio'

// Customization for the desk structure
export const customDeskStructure: CustomDeskGroupType = {
  title: 'Schemas',
  type: 'group',
  items: [
    // ADD DESK STRUCTURES AFTER THIS COMMENT
    // DO NOT REMOVE: MAGIC_STRING_LINE_FIRST_IMPORT
    { type: 'singleton', doc: settings },
    { type: 'singleton', doc: sumanIndexSchema },
    {
      title: 'Articles And Chaapi',
      type: 'group',
      items: [
        { type: 'singleton', doc: chapaiIndexSchema },
        { type: 'doc', doc: article },
      ],
    },
  ],
}
