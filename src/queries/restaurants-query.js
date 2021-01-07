module.exports = `query {
  restaurants {
    id
    title
    description
    categories {
      id
      title
    }
  }
}
`;
