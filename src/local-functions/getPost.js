import { sanity } from './lib/sanity';

export const fetchPostHere = async (slug) => {
  // Process the search into the query
  let reqFields = `{
    _id,
    _createdAt,
    _updatedAt,
    description,
    mainImg,
    postContentRows,
    postType,
    slug,
    tags[]->{
      tagText
    },
    title,
    subtitle
  }`;
  let query = `*[_type == 'post' && slug.current == '${slug}'][0] ${reqFields}`; // default to everything
  const post = await sanity.fetch(query);
  return post;
};
