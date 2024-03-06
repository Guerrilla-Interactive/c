import * as documents from './schemas/documents'

export const PREVIEW_DOC_TYPES = Object.values(documents)
  .filter((doc) => doc?.options?.previewable)
  .map((doc) => doc.name) as string[]
