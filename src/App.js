import React from 'react'
import 'fomantic-ui-css/semantic.css';
import Layout from './components/Layout.js';
import Launch from './components/Launch.js';
import { Container } from 'semantic-ui-react'
import launchData from "./testdata/UpcomingLaunchesSample.json";

const App = () => (
  <Layout>
    <Container>
      <Launch launch={launchData.results[0]} />
    </Container>
  </Layout>
)

export default App;

