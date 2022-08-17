import sanityClient from '@sanity/client';

export const sanity = sanityClient({
  projectId: '0tk8v91m',
  dataset: 'production',
  apiVersion: '2021-09-01',
  useCdn: false,
  token:
    'skpbortBQWZ8OdrqvNWmkJ8eqr7LMXSWclzqbHYGgY0W4kXMDLsRzKfSvjwuu5qjAXJ27y92FoAC8qqGqBCEv7n1yMmTmEqMYv5AWORGYjUp0tMbloe4beYbArmTSkKlR2ItyeKHr0w5nY6PsXlSNM36zKkaIOSR736YSD08EPQh82L1jBQp',
});
