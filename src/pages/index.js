import React from 'react';
import { Link } from 'gatsby';

export default function index() {
  return (
    <>
      <h1>index works!</h1>
      <Link to="/about">Go About</Link>
    </>
  );
}
