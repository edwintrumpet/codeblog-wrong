import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

export const query = graphql`
  query GET_POSTS{
    allFile {
      edges {
        node {
          relativeDirectory
          base
        }
      }
    }
  }
`;

export default function index({ data }) {
  const posts = [];
  data.allFile.edges.forEach((element) => {
    const item = element.node;
    let postsIndex = posts
      .findIndex((postsElement) => postsElement.relativeDirectory === item.relativeDirectory);
    if (postsIndex === -1) {
      let [date, title] = item.relativeDirectory.split('--');
      title = title.split('-').join(' ');
      date = date.split('-');
      date = new Date(date[0], date[1] - 1, date[2]);
      posts.push({
        title,
        date,
        relativeDirectory: item.relativeDirectory,
        assets: [],
      });
      postsIndex = posts.length - 1;
    }
    if (item.base !== 'index.md') {
      posts[postsIndex].assets.push(item.base);
    }
  });

  console.log(posts);

  return (
    <>
      <h1>index works!</h1>
      <Link to="/about">Go About</Link>
    </>
  );
}

index.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          relativeDirectory: PropTypes.string,
          base: PropTypes.string,
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
