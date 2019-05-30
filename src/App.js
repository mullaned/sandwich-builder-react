import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import SandwichMaker from './containers/SandwichMaker/SandwichMaker'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SandwichMaker />
        </Layout>
      </div>
    );
  }
}

export default App;
