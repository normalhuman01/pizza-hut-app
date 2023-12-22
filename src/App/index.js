import React from 'react';
import Container from 'react-bootstrap/Container';

import { Header } from '../components';
import Main from '../containers/Main';

import './style.css';

const App = () => (
  <Container fluid className="app-container">
    <Header />
    <Main />
  </Container>
);

export default App;
