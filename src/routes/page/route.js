const { query } = require('../../queries/strapi-graphql');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const pagesQuery = readFileSync(resolve(__dirname, '../../queries/pages-query.graphql'), 'utf8');
const casesQuery = readFileSync(resolve(__dirname, '../../queries/cases-query.graphql'), 'utf8');
const categoriesQuery = readFileSync(resolve(__dirname, '../../queries/categories-query.graphql'), 'utf8');
const articlesQuery = readFileSync(resolve(__dirname, '../../queries/articles-query.graphql'), 'utf8');

module.exports = {
  all: async ({ helpers }) => {
    const { pages } = await query(pagesQuery, helpers.jwt);

    return pages;
  },
  permalink: ({ request }) => (request.slug === 'home' ? '/' : `/${request.slug}/`),
  data: async ({ request, helpers }) => {
    const { categories } = await query(categoriesQuery, helpers.jwt);
    const { cases } = await query(casesQuery, helpers.jwt);
    const { articles } = await query(articlesQuery, helpers.jwt);

    return { ...request, categories, cases, articles };
  },
};
