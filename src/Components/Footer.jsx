import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
<footer className="bg-dark text-light text-center footer-fixed py-1 shadow-sm">

    <Container>
      <small>🔧 Developed by <strong>Sivaji Velampalepu</strong> | © {new Date().getFullYear()}</small>
    </Container>
  </footer>
);

export default Footer;
