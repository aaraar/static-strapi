const { query } = require('../../queries/strapi-graphql');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const categoriesQuery = readFileSync(resolve(__dirname, '../../queries/categories-query.graphql'), 'utf8');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(categoriesQuery, helpers.jwt);
    return data.categories.map((item) => ({ ...item, slug: item.id }));
  },
  permalink: ({ request }) => `/category/${request.id}/`,
  data: ({ request }) => request,
};
