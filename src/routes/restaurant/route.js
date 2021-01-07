const { query } = require('../../queries/strapi-graphql');
const restaurantsQuery = require('../../queries/restaurants-query');

module.exports = {
  all: async ({ helpers }) => {
    const data = await query(restaurantsQuery, helpers.jwt);
    return data.restaurants.map((item) => ({ ...item, slug: item.id }));
  },
  permalink: ({ request }) => `/restaurant/${request.slug}/`,
  data: ({ request }) => request,
};
