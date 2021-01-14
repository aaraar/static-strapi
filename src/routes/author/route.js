const { query } = require('../../queries/strapi-graphql');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const authorsQuery = readFileSync(resolve(__dirname, '../../queries/authors-query.graphql'), 'utf8');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(authorsQuery, helpers.jwt);
    return data.users.map((user) => ({ ...user, slug: user.title.toLowerCase().split(' ').join('_') }));
  },
  permalink: ({ request }) => `/author/${request.slug}/`,
  data: ({ request }) => request,
};
