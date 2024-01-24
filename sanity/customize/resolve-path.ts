// This is a map from sanity schema type to its correponding page path
// For example if: category types in sanity are rendered in the page
// categories/[slug] and that product detail pages are available in
// products/[slug], we use the following definition:
//
// productIndex document -> "/products"
// productIndex: "products",
// product: "pieces",
// categoriesIndex: "categories",
// category: "categories",
//
export const PATHS = {
  // NGO: DO NOT REMOVE: MAGIC_STRING_SCHEMA_TYPE_TO_PATH_PREFIX
  suman: '/suman',
  chapai: 'chapai',
} as const

export function resolvePath(type: string, slug?: string | null) {
  // eslint-disable-next-line
  // @ts-ignore
  const path = PATHS[type]

  // If path mapping not found use slug as base path
  if (!path) {
    return slug ? `/${slug}` : '/'
  }

  // Apppend slug if it exists
  const toReturn = `/${path}${slug ? `/${slug}` : ''}`
  return toReturn.replaceAll('//', '/')
}
