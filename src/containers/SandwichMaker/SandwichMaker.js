import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Sandwich from '../../components/Sandwich/Sandwich'


class SandwichMaker extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }


  render() {
    return (
      <Aux>
        <Sandwich ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default SandwichMaker;