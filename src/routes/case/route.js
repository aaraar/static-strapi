const { query } = require('../../queries/strapi-graphql');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const casesQuery = readFileSync(resolve(__dirname, '../../queries/cases-query.graphql'), 'utf8');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(casesQuery, helpers.jwt);
    return data.cases
  },
  permalink: ({ request }) => `/case/${request.slug}/`,
  data: ({ request }) => request,
};
