import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ImageContainer,
  TextContainer,
  Category,
  Title,
  Resume,
  AuthorContainer,
  AvatarContainer,
  Author,
} from '../styles/components/Card';
import Themes from '../styles/constants/themes';

export default function Card({
  frontmatter: {
    title,
    category,
    author,
    cover: { publicURL },
  },
  excerpt,
}) {
  const theme = Themes.light;

  return (
    <Container colors={theme}>
      <ImageContainer />
      <TextContainer colors={theme}>
        <Category colors={theme}>{category}</Category>
        <Title colors={theme}>{title}</Title>
        <Resume colors={theme}>{excerpt}</Resume>
        <AuthorContainer>
          <AvatarContainer />
          <Author colors={theme}>{author}</Author>
        </AuthorContainer>
      </TextContainer>
    </Container>
  );
}

Card.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  excerpt: PropTypes.string.isRequired,
};
