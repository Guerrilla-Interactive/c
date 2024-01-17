// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference

import type {
  DefaultDocumentNodeResolver,
  StructureBuilder,
} from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'

// // import AuthorAvatarPreviewPane from './AuthorAvatarPreviewPane'
//
// const iframeOptions = {
// 	url: {
// 		origin: 'same-origin',
// 		preview: (document) => {
// 			if (!document) {
// 				return new Error('Missing document')
// 			}
// 			switch (document._type) {
// 				case 'suman':
// 					return 'suman'
// 				default:
// 					return new Error(`Unknown document type: ${document?._type}`)
// 			}
// 		},
// 		draftMode: "/api/draft",
// 	},
// 	reload: { button: true },
// } satisfies IframeOptions
//
// export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
// 	return (S,) => {
// 		return S.document().views([
// 			S.view.form(),
// 			S.view.component(Iframe).options(iframeOptions).title('Preview'),
// 		])
// 	}
// }

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, ctx) => {
  const schemaType = ctx.schema.get(ctx.schemaType)

  if (!schemaType) return S.document()

  return S.document().views([S.view.component(Iframe).title('suman')])
  // .views(documentPreviewViews(S))
}

export const documentPreviewViews = (S: StructureBuilder) => [
  S.view.form(),
  S.view
    .component(Iframe)
    .title('Preview')
    .options({
      url: {
        preview: getPreviewUrl,
        draftMode: '/api/draft',
        origin: 'same-origin',
      },
    }),
]

function getPreviewUrl() {
  return '/suman'
}
