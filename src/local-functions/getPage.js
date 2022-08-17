import { sanity } from './lib/sanity';

export const fetchPageHere = async (pageName) => {
  // Process the search into the query
  let reqFields = `{
    _id,
    _createdAt,
    _updatedAt,
    description,
    slug,
    mainImg,
    pageContentRows,
    title,
    subtitle
  }`;
  let query = `*[_type == 'page' && slug.current == '${pageName}'][0] ${reqFields}`; // default to everything
  const page = await sanity.fetch(query);
  return page;
};
