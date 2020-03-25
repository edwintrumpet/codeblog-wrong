import React, { useState } from 'react';
import { Link } from 'gatsby';
import MenuIcon from '../assets/icons/MenuIcon';
import CloseIcon from '../assets/icons/closeIcon';
import {
  DesktopMenu,
  DesktopList,
  ItemMenuDesktop,
  MobileMenuIcon,
  BackgroundMenu,
  MobileMenu,
  MobileList,
  MobileItem,
  CloseContainer,
} from '../styles/components/Navigation';
import Theme from '../styles/constants/themes';
// Esto debería venir de graphql
import menuItems from '../../content/meta/navigation';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const theme = Theme.light;

  const handleClick = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <>
      <DesktopMenu>
        <DesktopList>
          {menuItems.map((item) => (
            <Link to={item.url}>
              <ItemMenuDesktop key={item.name}>{item.name}</ItemMenuDesktop>
            </Link>
          ))}
        </DesktopList>
      </DesktopMenu>
      <MobileMenuIcon onClick={handleClick}>
        <MenuIcon />
      </MobileMenuIcon>
      <BackgroundMenu
        onClick={handleClick}
        width={showMenu ? '100%' : '0'}
        background={showMenu ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'}
      />
      <MobileMenu theme={theme} width={showMenu ? '80%' : '0'}>
        <MobileList>
          {menuItems.map((item) => (
            <Link to={item.url}>
              <MobileItem key={item} theme={theme}>{item.name}</MobileItem>
            </Link>
          ))}
          <CloseContainer>
            <CloseIcon onClick={handleClick} color={theme.highContrast} />
          </CloseContainer>
        </MobileList>
      </MobileMenu>
    </>
  );
}
