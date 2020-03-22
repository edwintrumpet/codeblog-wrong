import React from 'react';
import { element as _element } from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <h1>Layout works!</h1>
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
