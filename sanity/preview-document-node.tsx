// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference
import { Eye, PencilSimple } from '@phosphor-icons/react'
import type { SanityDocument } from 'next-sanity'
import type {
  DefaultDocumentNodeResolver,
  StructureBuilder,
} from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'

import { resolvePath } from './customize/resolve-path'
import { PREVIEW_DOC_TYPES } from './sanity.consts'

const iframeOptions = {
  url: {
    preview: getPreviewUrl,
    draftMode: '/api/draft',
    origin: 'same-origin',
  },
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, ctx) => {
  const schemaType = ctx.schema.get(ctx.schemaType)

  if (!schemaType) return S.document()

  // Add preview if the schema option marks the document as previewable
  if (PREVIEW_DOC_TYPES.includes(schemaType.name)) {
    return S.document().views([
      S.view.form().icon(PencilSimple),
      S.view
        .component(Iframe)
        .title('Preview')
        .icon(Eye)
        .options(iframeOptions),
    ])
  }

  return S.document()
}

// Used for singletons
export const documentPreviewViews = (S: StructureBuilder) => [
  S.view.form(),
  S.view.component(Iframe).title('Preview').options(iframeOptions),
]

function getPreviewUrl(doc: SanityDocument) {
  const defaultPath = '/'
  const path = resolvePath(doc._type, doc?.slug?.current || null) || defaultPath
  return path
}
