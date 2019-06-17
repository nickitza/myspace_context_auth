import React from 'react';
import { Header, } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <Header as="h3" textAlign="center">
    Page Not Found <br />
  <Link to="/">Home</Link>
  </Header>
)

export default NoMatch;