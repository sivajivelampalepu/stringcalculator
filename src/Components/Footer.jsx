import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-success text-center py-3 footer-fixed shadow-sm">
    <Container>
      <small>🔧 Developed by <strong>Sivaji Velampalepu</strong> | © {new Date().getFullYear()}</small>
    </Container>
  </footer>
);

export default Footer;
