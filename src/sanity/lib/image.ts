import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Create the image URL builder instance
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate the image URL
export const urlForImage = (source: SanityImageSource) => {
  if (!source) return '';  // Return empty string if source is missing
  return builder.image(source).auto('format').fit('max').url();
};
