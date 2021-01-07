module.exports = `query {
  categories {
    id
    title
    restaurants {
      id
      title
      description
    }
  }
}
`;
