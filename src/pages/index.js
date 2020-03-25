import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import { Container } from '../styles/pages';

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              category
              author
              cover {
                publicURL
              }
            }
            excerpt(pruneLength: 100, truncate: false)
          }
        }
      }
    }
  }
`;

export default function index({ data }) {
  const posts = [];

  data.allFile.edges.forEach((element) => {
    const item = element.node.childMarkdownRemark;
    if (item) posts.push(item);
  });

  // eslint-disable-next-line no-console
  console.log(posts);

  return (
    <Container>
      {posts.map((element) => <Card key={element.id} {...element} />)}
    </Container>
  );
}

index.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          childMarkdownRemark: PropTypes.shape({
            id: PropTypes.string,
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              category: PropTypes.string,
              author: PropTypes.string,
              cover: PropTypes.shape({
                publicURL: PropTypes.string,
              }),
            }),
            excerpt: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
};

index.defaultProps = {
  data: {
    allFile: {
      edges: [],
    },
  },
};
