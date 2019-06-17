import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import SandwichMaker from './containers/SandwichMaker/SandwichMaker'
import Checkout from './containers/Checkout/Ckeckout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SandwichMaker />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
