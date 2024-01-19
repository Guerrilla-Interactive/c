import type { SchemaTypeDefinition } from "sanity"

import * as documents from "@/sanity/schemas/documents"

// Do not add document types in this array, instead add them as imports
// to ./documents.ts
export const schemaTypes: SchemaTypeDefinition[] = [
  ...Object.values(documents),
]

