/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from '../styles/components/Post';

export default function Post({ html, frontmatter: { title } }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}

Post.propTypes = {
  html: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
