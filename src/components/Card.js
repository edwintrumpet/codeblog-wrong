import React from 'react';
import { Link } from 'gatsby';
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
  id,
  frontmatter: {
    title,
    category,
    author,
  },
  excerpt,
}) {
  const theme = Themes.light;

  return (
    <Link to={id}>
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
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
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
