// connecting sanity to nextjs app
import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'iya0k23k',
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// generating Image URLs
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source)
