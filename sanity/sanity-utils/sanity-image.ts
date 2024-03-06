import imageUrlBuilder from '@sanity/image-url'
import type { Image, ImageUrlBuilder } from 'sanity'

import { clientEnv } from '@/lib/env/client.ts'

const imageBuilder = imageUrlBuilder({
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
}) as ImageUrlBuilder

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
