// This is a map from sanity schema type to its correponding page path
// For example if: category types in sanity are rendered in the page
// categories/[slug] and that product detail pages are available in
// products/[slug], we use the following definition:
// Also note that if you have a static page at "/suman" that corresponds
// to schema of type "suman", you'll have the following defintions:
export const PATHS = {
  // Sanity documents of type "page" correspond to dynamic route at root: "/[slug]" 
  page: "",
  // productIndex document -> "/products"
  productIndex: "products",
  // product documents -> "/products/[slug]"
  product: "pieces",
  // categoryIndex document -> "/categories"
  categoriesIndex: "categories",
  // category documents -> "/categories/[slug]"
  category: "categories",
  suman: "suman",
  chapai: "chapai",
} as const

export function resolvePath(type: string, slug?: string | null) {
  // eslint-disable-next-line
  // @ts-ignore
  const path = PATHS[type]

  if (!path) {
    return slug ? `/${slug}` : "/"
  }

  return `/${path}${slug ? `/${slug}` : ""}`
}
