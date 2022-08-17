const sanityClient = require('@sanity/client');

const client = sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: '0tk8v91m',
  dataset: 'production',
  apiVersion: '2021-09-01',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
  useCdn: false,
  token:
    'skpbortBQWZ8OdrqvNWmkJ8eqr7LMXSWclzqbHYGgY0W4kXMDLsRzKfSvjwuu5qjAXJ27y92FoAC8qqGqBCEv7n1yMmTmEqMYv5AWORGYjUp0tMbloe4beYbArmTSkKlR2ItyeKHr0w5nY6PsXlSNM36zKkaIOSR736YSD08EPQh82L1jBQp',
});

const fetch = client.fetch;

exports.resources = client;
