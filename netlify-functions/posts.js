exports.handler = async (event, context) => {
  const sanityObj = require('./lib/sanity');

  // Can be: 'all', 'articles', 'notes', 'keywords: <search-term-1>, <optional-search-term-1>...', 'tag: <tag>'
  // the keywords and tag versions of searches are automatically prefixed so the user doesn't have to do that.
  const searchStr = event.queryStringParameters.search || '';

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
    title
  }`;
  let query = `*[_type == 'post'] ${reqFields}`; // default to everything
  if (searchStr === 'articles') {
    query = `*[_type == 'post' && postType == 'article'] ${reqFields}`;
  } else if (searchStr === 'notes') {
    query = `*[_type == 'post' && postType == 'notes'] ${reqFields}`;
  }
  // TODO - ELSE IF starts with 'keywords:'
  // TODO - ELSE IF starts with 'tags:'

  const results = await sanityObj.resources.fetch(query);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      searchStr: searchStr,
      results: results,
      postsType: typeof results,
      isArr: Array.isArray(results),
    }),
  };
};
