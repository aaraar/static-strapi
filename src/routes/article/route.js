const { query } = require('../../queries/strapi-graphql');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const articlesQuery = readFileSync(resolve(__dirname, '../../queries/articles-query.graphql'), 'utf8');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(articlesQuery, helpers.jwt);
    return data.articles;
  },
  permalink: ({ request }) => `/article/${request.slug}/`,
  data: ({ request }) => request,
};
