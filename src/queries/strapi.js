const fetch = require('node-fetch');
require('dotenv').config();
const base = process.env.ENDPOINT;

module.exports = async (endpoint) => {
  try {
    const res = await fetch(`${base}/${endpoint}`)
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
          return response;
        }
      });
    return res;
  } catch (error) {
    console.error(error);
  }
};
