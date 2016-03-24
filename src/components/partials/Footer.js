'use strict';

import React from 'react';


export default function Footer() {
  return (
    <footer className="small text-center text-muted">
      <hr />
      <p>&copy; Mozilla {new Date().getFullYear()}</p>
    </footer>
  );
}
