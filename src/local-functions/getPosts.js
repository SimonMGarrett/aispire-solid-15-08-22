import { sanity } from './lib/sanity';

export const fetchPostsHere = async () => {
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
  let query = `*[_type == 'post' && publishedAt != null] ${reqFields}`; // default to everything
  const posts = await sanity.fetch(query);

  return posts;
};
