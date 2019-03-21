import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../navigation/NavMenu';
import './layout.css';

export default props => (
  <div id="content">
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </div>
);
