const fetch = require('node-fetch');
require('dotenv').config();
const base = process.env.ENDPOINT;
const { readFileSync } = require('fs');
const { resolve } = require('path');
const footerQuery = readFileSync(resolve(__dirname, '../queries/footer-query.graphql'), 'utf8');

const jwtQuery = `mutation { login(input: { identifier: "${process.env.STRAPI_USER}", password: "${process.env.STRAPI_PASSWORD}" }) {
  jwt
 }
}`;

module.exports = {
  query: async (query, jwt) => {
    try {
      const res = await fetch(`${base}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({query: query})
      })
        .then((response) => {
          if (response.status != 200) {
            throw new Error(`Invalid request (${response.status})`);
          } else {
            return response.json();
          }
        })
        .then((response) => {
          if (response.errors && response.errors.length) {
            throw new Error(response.errors[0].message);
          } else {
            return response.data;
          }
        });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  getJWT: async () => {
    try {
      const res = await fetch(`${base}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: jwtQuery})
      })
        .then((response) => {
          if (response.status != 200) {
            throw new Error(`Invalid request (${response.status})`);
          } else {
            return response.json();
          }
        })
        .then((response) => {
          if (response.errors && response.errors.length) {
            throw new Error(response.errors[0].message);
          } else {
            return response.data.login.jwt;
          }
        });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  getFooter: async () => {
    try {
      const res = await fetch(`${base}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: footerQuery})
      })
        .then((response) => {
          if (response.status != 200) {
            throw new Error(`Invalid request (${response.status})`);
          } else {
            return response.json();
          }
        })
        .then((response) => {
          if (response.errors && response.errors.length) {
            throw new Error(response.errors[0].message);
          } else {
            return response.data.footer;
          }
        });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};
