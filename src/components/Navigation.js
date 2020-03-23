import React, { useState } from 'react';
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

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(true);
  const theme = Theme.light;
  // Posteriormente traeré estos datos de la lista de páginas
  const menuItems = [
    'Inicio',
    'Portafolio',
    'Sobre mí',
    'Contacto',
  ];

  const handleClick = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <>
      <DesktopMenu>
        <DesktopList>
          {menuItems.map((item) => <ItemMenuDesktop key={item}>{item}</ItemMenuDesktop>)}
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
          {menuItems.map((item) => <MobileItem key={item} theme={theme}>{item}</MobileItem>)}
          <CloseContainer>
            <CloseIcon onClick={handleClick} color={theme.highContrast} />
          </CloseContainer>
        </MobileList>
      </MobileMenu>
    </>
  );
}
