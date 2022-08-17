import { sanity } from './lib/sanity';
import Plausible from 'plausible-tracker';

export const fetchSearch = async (searchStr, setLoading) => {
  setLoading(true);

  clog('searchStr =', [searchStr]);

  // Process the search into the query
  const terms = searchStr.split(' ');
  let conditionals = '';
  terms.forEach((term, indx) => {
    const cleanTerm = term.trim();
    if (cleanTerm !== '') {
      conditionals += `
        && (
          title match '*${cleanTerm}*' ||
          subtitle match '*${cleanTerm}*' ||
          postContentRows[].contentBlock[].children[].text match '*${cleanTerm}*'
        )
      `;
    }
  });

  clog('conditionals =', [conditionals]);

  // Fields we require in the response
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
    subtitle,
    publishedAt
  }`;
  let searchQuery = `*[_type == 'post' && publishedAt != null ${conditionals}] ${reqFields}`; // default to everything
  const searchStrPosts = await sanity.fetch(searchQuery);

  // Tagged posts (only from the FIRST search term for speed, but could just loop over search terms here)
  const tagQuery = `*[_type == 'tag' && tagText == "${terms[0]}"]{
    "referencedBy": *[ references(^._id) ]${reqFields}
  }`;

  let taggedPosts = await sanity.fetch(tagQuery);
  if (taggedPosts.length > 0) {
    taggedPosts = taggedPosts[0].referencedBy;
  }

  const seen = {};
  const posts = [];
  const postsCombined = [...searchStrPosts, ...taggedPosts];
  postsCombined.filter((post) => {
    if (!(post._id in seen)) {
      posts.push(post);
      seen[post._id] = true;
    }
  });

  clog('seen', [seen]);

  // Capture this event in Plausible
  const { trackEvent } = Plausible();
  trackEvent('got posts');

  setLoading(false);
  return posts;
};
