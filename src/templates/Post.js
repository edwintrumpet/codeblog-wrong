import React from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post';

export default function PostTemplate({ pageContext }) {
  return <Post {...pageContext} />;
}

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      cover: PropTypes.shape({
        publicURL: PropTypes.string.isRequired,
      }),
    }),
    html: PropTypes.string.isRequired,
  }).isRequired,
};
