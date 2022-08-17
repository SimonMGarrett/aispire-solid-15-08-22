import { sanity } from './lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const urlBuilder = imageUrlBuilder(sanity);
export const urlFor = (source) => {
  return urlBuilder.image(source);
};
