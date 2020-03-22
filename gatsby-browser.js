/* eslint-disable import/prefer-default-export */
import React from 'react';
import { element as _element } from 'prop-types';
import Layout from './src/components/Layout';

function Wraper({ element }) {
  return (
    <Layout>
      {element}
    </Layout>
  );
}

Wraper.propTypes = {
  element: _element,
};

Wraper.defaultProps = {
  element: null,
};

export const wrapRootElement = Wraper;
