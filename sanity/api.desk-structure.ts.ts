import type { DocumentDefinition } from 'sanity'
import type { Divider, ListItem, ListItemBuilder, StructureBuilder, StructureResolverContext } from 'sanity/structure'

import { customDeskStructure } from './customize.sanity'

// Public facing API
export interface CustomDeskGroupType {
  type: "group"
  icon?: React.ElementType
  title: string
  items: Array<
    CustomDeskDocType | CustomDeskGroupType | CustomDeskDocSingletonType
  >
}

export interface CustomDeskDocType {
  type: "doc"
  doc: DocumentDefinition
}

export interface CustomDeskDocSingletonType {
  type: "singleton"
  doc: DocumentDefinition
}


type DeskItem = ListItemBuilder | ListItem | Divider

function insertDividersInMiddle(items: Array<DeskItem>, S: StructureBuilder): Array<DeskItem> {
  return items.reduce((prev: DeskItem[], curr: DeskItem) => [...prev, S.divider(), curr], [])
}

// This function returns builds appropriate structure for a given object
function getStructure(
  x: CustomDeskDocType | CustomDeskGroupType | CustomDeskDocSingletonType,
  S: StructureBuilder,
  context: StructureResolverContext
): DeskItem {
  switch (x.type) {
    // Document type
    case 'doc':
      return S.listItem()
        .title(x.doc.title || x.doc.type)
        .icon(x.doc.icon)
        .schemaType(x.doc.type)
        .child(S.documentTypeList(x.doc.type).title(`All ${x.doc.title || x.doc.type}`))
    // Group type
    case 'group':
      return S.listItem()
        .title(x.title)
        .icon(x.icon)
        .child(
          S.list()
            .title(x.title)
            .items(
              insertDividersInMiddle(x.items.map(y =>
                getStructure(y, S, context)), S)
            )
        )
    // Singleton
    case 'singleton':
      return S.listItem()
        .title(x.doc.title ?? x.doc.name)
        .icon(x.doc.icon)
        .child(
          S.document()
            .schemaType(x.doc.name)
            .documentId(x.doc.name)
        )
    default:
      throw x
  }
}


// Builds desk structure based on custom desk structure
// ./customize.sanity.tsx
export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
  const title = customDeskStructure.title
  const items = customDeskStructure.items.map(x => getStructure(x, S, context))
  return S.list().title(title).items(insertDividersInMiddle(items, S))
}
