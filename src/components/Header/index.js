import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './style.css';

const Header = () => (
  <Row as="header" className="app-header">
    <Col as="h2" className="header-title">Waldo Pizza</Col>
  </Row>
);

export default Header;
