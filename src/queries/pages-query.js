module.exports = `query {
  pages {
    slug
    Title
    components {
      ... on ComponentPageComponentHeader {
        __typename
        id
        title
        image {
          id
          url
          width
          alternativeText
        }
        subtitle
        link {
          id
          url
          text
        }
      }
      ... on ComponentPageComponentTestimonial {
        __typename
        id
        title
        body
        avatar {
          id
          url
          width
          alternativeText
        }
      }
    }
  }
}
`;
