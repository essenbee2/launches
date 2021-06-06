import React from 'react'
import 'fomantic-ui-css/semantic.css';
import Layout from './components/Layout.js';
import LaunchCards from './components/LaunchCards.js';
import { Container } from 'semantic-ui-react'

const App = () => (
  <Layout>
    <Container>
      <LaunchCards />
    </Container>
  </Layout>
)

export default App;

