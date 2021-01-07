const { query } = require('../../queries/strapi-graphql');
const categoriesQuery = require('../../queries/categories-query');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(categoriesQuery, helpers.jwt);
    return data.categories.map((item) => ({ ...item, slug: item.id }));
  },
  permalink: ({ request }) => `/category/${request.slug}/`,
  data: ({ request }) => request,
};
