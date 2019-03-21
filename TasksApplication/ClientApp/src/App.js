import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
  </Layout>
);
