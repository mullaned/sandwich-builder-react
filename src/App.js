import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SandwichMaker from './containers/SandwichMaker/SandwichMaker'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/" exact component={SandwichMaker} />
          </Switch>    
        </Layout>
      </div>
    );
  }
}

export default App;
