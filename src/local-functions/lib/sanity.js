import sanityClient from '@sanity/client';

export const sanity = sanityClient({
  projectId: 'lvg9vh4b',
  dataset: 'production',
  apiVersion: '2021-09-01',
  useCdn: false,
  // Token for "gray-mule"
  token:
    'skEq9YJqIZvHUzxmkF5LPEXOwncy44fSRRA8422f6anEHlVbN5t7ak8jIzKqvb70LgESSEQsWzMUnSedhkJxRnjIH68CvSsdYjZoGgomUzb2dc7dNsB9sFeV4HgMQ9DKQBynaZbbg0lh9XJUEfZz2rLq0O9MOkiyWQxL3IIkrkWPdbYcmNQc',
});
