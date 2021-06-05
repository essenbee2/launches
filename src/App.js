import React from 'react'
import 'fomantic-ui-css/semantic.css';
import Layout from './components/Layout.js';
import Launches from './components/Launches.js';
import { Container } from 'semantic-ui-react'
import launchData from "./testdata/UpcomingLaunchesSample.json";

const App = () => (
  <Layout>
    <Container>
      <Launches data={launchData.results} />
    </Container>
  </Layout>
)

export default App;

