import type { DocumentDefinition } from 'sanity'
import type {
  Divider,
  DocumentOptions,
  ListItem,
  ListItemBuilder,
  StructureBuilder,
  StructureResolverContext,
} from 'sanity/structure'

import { customDeskStructure } from './customize/desk.custom.sanity'
import { documentPreviewViews } from './preview-document-node'

// Public facing API
export interface CustomDeskGroupType {
  type: 'group'
  icon?: React.ElementType
  title: string
  items: Array<
    CustomDeskDocType | CustomDeskGroupType | CustomDeskDocSingletonType
  >
}

interface CustomDocumentOptions extends DocumentOptions {
  previewable?: boolean
  linkable?: boolean
  isSingleton?: boolean
}

export interface CustomDocumentDefinition extends DocumentDefinition {
  options?: CustomDocumentOptions
}

export interface CustomDeskDocType {
  type: 'doc'
  doc: CustomDocumentDefinition
}

export interface CustomDeskDocSingletonType {
  type: 'singleton'
  doc: CustomDocumentDefinition
}

type DeskItem = ListItemBuilder | ListItem | Divider

function insertDividersInMiddle(
  items: Array<DeskItem>,
  S: StructureBuilder,
): Array<DeskItem> {
  return items.reduce(
    (prev: DeskItem[], curr: DeskItem) => [...prev, S.divider(), curr],
    [],
  )
}

// This function returns builds appropriate structure for a given object
function getStructure(
  x: CustomDeskDocType | CustomDeskGroupType | CustomDeskDocSingletonType,
  S: StructureBuilder,
  context: StructureResolverContext,
): DeskItem {
  switch (x.type) {
    // Document type
    case 'doc': {
      // x.doc.type is always document for 'document' schemas!
      // Note schemaType is x.doc.name NOT x.doc.type
      const schemaType = x.doc.name
      const documentTitle = x.doc.title || schemaType
      return S.listItem()
        .title(documentTitle)
        .icon(x.doc.icon)
        .schemaType(schemaType)
        .child(S.documentTypeList(schemaType).title(`All ${documentTitle}`))
    }
    // Group type
    case 'group':
      return S.listItem()
        .title(x.title)
        .icon(x.icon)
        .child(
          S.list()
            .title(x.title)
            .items(
              insertDividersInMiddle(
                x.items.map((y) => getStructure(y, S, context)),
                S,
              ),
            ),
        )
    // Singleton
    case 'singleton': {
      // x.doc.type is always document for 'document' schemas! // Note schemaType is not x.doc.type
      const schemaType = x.doc.name
      const documentTitle = x.doc.title || schemaType
      return S.listItem()
        .title(documentTitle)
        .icon(x.doc.icon)
        .child(
          S.document()
            .schemaType(schemaType)
            .documentId(documentTitle)
            .views([])
            .views(x.doc?.options?.previewable ? documentPreviewViews(S) : []),
        )
    }
    default:
      throw x
  }
}

// Builds desk structure based on custom desk structure
// ../customize/desk.custom.sanity
export const structure = (
  S: StructureBuilder,
  context: StructureResolverContext,
) => {
  const title = customDeskStructure.title
  const items = customDeskStructure.items.map((x) =>
    getStructure(x, S, context),
  )
  return S.list().title(title).items(insertDividersInMiddle(items, S))
}
