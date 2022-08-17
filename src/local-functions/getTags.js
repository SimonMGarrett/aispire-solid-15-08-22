import { sanity } from './lib/sanity';

export const getTags = async () => {
  // Process the search into the query
  let reqFields = `{
    _id,
    _createdAt,
    _updatedAt,
    tagText
  }`;
  let query = `*[_type == 'tag'] ${reqFields}`; // default to everything
  const tags = await sanity.fetch(query);

  clog('tgas', [query, tags]);
  return tags;
};
