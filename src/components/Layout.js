import React from 'react';
import { element as _element } from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: _element,
};

Layout.defaultProps = {
  children: null,
};
