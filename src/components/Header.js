import React from 'react';
import {
  Container,
  Brand,
  BrandText,
  Title,
  Subtitle,
  DesktopIcon,
  MobileIcon,
} from '../styles/components/Header';
import Navigation from './Navigation';
import Logo from '../assets/icons/Logo';
import colors from '../styles/constants/colors';

export default function Header() {
  // Import this from metadata
  const title = 'Edwin García';
  const subtitle = 'Software developer';

  return (
    <Container>
      <Brand>
        <DesktopIcon>
          <Logo size={80} color={colors.lightGray} />
        </DesktopIcon>
        <MobileIcon>
          <Logo size={60} color={colors.lightGray} />
        </MobileIcon>
        <BrandText>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </BrandText>
      </Brand>
      <Navigation />
    </Container>
  );
}
