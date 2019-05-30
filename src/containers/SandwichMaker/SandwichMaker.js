import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Sandwich from '../../components/Sandwich/Sandwich'


class SandwichMaker extends Component {

  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat: 2
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