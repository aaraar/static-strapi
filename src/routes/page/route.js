// const query = require('../../queries/strapi');
const { query } = require('../../queries/strapi-graphql');
const pagesQuery = require('../../queries/pages-query');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(pagesQuery, helpers.jwt);
    return data.pages;
  },
  permalink: ({ request }) => (request.slug === 'home' ? '/' : `/${request.slug}/`),
  data: ({ request }) => request,
};
